import React from 'react';
import { connect } from 'react-redux';
import prof from './Profile.module.css';




const Profile = (props) => {
  
  let personList = props.two.map(client => <div>{client.id} and {client.name} </div>);
  
  return (    
    <div className={prof.itsprof}>{personList}</div>
  )
};

export default Profile;


 
