import { create } from "zustand";
import { ActionsType, StateType } from "./types";
import { createSelectors } from "@/shared";
import { getUniqueTags } from "./lib";

const useCategoriesBase = create<StateType & ActionsType>(set => ({
  state: {
    currentTag: null,
    allTags: [],
    categories: [],
  },
  setTag: tag =>
    set(store => ({
      state: {
        ...store.state,
        currentTag: tag,
      },
    })),
  setAllTags: () =>
    set(store => ({
      state: {
        ...store.state,
        allTags: getUniqueTags(store.state.categories),
      },
    })),
  setCategories: categories =>
    set(store => ({
      state: {
        ...store.state,
        categories: [...categories],
      },
    })),
}));

export const useCategories = createSelectors(useCategoriesBase);
