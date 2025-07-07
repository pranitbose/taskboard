import { isObject } from "@utils/object-helpers";
import { env } from "@validators/env";
import type { DefaultBodyType } from "msw";

const getApiUrl = (endpointPath: string) =>
  `${env.API_BASE_URL}${endpointPath}`;

const hasMissingRequestBodyAttributes = (
  requiredAttributeList: string[],
  requestBody: DefaultBodyType
) =>
  !isObject(requestBody) ||
  requiredAttributeList.some(key => requestBody[key] == null);

export { getApiUrl, hasMissingRequestBodyAttributes };
