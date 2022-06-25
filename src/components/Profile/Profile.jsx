import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import prof from './Profile.module.css';

const Profile = (props) => {
  debugger;
  if (!props.profile) {
    return <Preloader />
  }
  debugger;
  return (
    <div className={prof.itsprof}>
      <img src={props.profile.photos.large}></img>
    </div>
  );
};

export default Profile;



