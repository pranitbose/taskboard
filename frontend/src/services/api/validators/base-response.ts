import { z, ZodType } from "zod/v4";

const MetaSchema = z
  .object({
    message: z.string().optional()
  })
  .optional();

const BaseSuccessResponseSchema = z.object({
  data: z.unknown(),
  meta: MetaSchema
});

type BaseSuccessResponse = z.infer<typeof BaseSuccessResponseSchema>;

const successResponseSchema = <TZodType extends ZodType>(
  dataSchema: TZodType
) =>
  z.object({
    data: dataSchema,
    meta: MetaSchema
  });

const ErrorDetailSchema = z.object({
  field: z.string().nullable(),
  message: z.string()
});

const BaseErrorResponseSchema = z.object({
  error: z.object({
    code: z.string(), // e.g., "VALIDATION_ERROR", "UNAUTHORIZED", etc.
    message: z.string(), // Human-readable summary
    details: z.array(ErrorDetailSchema).optional()
  })
});

type BaseErrorResponse = z.infer<typeof BaseErrorResponseSchema>;

export {
  BaseErrorResponseSchema,
  BaseSuccessResponseSchema,
  successResponseSchema,
  type BaseErrorResponse,
  type BaseSuccessResponse
};
