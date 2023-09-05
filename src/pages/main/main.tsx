import styles from './main.module.css';
import { useSelector, useDispatch } from "../../services/hooks";
import { getBooksData } from "../../utils";
import BookCard from '../../components/book-card/book-card';
import { UIEvent, UIEventHandler, useRef, useEffect } from 'react';
import { getMoreBooks } from '../../services/actions/books';

const a = { isTrue: true };

function Main() {
const booksData = useSelector(getBooksData);
const dispatch = useDispatch();
const booksCards = booksData.books.map(item=>(<BookCard key={item.id} book={item}></BookCard>))
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


return (
    <div ref={ref} className={styles.content}>
      {booksCards}
    </div>
)
}

export default Main;
