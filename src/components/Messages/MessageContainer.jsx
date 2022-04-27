import React from 'react';
import StoreContext from '../../StoreContext';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../redux/profile-reducer';
import Message from './Message';



const MessageContainer = (props) => {      
  

   return (
      <StoreContext.Consumer>
         {
         (store) => {
            
            let addMesag = () => {
               store.dispatch(addPostActionCreator());
            };
         
            let onPostChange = (text) => {      
               let action = updateNewPostTextActionCreator(text);      
               store.dispatch(action);      
            };

            return <Message updateNewPostText={onPostChange}
               addMesag={addMesag}
               two={store.getState().profilePage.compot}
               newPostText={store.getState().profilePage.newPostText} />
         }                          
      }
      </StoreContext.Consumer>
   );
};

export default MessageContainer;