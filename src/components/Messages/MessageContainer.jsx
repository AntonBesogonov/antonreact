import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../redux/profile-reducer';
import Message from './Message';

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