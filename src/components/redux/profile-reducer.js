const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  compot: [
    { id: 111, name: '23123' },
    { id: 22, name: 'geru' },
  ],
  newPostText: '',
};

let profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 51,
      name: state.newPostText,
    };
    state.compot.push(newPost);
    state.profilePage.newPostText = '';     
    
  } else if (action.type === UPDATE_NEW_POST_TEXT){
    state.newPostText = action.newText;  
    
  };
  return state;
}

export let addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};

export let updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
};

export default profileReducer;