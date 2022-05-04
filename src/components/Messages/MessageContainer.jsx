import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../redux/profile-reducer';
import Message from './Message';

 /*const MessageContainer = (props) => {
    let state = props.store.getState();
    let addMesag = () => {
       props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {

       props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (<Message updateNewPostText={onPostChange}
       addMesag={addMesag}
       two={state.profilePage.compot}
       newPostText={state.profilePage.newPostText} />);
 };*/

let mapStateToProps = (state) => {
   return {
      two: state.profilePage.compot,
      newPostText: state.profilePage.newPostText
   }
};

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => { dispatch(updateNewPostTextActionCreator(text)) },
      addMesag: () => { dispatch(addPostActionCreator()) }
   }
};

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;