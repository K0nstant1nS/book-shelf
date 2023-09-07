import { ChangeEventHandler, FC, ReactNode } from "react";
import styles from './input.module.css'

type TInputProps = {
  additionalClass?: string,
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  element?: ReactNode,
  type: string
}

const Input: FC<TInputProps> = ({value, onChange, additionalClass, element, type='text'}) => {
  return ( 
  <div className={styles.container}>
    <input onChange={onChange} value={value} type={type} className={additionalClass}></input>
    {element}
  </div> );
}

export default Input;
