const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initionalState = {
  compot: [
    { id: 111, name: '1' },
    { id: 22, name: 'ge123ru' },
  ],
  newPostText: '',
  profile: null,
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
    
      case SET_USER_PROFILE:
        return {
          ...state,
          profile: action.profile,
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



export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
 

export default profileReducer;
