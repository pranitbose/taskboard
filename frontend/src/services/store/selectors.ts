import type { AppState } from "@app/types/store";

const selectAccessToken = (state: AppState) => state.auth.accessToken;
const selectRefreshToken = (state: AppState) => state.auth.refreshToken;
const selectUser = (state: AppState) => state.auth.user;
const selectSetTokens = (state: AppState) => state.auth.setTokens;
const selectLogout = (state: AppState) => state.auth.logout;

export {
  selectAccessToken,
  selectLogout,
  selectRefreshToken,
  selectSetTokens,
  selectUser
};
