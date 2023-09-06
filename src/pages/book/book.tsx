import { useEffect, useState } from 'react';
import styles from './book.module.css'
import { useParams } from 'react-router';
import Api from '../../API';
import { TBook } from '../../utils/types';
import GenreLink from '../../components/genre-link/genre-link';
import Loader from '../../components/loader/loader';
const image  = require('../../images/No_Image_Available.jpg');

type TBookState = {
  status: 'error'|'success'|'loading',
  data: TBook|null
}

function BookPage() {
  const { id } = useParams();
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
    .catch((e)=>{
      console.log(e)
      setBook({
        ...book,
        status: 'error',
      })
    })
  }, [])

  const render = () => {
     if(book.data){
      const added:string[] = []
      /* Многие жанры приходят в формате жанр/жанр/жанр, думаю уместно их разбить с проверкой на дубликаты*/
      const categories = book.data.volumeInfo.categories ? book.data.volumeInfo.categories.map(category => {
        if(category.includes('/')){ 
          return category.split(' / ').map(item=>{
            if(added.includes(item)){
              return null
            }
            added.push(item)
            return <GenreLink text={item}></GenreLink>
          })
        }
        if(added.includes(category)){
          return null
        }
        added.push(category)
        return <GenreLink text={category}></GenreLink>
      }) : null
      return(
      <div className={styles.container}>
          <div className={styles.imageContainer}>
          <img className={styles.image} src={(book.data.volumeInfo.imageLinks && book.data.volumeInfo.imageLinks.thumbnail) || image}></img>
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.categories}>{categories}</div>
          <h1 className={styles.title}>{book.data.volumeInfo.title}</h1>
          <span className={styles.authors}>{book.data.volumeInfo.authors}</span>
          <p dangerouslySetInnerHTML={{__html: book.data.volumeInfo.description}} className={styles.description}></p>
        </div>
      </div>
      )
    }
    return <Loader></Loader>
  }


  return render();
}

export default BookPage;
