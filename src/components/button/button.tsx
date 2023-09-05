import { FC } from 'react';
import styles from './button.module.css'

interface IButtonProps{
  children: string
}

const Button:FC<IButtonProps> = ({children}) => {

  return <button className={styles.button} type='submit'>{children}</button>
}

export default Button;
