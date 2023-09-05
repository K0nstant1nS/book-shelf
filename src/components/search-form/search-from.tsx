import { FormEvent, useState, useEffect, useRef } from "react";
import styles from './search-form.module.css'
import { useDispatch } from "../../services/hooks";
import { getBooks } from "../../services/actions/books";
import Button from "../button/button";
import { useNavigate } from "react-router";

function SearchForm() {
  const [searchValue, setSeachValue] = useState('');
  const [categories, setCategories] = useState('');
  const [soringBy, setSortingBy] = useState('');
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement|null>(null)
  const dispatch = useDispatch();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(getBooks(searchValue))
    navigate('/')
  }

  useEffect(()=>{
    if(ref.current){
      const { height } = ref.current.getBoundingClientRect();
      document.documentElement.style.setProperty('--search-block-height', `${height}px`)
    }
  }, [ref.current])
  return ( 
  <div className={styles.form} ref={ref}>
    <form className={styles.formContent} onSubmit={onSubmit}>
      <input type="text" value={searchValue} onChange={(e)=>setSeachValue(e.target.value)}/>
      <input type='text'></input>
      <select>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
      </select>
      <Button>Получить</Button>
    </form>
  </div> );
}

export default SearchForm;
