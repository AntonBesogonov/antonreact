import React from "react";
import Us from './Users.module.css';


let Users = (props) => {
     if (props.users.length === 0) {
          props.setUsers([
               {
                    id: 1,
                    photoUrl:
                         'https://bugaga.ru/uploads/posts/2016-01/1453106278_znamenitosti-dva-v-odnom-10.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am boss 1',
                    location: { city: 'Minsk', country: 'Belarus' },
               },
               {
                    id: 2,
                    photoUrl:
                         'https://bugaga.ru/uploads/posts/2016-01/1453106278_znamenitosti-dva-v-odnom-10.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am boss 2',
                    location: { city: 'Moscow', country: 'Russia' },
               },
               {
                    id: 3,
                    photoUrl:
                         'https://bugaga.ru/uploads/posts/2016-01/1453106278_znamenitosti-dva-v-odnom-10.jpg',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am boss 3',
                    location: { city: 'Kiev', country: 'Ukraine' },
               },
          ]
          )

     };

     return (

          <div className={Us.users}>
               {
                    props.users.map(u => <div key={u.id}>
                         <span>
                              <div>
                                   <img src={u.photoUrl} className={Us.photo}></img>
                              </div>
                              <div>
                                   {u.followed
                                        ? <button onClick={() => { props.unfollow(u.id) }} >UnFollow</button>
                                        : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
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
          </div>
     );


}

export default Users;


