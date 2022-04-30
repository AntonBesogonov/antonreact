const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initionalState = {
  compot: [
    { id: 111, name: '1' },
    { id: 22, name: 'geru' },
  ],
  newPostText: '',
};

let profileReducer = (state = initionalState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        name: state.newPostText,
      };
      let stateCopy = { ...state };
      stateCopy.compot = { ...state.compot };
      stateCopy.compot.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.compot = { ...state.compot };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }

  

};

export let addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export let updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;