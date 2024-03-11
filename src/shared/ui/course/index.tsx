import { FC, memo } from "react";
import styles from "./style.module.scss";

type PropsType = {
  image: string;
  bgColor: string;
  name: string;
};

export const Course: FC<PropsType> = memo(({ image, bgColor, name }) => {
  return (
    <div className={styles.box}>
      <div className={styles.picture} style={{ backgroundColor: bgColor }}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className={styles.title}>{name}</div>
    </div>
  );
});
