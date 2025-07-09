import type { AuthTokens } from "../types/tokens";
import type { AuthenticatedUser } from "../types/user";

type AuthSliceState = {
  accessToken: string | null;
  refreshToken: string | null;
  user: AuthenticatedUser | null;
};

type AuthSliceActions = {
  setTokens: (authTokens: AuthTokens) => void;
  logout: () => void;
};

type AuthSlice = AuthSliceState & AuthSliceActions;

export type { AuthSlice };
