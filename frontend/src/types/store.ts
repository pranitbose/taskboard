import type { AuthSlice } from "@features/auth/types/auth-slice";
import type { StateCreator } from "zustand";

type AppState = {
  auth: AuthSlice;
};

type StateSlice<T> = StateCreator<AppState, [["zustand/immer", never]], [], T>;

export type { AppState, StateSlice };
