import type { RequestHandler } from "msw";
import { authHandlers } from "./auth";

const handlers: RequestHandler[] = [...authHandlers];

export { handlers };
