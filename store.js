import { create } from "zustand";
import { produce } from "immer";

export const useStore = create((set) => ({
  movieStore: [],
  addToStore: (payload) =>
    set(
      produce((draft) => {
        draft.movieStore = payload;
      })
    ),
}));
