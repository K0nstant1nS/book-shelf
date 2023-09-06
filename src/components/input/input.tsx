import { ChangeEventHandler, FC, ReactNode } from "react";
import styles from './input.module.css'

type TInputProps = {
  additionalClass?: string,
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  image?: ReactNode,
  type: string
}

const Input: FC<TInputProps> = ({value, onChange, additionalClass, image, type='text'}) => {
  return ( 
  <div className={styles.container}>
    <input onChange={onChange} value={value} type={type} className={additionalClass}></input>
    {image}
  </div> );
}

export default Input;
