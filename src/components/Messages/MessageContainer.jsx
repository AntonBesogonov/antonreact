import React from 'react';
import mess from './Mes.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../redux/profile-reducer';
import Message from './Message';


const MessageContainer = (props) => {
   let personList = props.two.map(client => <div>{client.id} and {client.name} </div>);   
   let newMessage = React.createRef();

   let addMesag = () => {
      props.dispatch(addPostActionCreator());
   };

   let onPostChange = () => {
      let text = newMessage.current.value;
      props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
   };


   return (
      <Message updateNewPostText={() => {}} />
   );
};
export default MessageContainer;


