export type TCourses = {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
};

export type StateType = {
  state: {
    currentTag: string | null;
    allTags: string[];
    courses: TCourses[];
  };
};

export type ActionsType = {
  setTag: (tag: string | null) => void;
  setAllTags: () => void;
  setCourses: (courses: TCourses[]) => void;
};
