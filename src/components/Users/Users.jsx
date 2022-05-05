import React from "react";
import Us from './Users.module.css';

let Users = (props) => {
     let mapingUsers = props.users.map(u => <div>{u.id} and {u.fullName} </div>);
     

     return (
          <div className={Us.users}>{mapingUsers}         
             
          </div>
       );


}

export default Users;

{/* <div>
     {
          props.users.map(u => <div>
               <span>
                    <div>
                         <img></img>
                    </div>
                    <div>
                         <button>Follow</button>
                    </div>
               </span>
               <span>
                    <span>
                         <div>{u.fullName}</div>
                         <div>{u.status}</div>
                    </span>
                    <span>
                         <div>{u.location.country}</div>
                         <div>{u.location.city}</div>
                    </span>
               </span>
          </div>)
     }
</div> */}