import type { AuthTokens } from "@features/auth/types/tokens";
import type {
  LoginFormValues,
  SignUpFormValues
} from "@features/auth/validators/auth-form-schema";
import type { AuthResponse, LoginRequest, RegisterRequest } from "./dto";

const mapToLoginRequest = (formValues: LoginFormValues): LoginRequest => {
  const { email, password } = formValues;
  return {
    email,
    password: btoa(password)
  };
};

const mapToRegisterRequest = (
  formValues: SignUpFormValues
): RegisterRequest => {
  const { firstName, lastName, email, password } = formValues;
  return {
    firstName,
    lastName,
    email,
    password: btoa(password)
  };
};

const mapAuthResponse = (response: AuthResponse): AuthTokens => {
  const { data } = response;
  return {
    accessToken: data.accessToken,
    refreshToken: data.refreshToken
  };
};

export { mapAuthResponse, mapToLoginRequest, mapToRegisterRequest };
