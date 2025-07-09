import { ApiEndpoints, HttpStatusCodes } from "@services/api";
import { delay, http, HttpResponse, type RequestHandler } from "msw";
import { getBadRequestErrorResponse, getBaseSuccessResponse } from "../../data";
import {
  getApiUrl,
  hasMissingRequestBodyAttributes
} from "../../utils/request-response-helpers";

const adminAccessToken =
  // eslint-disable-next-line sonarjs/no-hardcoded-secrets
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicm9sZSI6eyJpZCI6InIxIiwibmFtZSI6ImFkbWluIn0sIndvcmtzcGFjZV9pZCI6IndzMTIzIiwiaWF0IjoxNTE2MjM5MDIyfQ.fGGX1WIs4BrLMNOzS0NixjteE-eYx10SiRVk80qgNe8";

const authHandlers: RequestHandler[] = [
  http.post(getApiUrl(ApiEndpoints.LOGIN), async ({ request }) => {
    const reqBody = await request.json();

    await delay();

    const requiredAttributeList = ["email", "password"];
    if (hasMissingRequestBodyAttributes(requiredAttributeList, reqBody)) {
      return HttpResponse.json(getBadRequestErrorResponse(), {
        status: HttpStatusCodes.BAD_REQUEST
      });
    }
    return HttpResponse.json({
      ...getBaseSuccessResponse(),
      data: {
        accessToken: adminAccessToken,
        refreshToken: "12345"
      }
    });
  }),
  http.post(getApiUrl(ApiEndpoints.REGISTER), async ({ request }) => {
    const reqBody = await request.json();

    await delay();

    const requiredAttributeList = [
      "firstName",
      "lastName",
      "email",
      "password"
    ];
    if (hasMissingRequestBodyAttributes(requiredAttributeList, reqBody)) {
      return HttpResponse.json(getBadRequestErrorResponse(), {
        status: HttpStatusCodes.BAD_REQUEST
      });
    }
    return HttpResponse.json({
      ...getBaseSuccessResponse(),
      data: {
        accessToken: adminAccessToken,
        refreshToken: "56789"
      }
    });
  }),
  http.post(getApiUrl(ApiEndpoints.REFRESH_TOKEN), async ({ request }) => {
    const reqBody = await request.json();

    await delay();

    const requiredAttributeList = ["refreshToken"];
    if (hasMissingRequestBodyAttributes(requiredAttributeList, reqBody)) {
      return HttpResponse.json(getBadRequestErrorResponse(), {
        status: HttpStatusCodes.BAD_REQUEST
      });
    }
    return HttpResponse.json({
      ...getBaseSuccessResponse(),
      data: {
        accessToken: adminAccessToken,
        refreshToken: "01234"
      }
    });
  })
];

export { authHandlers };
