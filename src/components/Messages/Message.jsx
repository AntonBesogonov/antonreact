import React from 'react';
import mess from './Mes.module.css';

const Message = (props) => {
   debugger;
   let personList = props.two.map(client => <div>{client.id} and {client.name} </div>);
   let newMessage = React.createRef();

   let onAddMesag = () => {
      props.addMesag();
   };

   let postChange = () => {      
      let text = newMessage.current.value;
      props.updateNewPostText(text);
   };

   return (
      <div className={mess.message}>{personList}         
         <div>
            <textarea onChange={postChange} ref={newMessage} value={props.newPostText} />
         </div>
         <div>
            <button onClick={onAddMesag}>Добавить</button>
         </div>
      </div>
   );
};
export default Message;


