import React from 'react';
import style from '../css/Header.module.css';
import LogoSvg from './LogoSvg';

const Header = ({li,href,...props}) => {
  return (
    <header>
        <nav className={style.navegacao}>
            <span className={style.logo}>
                <LogoSvg color="#84e" classe='svg' />
                Quiz Online - Javascript e React
            </span>
            <ul className={style.ul}>
                {li.map((e,i) => (
                    <li key={i}>
                        <a href={href[i]} target='_blank' rel='noreferrer'>{e}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
};
export default Header;