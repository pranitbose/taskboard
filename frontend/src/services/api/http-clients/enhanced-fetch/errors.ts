class HttpError extends Error {
  public readonly status: number;
  public readonly statusText: string;
  public readonly response: Response;
  public readonly responseData: unknown;

  constructor(response: Response, responseData: unknown) {
    super(`HTTP Error: ${String(response.status)} ${response.statusText}`);

    this.name = "HttpError";
    this.status = response.status;
    this.statusText = response.statusText;
    this.response = response;
    this.responseData = responseData;

    Error.captureStackTrace(this, HttpError);
  }
}

class SchemaValidationError extends Error {
  public readonly response: Response;
  public readonly error: unknown;

  constructor(response: Response, error: unknown) {
    super("Schema validation failed");

    this.name = "SchemaValidationError";
    this.response = response;
    this.error = error;

    Error.captureStackTrace(this, SchemaValidationError);
  }
}

export { HttpError, SchemaValidationError };
