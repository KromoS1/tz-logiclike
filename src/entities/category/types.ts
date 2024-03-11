export type TCategory = {
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
    categories: TCategory[];
  };
};

export type ActionsType = {
  setTag: (tag: string | null) => void;
  setAllTags: () => void;
  setCategories: (categories: TCategory[]) => void;
};
