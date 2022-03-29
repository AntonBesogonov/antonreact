import React from 'react';

import mess from './Mes.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../redux/profile-reducer';



const Message = (props) => {

   let personList = props.two.map(client => <div>{client.id} and {client.name} </div>);
   
   let newMessage = React.createRef();


   let addMesag = () => {      
      props.dispatch(addPostActionCreator());      
   }

   let onPostChange = () => {
      let text = newMessage.current.value;   
      
      props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
      
      
   } 


   return (
      <div className={mess.message}>{personList}
         <div>
            <textarea onChange={onPostChange} ref={newMessage} value={props.newPostText}  />
         </div>
         <div>
            <button onClick={addMesag}>--- Send ---</button>
            
         </div>
      </div>
   )
};
export default Message;


