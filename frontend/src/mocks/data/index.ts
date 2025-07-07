import type { BaseErrorResponse, BaseSuccessResponse } from "@services/api";

const getBaseErrorResponse = (): BaseErrorResponse => ({
  error: {
    code: "INTERNAL_SERVER_ERROR",
    message: "Something went wrong. Please try again later.",
    details: [
      {
        field: null,
        message: "Unexpected exception occurred in processing the request."
      }
    ]
  }
});

const getBaseSuccessResponse = (): BaseSuccessResponse => ({
  data: {},
  meta: {
    message: "Success"
  }
});

const getBadRequestErrorResponse = (): BaseErrorResponse => ({
  error: {
    code: "BAD_REQUEST",
    message: "Request validation failed."
  }
});

export {
  getBadRequestErrorResponse,
  getBaseErrorResponse,
  getBaseSuccessResponse
};
