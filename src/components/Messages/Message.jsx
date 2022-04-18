import React from 'react';
import { addPostActionCreator } from '../redux/profile-reducer';
import mess from './Mes.module.css';





const Message = (props) => {
   let personList = props.two.map(client => <div>{client.id} and {client.name} </div>);   
   let newMessage = React.createRef();

   let onAddMesag = () => {
      
      props.updateNewPostText(text);      
   };

   let PostChange = () => {
      
      let text = newMessage.current.value; 
      
      props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
      
   };


   return (
      <div className={mess.message}>{personList}
         <div>
            <textarea onChange={PostChange} ref={newMessage} value={props.newPostText} />
         </div>
         <div>
            <button onClick={onAddMesag}>Добавить</button>
            
         </div>
      </div>
   );
};
export default Message;


