import { create } from "zustand";
import { produce } from "immer";

export const useStore = create((set) => ({
  movieStore: [],
  title: "",
  addToStore: (payload) =>
    set(
      produce((draft) => {
        draft.movieStore = payload;
      })
    ),
  getTitle: (payload) =>
    set(
      produce((draft) => {
        draft.title = payload;
      })
    ),
}));
