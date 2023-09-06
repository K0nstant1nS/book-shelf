import styles from './main.module.css';
import { useSelector, useDispatch } from "../../services/hooks";
import { getBooksData } from "../../utils";
import BookCard from '../../components/book-card/book-card';
import { useRef, useEffect } from 'react';
import { getMoreBooks } from '../../services/actions/books';
import Loader from '../../components/loader/loader';
import Error from '../../components/error/error';

const a = { isTrue: true };

function Main() {
const booksData = useSelector(getBooksData);
const dispatch = useDispatch();
const booksCards = booksData.books.map((item, index)=>(<BookCard key={index} book={item}></BookCard>))
const ref = useRef<HTMLDivElement>(null)
const scrollListener = (e: Event) => {
  const { current } = ref;
  if(current){
    const { height, y } = current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (windowHeight + -y + 300 >= height && a.isTrue) {
      a.isTrue = false;
      dispatch(getMoreBooks(booksData.searchQuery, booksData.inStore, a));
    }
  }
};

useEffect(() => {
  document.addEventListener("scroll", scrollListener);
  return () => {
    document.removeEventListener("scroll", scrollListener);
  };
}, [ref.current, booksData.inStore]);

const render = () => {
  switch (booksData.status){
    case 'loading': {
      return <Loader></Loader>
    }
    case 'success': {
      return(
        <div className={styles.container}>
        <p><h3>Loaded: </h3>{booksData.inStore}/{booksData.totalItems}</p>
        <div ref={ref} className={styles.content}>
            {booksCards}
        </div>
        </div>
      )
    }
    case 'error': {
      return (
      <Error></Error>
      )
    }
    default: {
      return(
      <div ref={ref} className={styles.content}>
        <h1>Здесь пока пусто</h1>
      </div>
      )
    }
  }
}


return render()
}

export default Main;
