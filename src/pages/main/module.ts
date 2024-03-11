import { TCourses, useCourses } from "@/entities";
import { QUERY_KEYS, instance, noRefetch } from "@/shared";
import { useQuery } from "react-query";

export const useCoursesQuery = () => {
  const setCourses = useCourses.use.setCourses();
  const setAllTags = useCourses.use.setAllTags();

  return useQuery({
    queryKey: [QUERY_KEYS.GET_COURSES],
    queryFn: () =>
      instance.get<TCourses[]>("/docs/courses.json").then(res => res.data),
    ...noRefetch,
    refetchInterval: false,
    refetchOnMount: true,
    onSuccess: res => {
      setCourses(res);
      setAllTags();
    },
  });
};
