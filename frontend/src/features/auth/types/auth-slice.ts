import type { AuthTokens } from "../types/tokens";

type AuthSliceState = {
  accessToken: string | null;
  refreshToken: string | null;
};

type AuthSliceActions = {
  setTokens: (authTokens: AuthTokens) => void;
};

type AuthSlice = AuthSliceState & AuthSliceActions;

export type { AuthSlice };
