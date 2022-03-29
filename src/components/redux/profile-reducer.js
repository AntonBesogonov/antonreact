const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initionalState = {
  compot: [
    { id: 111, name: '1' },
    { id: 22, name: 'geru' },
  ],
  newPostText: ''
};

let profileReducer = (state = initionalState, action) => {

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