import { z } from "zod/v4";
import { successResponseSchema } from "../validators/base-response";

const AuthResponseDataSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string()
});

type ZodTypeAuthRespData = typeof AuthResponseDataSchema;

const AuthResponseSchema = successResponseSchema<ZodTypeAuthRespData>(
  AuthResponseDataSchema
);

type ZodTypeAuthResp = typeof AuthResponseSchema;

export { AuthResponseSchema, type ZodTypeAuthResp, type ZodTypeAuthRespData };
