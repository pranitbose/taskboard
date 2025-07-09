import type { StateSlice } from "@app/types/store";
import { sessionStorage, SessionStorageKeys } from "@services/web-store";
import type { AuthSlice } from "../../types/auth-slice";
import { verifyDecodeJwtToken } from "../../utils/jwt-token-helper";

const persistedRefreshToken = sessionStorage.get(
  SessionStorageKeys.REFRESH_TOKEN
);

const createAuthSlice: StateSlice<AuthSlice> = set => ({
  accessToken: null,
  refreshToken: persistedRefreshToken,
  user: null,
  setTokens: authTokens => {
    set(state => {
      state.auth.accessToken = authTokens.accessToken;
      state.auth.refreshToken = authTokens.refreshToken;
      state.auth.user = verifyDecodeJwtToken(authTokens.accessToken);
      sessionStorage.set(
        SessionStorageKeys.REFRESH_TOKEN,
        state.auth.refreshToken
      );
    });
  },
  logout: () => {
    set(state => {
      state.auth.accessToken = null;
      state.auth.refreshToken = null;
      state.auth.user = null;
      sessionStorage.remove(SessionStorageKeys.REFRESH_TOKEN);
    });
  }
});

export { createAuthSlice };
