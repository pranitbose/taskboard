import { createAuthSlice } from "@app/features/auth/services/store";
import type { AppState } from "@app/types/store";
import { create } from "zustand";

const useStore = create<AppState>()((...props) => ({
  ...createAuthSlice(...props)
}));

export { useStore };
