import React from 'react';//rafce
import style from '../css/Button.module.css';

const Button = ({texto,...props}) => {
  //onClick é passado pela props
  return (
    <button className={style.proximo} {...props}>{texto}</button>
  )
}

export default Button;