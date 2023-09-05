import styles from './app.module.css';
import Main from '../pages/main/main';
import SearchForm from '../components/search-form/search-from';

function App() {
  return (
    <div className={styles.app}>
      <SearchForm></SearchForm>
      <Main></Main>
      <div className={styles.background}></div>
    </div>
  );
}

export default App;
