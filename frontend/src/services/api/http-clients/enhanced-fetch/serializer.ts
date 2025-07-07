const appendParam = (
  params: URLSearchParams,
  key: string,
  value: unknown
): void => {
  if (value == null) return;

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    params.append(key, String(value));
  } else if (value instanceof Date) {
    params.append(key, value.toISOString());
  } else {
    try {
      params.append(key, JSON.stringify(value));
    } catch {
      // Skip unserializable values (e.g., circular references)
    }
  }
};

const transformQueryParams = (params?: Record<string, unknown>): string => {
  if (!params) return "";
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    appendParam(query, key, value);
  });
  return `?${query.toString()}`;
};

const transformRequestBody = (
  contentType: string,
  body?: unknown
  // eslint-disable-next-line sonarjs/function-return-type
): BodyInit | undefined => {
  if (!body) return undefined;

  if (contentType.includes("application/json")) {
    return JSON.stringify(body);
  }

  if (contentType.includes("application/x-www-form-urlencoded")) {
    const urlParams = new URLSearchParams();
    Object.entries(body as Record<string, unknown>).forEach(([key, value]) => {
      if (value != null) appendParam(urlParams, key, value);
    });
    return urlParams;
  }

  if (contentType.includes("multipart/form-data")) {
    const formData = new FormData();
    Object.entries(body as Record<string, unknown>).forEach(([key, value]) => {
      if (value != null) formData.append(key, value as Blob | string);
    });
    return formData;
  }

  return body as BodyInit;
};

export { transformQueryParams, transformRequestBody };
