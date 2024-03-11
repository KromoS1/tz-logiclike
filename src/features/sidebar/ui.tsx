import { ButtonNameCourse } from "@/shared";
import "./style.scss";
import { useMemo } from "react";
import { useTags } from "./module";

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
