import { z } from "zod/v4";
import { defaultHeaders, defaultRetryCount, defaultTimeout } from "./config";
import { HttpError, SchemaValidationError } from "./errors";
import { transformQueryParams, transformRequestBody } from "./serializer";
import type {
  EnhanceFetch,
  HttpClientInstance,
  HttpClientOptions,
  HttpCreateClientConfig,
  Interceptor,
  Middleware,
  NormalizedHttpClientOptions
} from "./types";
import { retryRequest } from "./utils";

const parseResponse = async (
  response: Response,
  responseType: string
): Promise<unknown> => {
  try {
    switch (responseType) {
      case "arraybuffer":
        return await response.arrayBuffer();
      case "blob":
        return await response.blob();
      case "text":
        return await response.text();
      case "json":
        return await response.json();
      case "document": {
        const text = await response.text();
        return new DOMParser().parseFromString(text, "text/html");
      }
      case "stream":
        return response.body;
      default:
        return await response.text();
    }
  } catch {
    return null;
  }
};

const handleResponse = async <T>(
  response: Response,
  responseType: NormalizedHttpClientOptions["responseType"],
  schema: NormalizedHttpClientOptions["schema"]
): Promise<T> => {
  const parsedResponse = (await parseResponse(
    response,
    responseType
  )) as Promise<T>;
  if (schema === undefined) {
    return parsedResponse as T;
  }
  const result = z.safeParse(schema, parsedResponse);
  if (!result.success) {
    throw new SchemaValidationError(response, z.treeifyError(result.error));
  }
  return result.data as T;
};

const handleErrorResponse = async (
  response: Response,
  responseType: NormalizedHttpClientOptions["responseType"]
): Promise<unknown> => parseResponse(response, responseType);

const applyHooks = async <T>(
  hooks: Array<(value: T) => Promise<T>>,
  initial: T
): Promise<T> => {
  let result = initial;
  for (const hook of hooks) {
    result = await hook(result);
  }
  return result;
};

const prepareRequestOptions = async (
  config: HttpCreateClientConfig,
  options: HttpClientOptions,
  interceptors: Interceptor[],
  middlewares: Middleware[]
): Promise<NormalizedHttpClientOptions> => {
  const {
    baseUrl = "",
    headers: defaultCustomHeaders = {},
    timeout = defaultTimeout,
    retryCount = defaultRetryCount
  } = config;

  const {
    url: rawUrl,
    method,
    headers: customHeaders = {},
    timeout: reqTimeout = timeout,
    retryCount: reqRetry = retryCount,
    baseUrl: reqBaseUrl = baseUrl,
    params,
    body: rawBody,
    signal,
    responseType = "json",
    schema
  } = options;

  const url = reqBaseUrl + rawUrl + transformQueryParams(params);
  const mergedHeaders = {
    ...defaultHeaders,
    ...defaultCustomHeaders,
    ...customHeaders
  };
  const contentType = mergedHeaders["Content-Type"] || "";
  const body = transformRequestBody(contentType, rawBody);

  const finalOptions: NormalizedHttpClientOptions = {
    url,
    method,
    headers: mergedHeaders,
    timeout: reqTimeout,
    retryCount: reqRetry,
    baseUrl: reqBaseUrl,
    params,
    body,
    signal,
    responseType,
    schema
  };

  const requestHooks = [
    ...interceptors.map(i => i.onRequest).filter(Boolean),
    ...middlewares.map(m => m.onRequest).filter(Boolean)
  ] as Array<
    (opts: NormalizedHttpClientOptions) => Promise<NormalizedHttpClientOptions>
  >;

  return await applyHooks(requestHooks, finalOptions);
};

const fetchWithRetryAndTimeout = async (
  options: NormalizedHttpClientOptions,
  interceptors: Interceptor[] = [],
  middleware: Middleware[] = []
): Promise<Response> => {
  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort();
  }, options.timeout);

  try {
    const res = await retryRequest(options.retryCount, () =>
      fetch(options.url, {
        method: options.method,
        headers: options.headers,
        ...(options.body !== undefined && { body: options.body }),
        signal: options.signal ?? controller.signal
      })
    );

    clearTimeout(timer);

    const responseHooks = [
      ...interceptors.map(i => i.onResponse).filter(Boolean),
      ...middleware.map(m => m.onResponse).filter(Boolean)
    ] as Array<(res: Response) => Promise<Response>>;

    return await applyHooks(responseHooks, res);
  } catch (error: unknown) {
    await Promise.all(interceptors.map(i => i.onError?.(error)));
    throw error;
  }
};

const createClient = (
  config: HttpCreateClientConfig = {}
): HttpClientInstance => {
  const interceptors: Interceptor[] = [];
  const middlewares: Middleware[] = [];

  const request = async <T = unknown>(
    options: HttpClientOptions
  ): Promise<T> => {
    const finalOptions = await prepareRequestOptions(
      config,
      options,
      interceptors,
      middlewares
    );
    const response = await fetchWithRetryAndTimeout(
      finalOptions,
      interceptors,
      middlewares
    );
    if (!response.ok) {
      const errorData = await handleErrorResponse(
        response,
        finalOptions.responseType
      );
      throw new HttpError(response, errorData);
    }
    return await handleResponse<T>(
      response,
      finalOptions.responseType,
      finalOptions.schema
    );
  };

  return {
    request,
    get: (url, options) => request({ ...options, url, method: "GET" }),
    post: (url, body, options) =>
      request({ ...options, url, method: "POST", body }),
    put: (url, body, options) =>
      request({ ...options, url, method: "PUT", body }),
    patch: (url, body, options) =>
      request({ ...options, url, method: "PATCH", body }),
    delete: (url, options) => request({ ...options, url, method: "DELETE" }),
    useInterceptor(interceptor) {
      interceptors.push(interceptor);
    },
    useMiddleware(middleware) {
      middlewares.push(middleware);
    }
  } as const;
};

const enhancedFetch: EnhanceFetch = { createClient } as const;

export { enhancedFetch };
