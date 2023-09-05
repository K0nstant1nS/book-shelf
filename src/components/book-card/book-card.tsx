import { FC } from 'react';
import { TBook } from '../../utils/types';
import styles from './book-card.module.css';
import GenreLink from '../genre-link/genre-link';
const image  = require('../../images/No_Image_Available.jpg')

type TBookCardProps = {
  book: TBook
}

const BookCard:FC<TBookCardProps> = ({book}) => {

  const src = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : image;
  const title = book.volumeInfo.title || 'unknown';
  const genres = book.volumeInfo.categories ? book.volumeInfo.categories.map((tag) => {
    return <GenreLink text={tag}></GenreLink>
  }) : null
  const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(" ") : 'Unknown';

  return ( <article className={styles.card}>
    <img className={styles.image} src={src}></img>
    <span className={styles.genres}>{genres}</span>
    <h3>{authors}</h3>
    <p className={styles.title}>{title}</p>
  </article> );
}

export default BookCard;
