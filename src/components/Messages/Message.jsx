import React from 'react';

import mess from './Mes.module.css';



const Message = (props) => {
   let personList = props.two.map(client => <div>{client.id} and {client.name} </div>);   
   let newMessage = React.createRef();

   let onAddMesag = () => {   
      debugger;
      props.addMesag(); 
      debugger;
   };

   let postChange = () => {   
      debugger;
      let text = newMessage.current.value; 
      debugger;
      props.updateNewPostText(text);   
      debugger;
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


