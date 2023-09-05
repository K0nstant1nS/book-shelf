import styles from './error.module.css';
const image = require('../../images/sadCat.gif');

function Error() {
  return ( <div>
    <div className={styles.content}>
      <h1>Произошла ошибка =(</h1>
      <img src={image}></img>
    </div>
  </div> );
}

export default Error;
