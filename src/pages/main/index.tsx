import { Sidebar } from "@/features";
import { useCategoriesQuery } from "./module";

export const MainPage = () => {
  useCategoriesQuery();

  return (
    <>
      <Sidebar />
    </>
  );
};
