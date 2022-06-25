import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import prof from './Profile.module.css';

const Profile = (props) => {
  
  if (!props.profile) {
    return <Preloader />
  }
  
  return (
    <div className={prof.itsprof}>
      <img src={props.profile.photos.large}></img>
    </div>
  );
};

export default Profile;



