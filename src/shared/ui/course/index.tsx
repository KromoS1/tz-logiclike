import { FC, memo } from "react";
import "./style.scss";
import { TCourses } from "@/entities/courses/types";

type PropsType = {
  course: TCourses;
};

export const Course: FC = memo(() => {
  return (
    <div className="box">
      <div className="picture"></div>
      <div className="title"></div>
    </div>
  );
});
