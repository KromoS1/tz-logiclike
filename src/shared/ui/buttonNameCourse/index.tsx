import { FC, memo, useMemo } from "react";
import "./styles.scss";

type PropsType = {
  title: string;
  value: string | null;
  isActive: boolean;
  selectTag: (value: string | null) => void;
};

export const ButtonNameCourse: FC<PropsType> = memo(
  ({ title, value, isActive, selectTag }) => {
    const activeClass = useMemo(() => (isActive ? "active" : ""), [isActive]);

    const click = () => selectTag(value);

    return (
      <div className={`box ${activeClass}`} onClick={click}>
        {title}
      </div>
    );
  }
);
