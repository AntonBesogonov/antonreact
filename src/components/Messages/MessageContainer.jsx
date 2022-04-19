import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../redux/profile-reducer';
import Message from './Message';



const MessageContainer = (props) => {
   debugger;
   
   let state = props.store.getState();
   
   let addMesag = () => {
      props.store.dispatch(addPostActionCreator());
   };

   let onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action);
   };

   return (<Message updateNewPostText={onPostChange} addMesag={addMesag} two={state.profilePage.compot} newPostText={state.profilePage.newPostText} />);
};

export default MessageContainer;