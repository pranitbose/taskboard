import { AuthApiEndpoints } from "../auth";

const ApiEndpoints = {
  ...AuthApiEndpoints
} as const;

export { ApiEndpoints };
