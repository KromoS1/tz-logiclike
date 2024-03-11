import { TCategory } from ".";

export const getUniqueTags = (categories: TCategory[]) => [
  ...new Set(categories.flatMap(c => c.tags || [])),
];
