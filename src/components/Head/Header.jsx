import React from 'react';
import name from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  return (
    <div className={name.header}>
      <header>
        <img src="http://htmlbook.ru/themes/hb/img/logo.svg" alt=""></img>
        <div className={name.loginBlock}>
          {props.isAuth ? props.login :
            <NavLink to={'/login'}>
              Login
            </NavLink>}
        </div>


      </header>
    </div>
  )
};

export default Header;