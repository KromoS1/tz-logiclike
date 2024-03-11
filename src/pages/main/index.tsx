import { CourseTable, Sidebar } from "@/features";
import { useCoursesQuery } from "./module";
import styles from "./style.module.scss";
import { memo } from "react";

export const MainPage = memo(() => {
  useCoursesQuery();

  return (
    <div className={styles.container}>
      <Sidebar />
      <CourseTable />
    </div>
  );
});
