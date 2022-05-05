import UsersContainer from "../Users/UsersContainer"

const Users = (props) => {
     
  return (
    <div>
      <UsersContainer store={props.store}/>
    </div>
  )
}

export default Users;