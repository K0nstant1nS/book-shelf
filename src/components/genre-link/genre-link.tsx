import { FC } from "react";
import styles from "./genre-link.module.css";

type TGenreLinkProps = {
  text: string
}

const GenreLink: FC<TGenreLinkProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <span className={styles.content}>{text}</span>
    </div>
  );
}

export default GenreLink;
