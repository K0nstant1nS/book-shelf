import { useEffect, useState } from 'react';
import styles from './book.module.css'
import { useParams } from 'react-router';
import { useSelector } from '../../services/hooks';
import { getBooksData } from '../../utils';
import Api from '../../API';
import { TBook } from '../../utils/types';
import GenreLink from '../../components/genre-link/genre-link';
import Loader from '../../components/loader/loader';
const image  = require('../../images/No_Image_Available.jpg')

type TBookState = {
  status: 'error'|'success'|'loading',
  data: TBook|null

}

function BookPage() {
  const { id } = useParams();
  const gamesData = useSelector(getBooksData);
  const [book, setBook] = useState<TBookState>({
    status: 'loading',
    data: null
  });
  
  useEffect(()=>{
    Api.getBookById(id!)
    .then(book => {
      console.log(book)
      setBook({
        status: 'success',
        data: book
      })
    })
    .catch(()=>{
      setBook({
        ...book,
        status: 'error',
      })
    })
  }, [])

  const render = () => {
     if(book.data){
      const categories = book.data.volumeInfo.categories ? book.data.volumeInfo.categories.map(category => {
        return <GenreLink text={category}></GenreLink>
      }) : null
      return(
      <div className={styles.container}>
          <div className={styles.imageContainer}>
          <img className={styles.image} src={book.data.volumeInfo.imageLinks.thumbnail}></img>
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.categories}>{categories}</div>
          <h1 className={styles.title}>{book.data.volumeInfo.title}</h1>
          <span className={styles.authors}>{book.data.volumeInfo.authors}</span>
          <p className={styles.description}>{book.data.volumeInfo.description}</p>
        </div>
      </div>
      )
    }
    return <Loader></Loader>
  }


  return render();
}

export default BookPage;
