import { ChangeEventHandler, FC, ReactNode } from "react";
import styles from './input.module.css'

type TInputProps = {
  additionalClass?: string,
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  element?: ReactNode,
  type: string,
  name: string
}

const Input: FC<TInputProps> = ({value, onChange, additionalClass, element, type='text', name}) => {
  return ( 
  <div className={styles.container}>
    <input name={name} onChange={onChange} value={value} type={type} className={additionalClass}></input>
    {element}
  </div> );
}

export default Input;
