import type { ZodType } from "zod/v4";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type HttpResponseType =
  | "arraybuffer"
  | "document"
  | "json"
  | "text"
  | "stream"
  | "blob";

type HttpRequestOptions = {
  baseUrl?: string | undefined;
  headers?: Record<string, string> | undefined;
  timeout?: number | undefined;
  retryCount?: number | undefined;
  signal?: AbortSignal | undefined;
  params?: Record<string, unknown> | undefined;
  responseType?: HttpResponseType | undefined;
  schema?: ZodType | undefined;
};

type HttpClientOptions = HttpRequestOptions & {
  url: string;
  method: HttpMethod;
  body?: unknown;
};

type NormalizedHttpClientOptions = HttpClientOptions & {
  baseUrl: string;
  headers: Record<string, string>;
  timeout: number;
  retryCount: number;
  responseType: HttpResponseType;
  body: BodyInit | undefined;
};

type Interceptor = {
  onRequest?: (options: HttpClientOptions) => Promise<HttpClientOptions>;
  onResponse?: (response: Response) => Promise<Response>;
  onError?: (error: unknown) => Promise<unknown>;
};

type Middleware = {
  onRequest?: (options: HttpClientOptions) => Promise<HttpClientOptions>;
  onResponse?: (response: Response) => Promise<Response>;
};

type HttpCreateClientConfig = {
  baseUrl?: string | undefined;
  headers?: Record<string, string> | undefined;
  timeout?: number | undefined;
  retryCount?: number | undefined;
};

type HttpClientInstance = {
  get<T = unknown>(url: string, options?: HttpRequestOptions): Promise<T>;
  post<T = unknown>(
    url: string,
    body?: unknown,
    options?: HttpRequestOptions
  ): Promise<T>;
  put<T = unknown>(
    url: string,
    body?: unknown,
    options?: HttpRequestOptions
  ): Promise<T>;
  patch<T = unknown>(
    url: string,
    body?: unknown,
    options?: HttpRequestOptions
  ): Promise<T>;
  delete<T = unknown>(url: string, options?: HttpRequestOptions): Promise<T>;
  request<T = unknown>(options: HttpClientOptions): Promise<T>;
  useInterceptor: (interceptor: Interceptor) => void;
  useMiddleware: (middleware: Middleware) => void;
};

type EnhanceFetch = {
  createClient: (config?: HttpCreateClientConfig) => HttpClientInstance;
};

export type {
  EnhanceFetch,
  HttpClientInstance,
  HttpClientOptions,
  HttpCreateClientConfig,
  HttpMethod,
  HttpRequestOptions,
  HttpResponseType,
  Interceptor,
  Middleware,
  NormalizedHttpClientOptions
};
