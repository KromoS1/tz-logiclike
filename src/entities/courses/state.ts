import { create } from "zustand";
import { ActionsType, StateType } from "./types";
import { createSelectors } from "@/shared";
import { getUniqueTags } from "./lib";

const useCoursesBase = create<StateType & ActionsType>(set => ({
  state: {
    currentTag: null,
    allTags: [],
    courses: [],
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
        allTags: getUniqueTags(store.state.courses),
      },
    })),
  setCourses: courses =>
    set(store => ({
      state: {
        ...store.state,
        categories: [...courses],
      },
    })),
}));

export const useCourses = createSelectors(useCoursesBase);
