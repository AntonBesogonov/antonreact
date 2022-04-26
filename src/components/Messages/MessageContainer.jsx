import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../redux/profile-reducer';
import Message from './Message';



const MessageContainer = (props) => {
   
   
   let state = props.store;
   
   let addMesag = () => {
      props.store.dispatch(addPostActionCreator());
   };

   let onPostChange = (text) => {
      
      let action = updateNewPostTextActionCreator(text);
      debugger;
      props.dispatch.dispatch(action);
      
   };

   return (<Message updateNewPostText={onPostChange} addMesag={addMesag} two={state.profilePage.compot} newPostText={state.profilePage.newPostText}  />);
};

export default MessageContainer;