import type { AppState } from "@app/types/store";

const selectAccessToken = (state: AppState) => state.auth.accessToken;
const selectSetTokens = (state: AppState) => state.auth.setTokens;

export { selectAccessToken, selectSetTokens };
