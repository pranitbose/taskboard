import type { z } from "zod/v4";
import type { ZodTypeAuthResp, ZodTypeAuthRespData } from "./validators";

type LoginRequest = {
  email: string;
  password: string;
};

type AuthResponse = z.infer<ZodTypeAuthResp>;

type AuthResponseData = z.infer<ZodTypeAuthRespData>;

type RegisterRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type { AuthResponse, AuthResponseData, LoginRequest, RegisterRequest };
