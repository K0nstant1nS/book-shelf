import { FC } from "react";
import styles from "./genre-link.module.css";
import { useDispatch } from "../../services/hooks";
import { useNavigate } from "react-router";
import { getQueryString, replaceSpaces } from "../../utils";
import { getBooks } from "../../services/actions/books";

type TGenreLinkProps = {
  text: string
}

const GenreLink: FC<TGenreLinkProps> = ({ text }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(getBooks(getQueryString('', replaceSpaces(text))))
    navigate('/')
  }

  return (
    <div onClick={onClick} className={styles.container}>
      <span className={styles.content}>{text}</span>
    </div>
  );
}

export default GenreLink;
