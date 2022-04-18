import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../redux/profile-reducer';
import Message from './Message';


const MessageContainer = (props) => {
   
   let addMesag = (props) => {
      props.store.dispatch(addPostActionCreator());
   };

   let onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action);
   };

   return (<Message updateNewPostText={onPostChange} addMesag={addMesag} personList={props.profilePage.personList} />);
};

export default MessageContainer;