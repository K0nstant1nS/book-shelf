import { FC, MouseEvent } from 'react';

interface IButtonProps{
  children?: string,
  additionalClass?: string,
  isDisabled?: boolean,
  type?: "button" | "submit" | "reset",
  onClick?: (event: MouseEvent)=>void
}

const Button:FC<IButtonProps> = ({children, additionalClass, isDisabled = false, type, onClick}) => {

  return <button onClick={onClick} className={additionalClass} type={type} disabled={isDisabled}>{children}</button>
}

export default Button;
