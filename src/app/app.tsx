import styles from './app.module.css';
import Main from '../pages/main/main';
import SearchForm from '../components/search-form/search-from';
import { HashRouter, Routes, Route } from "react-router-dom";
import BookPage from '../pages/book/book';
import ErrorPage from '../pages/error/error';

function App() {
  return (
    <div className={styles.app}>
      <HashRouter>
      <SearchForm></SearchForm>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/book/:id" element={<BookPage />}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
      </HashRouter>
      <div className={styles.background}></div>
    </div>
  );
}

export default App;
