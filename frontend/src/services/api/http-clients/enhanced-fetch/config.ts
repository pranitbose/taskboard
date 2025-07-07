const defaultTimeout = 10_000;

const defaultHeaders: Record<string, string> = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const defaultRetryCount = 0;

const xsrfCookieName = "XSRF-TOKEN";
const xsrfHeaderName = "X-XSRF-TOKEN";

export {
  defaultHeaders,
  defaultRetryCount,
  defaultTimeout,
  xsrfCookieName,
  xsrfHeaderName
};
