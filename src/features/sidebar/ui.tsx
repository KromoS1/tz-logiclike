import { ButtonNameCourse } from "@/shared";
import "./style.scss";
import { useCategories } from "@/entities";
import { useCallback, useMemo } from "react";

const useTags = () => {
  const allTags = useCategories.use.state().allTags;
  const currentTag = useCategories.use.state().currentTag;
  const setTag = useCategories.use.setTag();

  const selectTag = useCallback((tag: string | null) => {
    setTag(tag);
  }, []);

  return { currentTag, allTags, selectTag };
};

export const Sidebar = () => {
  const { currentTag, allTags, selectTag } = useTags();

  const tags = useMemo(
    () =>
      allTags.map(tag => (
        <ButtonNameCourse
          key={tag}
          title={tag}
          value={tag}
          selectTag={selectTag}
          isActive={currentTag == tag}
        />
      )),
    [allTags, currentTag]
  );

  return (
    <div className="sidebar">
      <ButtonNameCourse
        title={"Все темы"}
        value={null}
        selectTag={selectTag}
        isActive={currentTag == null}
      />
      {tags}
    </div>
  );
};
