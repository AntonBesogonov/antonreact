import React from 'react';
import name from './Header.module.css';

const Header = () => {
  return (
    <div className={name.header}>
      <header>
        <img src="http://htmlbook.ru/themes/hb/img/logo.svg" alt=""></img>
        
      </header>
    </div>
  )
};

export default Header;