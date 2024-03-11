import { TCategory, useCategories } from "@/entities";
import { QUERY_KEYS, instance, noRefetch } from "@/shared";
import { useQuery } from "react-query";

export const useCategoriesQuery = () => {
  const setCategories = useCategories.use.setCategories();
  const setAllTags = useCategories.use.setAllTags();

  return useQuery({
    queryKey: [QUERY_KEYS.GET_CATEGORIES],
    queryFn: () =>
      instance.get<TCategory[]>("/docs/courses.json").then(res => res.data),
    ...noRefetch,
    refetchInterval: false,
    refetchOnMount: true,
    onSuccess: res => {
      setCategories(res);
      setAllTags();
    },
  });
};
