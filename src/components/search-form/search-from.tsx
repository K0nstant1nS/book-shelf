import { FormEvent, useState, useEffect, useRef } from "react";
import styles from './search-form.module.css'
import { useDispatch } from "../../services/hooks";
import { getBooks } from "../../services/actions/books";
import Button from "../button/button";
import { useNavigate } from "react-router";
import { getQueryString } from "../../utils";
import Input from "../input/input";
const inputImage = require('../../images/search-50.png');

function SearchForm() {
  const [searchValue, setSeachValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('all');
  const [sortingBy, setSortingBy] = useState('relevance');
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement|null>(null)
  const dispatch = useDispatch();
  const onSubmit = (e: FormEvent) => {
    if(searchValue === ''){
      console.log('incorrect search value')
      return
    }
    e.preventDefault()
    dispatch(getBooks(getQueryString(searchValue, categoryValue, sortingBy)))
    navigate('/')
    setSeachValue('')
  }

  useEffect(()=>{
    const query = `q=js`
    dispatch(getBooks(query))
  }, [])

  useEffect(()=>{
    if(ref.current){
      const { height } = ref.current.getBoundingClientRect();
      document.documentElement.style.setProperty('--search-block-height', `${height}px`)
    }
  }, [ref.current])

  const imageNode = <img onClick={onSubmit} className={styles.inputImage} src={inputImage} alt='Лупа'></img>

  return ( 
  <div className={styles.form} ref={ref}>
    <form className={styles.formContent} onSubmit={onSubmit}>
      <Input additionalClass={styles.search} type="text" value={searchValue} onChange={(e)=>setSeachValue(e.target.value)} image={imageNode}/>
      <fieldset className={styles.searchSet}>
        <select value={categoryValue} onChange={(e)=>setCategoryValue(e.target.value)}>
          <option value="all">all</option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="history">history</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </select>
        <select value={sortingBy} onChange={(e)=>setSortingBy(e.target.value)}>
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
       </select>
      </fieldset>
      <Button additionalClass={styles.submitButton} isDisabled={searchValue === ''}>Получить</Button>
    </form>
  </div> );
}

export default SearchForm;
