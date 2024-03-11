import { useCourses } from "@/entities";
import { Course } from "@/shared";
import styles from "./style.module.scss";
import { useMemo } from "react";

export const CourseTable = () => {
  const courses = useCourses.use.state().courses;
  const currentTag = useCourses.use.state().currentTag;

  const table = useMemo(() => {
    let currentCourses = courses;

    if (currentTag !== null) {
      currentCourses = courses.filter(c => c.tags.includes(currentTag));
    }

    return currentCourses.map(c => (
      <Course key={c.id} image={c.image} bgColor={c.bgColor} name={c.name} />
    ));
  }, [currentTag, courses]);

  return <div className={styles.table_course}>{table}</div>;
};
