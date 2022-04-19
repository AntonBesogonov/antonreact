import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../redux/profile-reducer';
import Message from './Message';



const MessageContainer = (props) => {
<<<<<<< HEAD
   debugger;
   
   let state = props.store.getState();
=======
>>>>>>> 85bc2eea047feb7b2ba876fc5551d51d72cbb3dc
   
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