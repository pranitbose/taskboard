import { ApiEndpoints, HttpStatusCodes } from "@services/api";
import { delay, http, HttpResponse, type RequestHandler } from "msw";
import { getBadRequestErrorResponse, getBaseSuccessResponse } from "../../data";
import {
  getApiUrl,
  hasMissingRequestBodyAttributes
} from "../../utils/request-response-helpers";

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
        accessToken: "12345",
        refreshToken: "56789"
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
        accessToken: "12345",
        refreshToken: "56789"
      }
    });
  })
];

export { authHandlers };
