import { FC, memo, useMemo } from "react";
import styles from "./styles.module.scss";

type PropsType = {
  title: string;
  value: string | null;
  isActive: boolean;
  selectTag: (value: string | null) => void;
};

export const ButtonNameCourse: FC<PropsType> = memo(
  ({ title, value, isActive, selectTag }) => {
    const activeClass = useMemo(
      () => (isActive ? styles.active : ""),
      [isActive]
    );

    const click = () => selectTag(value);

    return (
      <div className={`${styles.box} ${activeClass}`} onClick={click}>
        {title}
      </div>
    );
  }
);
