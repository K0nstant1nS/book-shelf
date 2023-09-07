import { FC } from 'react';
import { TBook } from '../../utils/types';
import styles from './book-card.module.css';
import { useNavigate } from 'react-router';
const image  = require('../../images/No_Image_Available.jpg')

type TBookCardProps = {
  book: TBook
}

const BookCard:FC<TBookCardProps> = ({book}) => {

  const navigate = useNavigate()

  const onClick = () => {
    navigate(`book/${book.id}`)
  }

  const src = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.large || book.volumeInfo.imageLinks.medium || book.volumeInfo.imageLinks.small || book.volumeInfo.imageLinks.extraLarge || book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail : image
  const title = book.volumeInfo.title || 'unknown';
  const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : 'Unknown'

  return ( <article onClick={onClick} className={styles.card}>
    <img className={styles.image} src={src} alt='книжная обложка'></img>
    <p className={styles.genre}>{book.volumeInfo.categories ? book.volumeInfo.categories[0] : 'no category'}</p>
    <h4 className={styles.title}>{title}</h4>
    <p className={styles.authors}>{authors}</p>
  </article> );
}

export default BookCard;
