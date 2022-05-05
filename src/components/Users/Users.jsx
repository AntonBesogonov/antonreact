import React from "react";

let Users = (props) => {
     
     let mapingUsers = props.users.map(u => <div key={u.id}>{u.id} and {u.fullName}</div>);

     return (
          <div >{mapingUsers}         
             
          </div>
       );
}

export default Users;

