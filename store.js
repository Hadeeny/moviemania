import { create } from "zustand";
import { produce } from "immer";

export const useStore = create((set) => ({
  movieStore: [],
  resultStore: [],
  title: "",
  addToStore: (payload) =>
    set(
      produce((draft) => {
        draft.movieStore = payload;
      })
    ),
    addToResults: (payload) =>
    set(
      produce((draft) => {
        draft.resultStore = payload;
      })
    ),
  getTitle: (payload) =>
    set(
      produce((draft) => {
        draft.title = payload;
      })
    ),
}));
