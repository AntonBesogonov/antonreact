import React from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../../StoreContext';
import navigator from './Nav.module.css';

const Nav = () => {
  
  return (
    <StoreContext.Consumer>
      {
        (store) => {

          <div className={navigator.nav}>
            <div>
            
            </div>
            <div>
           
            </div>
          </div>
        }
    
    
    
      };
    </StoreContext.Consumer>
  );
};
export default Nav;