const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initionalState = {
  compot: [
    { id: 111, name: '1' },
    { id: 22, name: 'ge123ru' },
  ],
  newPostText: '',
};

let profileReducer = (state = initionalState, action) => {
  //debugger;
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        name: state.newPostText,
      };
      return {
        ...state,
        ...state.compot.push(newPost),
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

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
