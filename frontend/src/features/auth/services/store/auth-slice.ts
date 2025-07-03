import { type StateCreator } from "zustand";

type AuthSlice = {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
};

const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = set => ({
  accessToken: null,
  setAccessToken: token => {
    set(() => ({ accessToken: token }));
  }
});

export { createAuthSlice, type AuthSlice };
