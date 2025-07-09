import type { AuthTokens } from "@features/auth/types/tokens";
import type {
  LoginFormValues,
  SignUpFormValues
} from "@features/auth/validators/auth-form-schema";
import {
  mapAuthResponse,
  mapToLoginRequest,
  mapToRegisterRequest
} from "@services/api/auth/transform";
import { AuthResponseSchema } from "@services/api/auth/validators";
import { apiClient } from "../base-client";
import type { AuthResponse } from "./dto";
import { AuthApiEndpoints } from "./endpoints";

const login = async (formValues: LoginFormValues): Promise<AuthTokens> => {
  const requestData = mapToLoginRequest(formValues);
  const response = await apiClient.post<AuthResponse>(
    AuthApiEndpoints.LOGIN,
    requestData,
    { schema: AuthResponseSchema }
  );
  return mapAuthResponse(response);
};

const register = async (formValues: SignUpFormValues): Promise<AuthTokens> => {
  const requestData = mapToRegisterRequest(formValues);
  const response = await apiClient.post<AuthResponse>(
    AuthApiEndpoints.REGISTER,
    requestData,
    { schema: AuthResponseSchema }
  );
  return mapAuthResponse(response);
};

const refreshToken = async (refreshToken: string): Promise<AuthTokens> => {
  const response = await apiClient.post<AuthResponse>(
    AuthApiEndpoints.REFRESH_TOKEN,
    { refreshToken },
    { schema: AuthResponseSchema }
  );
  return mapAuthResponse(response);
};

export { login, refreshToken, register };
