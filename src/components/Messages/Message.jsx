import React from 'react';
import updateNewPostText from '../redux/profile-reducer';
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
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);  
   } 


   return (
      <div className={mess.message}>{personList}
         <div>
            <textarea onChange={onPostChange} ref={newMessage} value={props.newPostText}  />
         </div>
         <div>
            <button onClick={addMesag}>Добавить</button>
            
         </div>
      </div>
   )
};
export default Message;


