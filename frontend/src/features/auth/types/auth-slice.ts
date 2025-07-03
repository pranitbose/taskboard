type AuthSliceState = {
  accessToken: string | null;
};

type AuthSliceActions = {
  setAccessToken: (token: AuthSliceState["accessToken"]) => void;
};

type AuthSlice = AuthSliceState & AuthSliceActions;

export type { AuthSlice };
