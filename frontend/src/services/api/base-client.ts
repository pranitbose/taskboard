import { env } from "@validators/env";
import { enhancedFetch } from "./http-clients/enhanced-fetch";

const apiClient = enhancedFetch.createClient({
  baseUrl: env.API_BASE_URL
});

export { apiClient };
