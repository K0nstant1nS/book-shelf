import { FC } from 'react';

interface IButtonProps{
  children?: string,
  additionalClass?: string
}

const Button:FC<IButtonProps> = ({children, additionalClass}) => {

  return <button className={additionalClass} type='submit'>{children}</button>
}

export default Button;
