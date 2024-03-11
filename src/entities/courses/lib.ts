import { TCourses } from "./types";

export const getUniqueTags = (courses: TCourses[]) => [
  ...new Set(courses.flatMap(c => c.tags || [])),
];
