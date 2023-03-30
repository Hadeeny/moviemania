import { create } from "zustand";
import { produce } from "immer";

export const useStore = create((set) => ({
  kdramas: [],
  addDrama: (payload) =>
    set(
      produce((draft) => {
        draft.kdramas = payload;
      })
    ),
}));
