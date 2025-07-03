import type { StateSlice } from "@app/types/store";
import type { AuthSlice } from "../../types/auth-slice";

const createAuthSlice: StateSlice<AuthSlice> = set => ({
  accessToken: null,
  setAccessToken: token => {
    set(state => {
      state.auth.accessToken = token;
    });
  }
});

export { createAuthSlice };
