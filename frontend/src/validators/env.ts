import { z } from "zod/v4";

const envSchema = z.object({
  APP_ENV: z.union([
    z.literal("local"),
    z.literal("development"),
    z.literal("test"),
    z.literal("production")
  ]),
  APP_DOMAIN: z.url(),
  API_BASE_URL: z.url()
});

type Environment = z.infer<typeof envSchema>;

const loadEnvironmentConfig = (): Environment => {
  const parsedEnv = envSchema.safeParse({
    APP_ENV: import.meta.env.APP_ENV,
    APP_DOMAIN: import.meta.env.APP_DOMAIN,
    API_BASE_URL: import.meta.env.API_BASE_URL
  });
  if (!parsedEnv.success) {
    const parsedEnvErrors = Object.entries(
      z.flattenError(parsedEnv.error).fieldErrors
    )
      .map(([k, v]) => `- ${k}: ${v.join()}`)
      .join("\n");
    throw new Error(
      `Invalid environment configuration provided. The following variables are missing or invalid:\n${parsedEnvErrors} `
    );
  }
  return parsedEnv.data;
};

const env = loadEnvironmentConfig();

export { env, type Environment };
