const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let profileReducer = (state, action) => {

  if (action.type === ADD_POST) {
    let newPost = {
      id: 51,
      name: state.newPostText,
    };
    state.compot.push(newPost);    
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;    
  }

  return state;
};

export let addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};

export let updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
};

export default profileReducer;