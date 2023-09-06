import { FC } from 'react';

interface IButtonProps{
  children?: string,
  additionalClass?: string,
  isDisabled?: boolean
}

const Button:FC<IButtonProps> = ({children, additionalClass, isDisabled = false}) => {

  return <button className={additionalClass} type='submit' disabled={isDisabled}>{children}</button>
}

export default Button;
