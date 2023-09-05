import styles from './loader.module.css'
const image = require('../../images/loader.webp')

function Loader() {
  return ( 
    <div className={styles.container}>
      <img className={styles.image} src={image}></img> 
    </div>
  );
}

export default Loader;
