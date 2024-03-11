import { useCourses } from "@/entities";
import { useCallback } from "react";

export const useTags = () => {
  const allTags = useCourses.use.state().allTags;
  const currentTag = useCourses.use.state().currentTag;
  const setTag = useCourses.use.setTag();

  const selectTag = useCallback((tag: string | null) => {
    setTag(tag);
  }, []);

  return { currentTag, allTags, selectTag };
};
