import type { AppState } from "@app/types/store";

const selectAccessToken = (state: AppState) => state.auth.accessToken;
const selectSetAccessToken = (state: AppState) => state.auth.setAccessToken;

export { selectAccessToken, selectSetAccessToken };
