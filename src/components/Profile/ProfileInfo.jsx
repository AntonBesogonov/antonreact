import React from 'react';
import Preloader from '../common/Preloader/Preloader';

let ProfileInfo = (props) => {

 if (!props.profile) {
  return <Preloader />
 }

 return (

  <img src={props.profile.photos.small}></img>

 )

}

export default ProfileInfo;