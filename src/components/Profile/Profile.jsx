import React from 'react';
import prof from './Profile.module.css';
import StoreContext from '../../StoreContext';



const Profile = (props) => {
  
  let personList = props.two.map(client => <div>{client.id} and {client.name} </div>);
  
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          <div className={prof.itsprof}>{personList}</div>
        }
      }
    </StoreContext.Consumer>
  )
};

export default Profile;