import { createAuthSlice } from "@app/features/auth/services/store";
import type { AppState } from "@app/types/store";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useStore = create<AppState>()(
  immer((...props) => ({
    auth: createAuthSlice(...props)
  }))
);

export { useStore };
