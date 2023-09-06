import { FC, MouseEvent } from "react";
import styles from "./genre-link.module.css";
import { useDispatch } from "../../services/hooks";
import { useNavigate } from "react-router";
import { getQueryString, replaceSpaces } from "../../utils";
import { getBooks } from "../../services/actions/books";

type TGenreLinkProps = {
  text: string,
  clickable?: boolean
}

const GenreLink: FC<TGenreLinkProps> = ({ text, clickable = false }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(getBooks(getQueryString('', replaceSpaces(text))))
    navigate('/')
  }

  const mouseOver = (e: MouseEvent) => {
    e.preventDefault()
  }

  return (
    <div onClick={clickable ? onClick : undefined} className={`${styles.container} ${clickable && styles.dynamic}`}>
      <span className={styles.content}>{text}</span>
    </div>
  );
}

export default GenreLink;
