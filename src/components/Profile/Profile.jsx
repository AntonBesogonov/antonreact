import React from 'react';

import prof from './Profile.module.css';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  
  return (

    <ProfileInfo profile={props.profile} />
  );
};

export default Profile;