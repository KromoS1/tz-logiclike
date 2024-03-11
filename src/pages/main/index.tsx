import { CourseTable, Sidebar } from "@/features";
import { useCoursesQuery } from "./module";

export const MainPage = () => {
  useCoursesQuery();

  return (
    <>
      <Sidebar />
      <CourseTable />
    </>
  );
};
