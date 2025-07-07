import type { StateSlice } from "@app/types/store";
import type { AuthSlice } from "../../types/auth-slice";

const createAuthSlice: StateSlice<AuthSlice> = set => ({
  accessToken: null,
  refreshToken: null,
  setTokens: authTokens => {
    set(state => {
      state.auth.accessToken = authTokens.accessToken;
      state.auth.refreshToken = authTokens.refreshToken;
    });
  }
});

export { createAuthSlice };
