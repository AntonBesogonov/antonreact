import MessageContainer from "../Messages/MessageContainer"

const Dialogs = (props) => {
  return (
    <div>
      <MessageContainer store={props.store}/>
    </div>
  )
}

export default Dialogs;