import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../redux/profile-reducer';
import Message from './Message';
import { connect } from 'react-redux';

const MessageContainer = (props) => {

   let addMesag = () => {
      props.store.dispatch(addPostActionCreator());
   };

   

   let onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action);      
   };

   return ( <Message updateNewPostText={onPostChange} addMesag={addMesag}  /> );
};





export default MessageContainer;