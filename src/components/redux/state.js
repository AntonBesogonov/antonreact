

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {

  _state: {
    profilePage: {
      compot: [
        { id: 111, name: '1' },
        { id: 22, name: 'geru' },
      ],
      newPostText: '',
    },
    dialogPro: {
      qwerty: [
        { id: 888, name: ')))' },
        { id: 999, name: ')))' },
      ],
    },
  },
  getState() {
    return this._state
  },
  _rerender() {
    
   },
 
  subscribe(observer){
    this._rerender = observer; //наблюдатель обсервер (патерн)
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 51,
        name: this._state.profilePage.newPostText,
      };
      this._state.profilePage.compot.push(newPost);
      this._state.profilePage.newPostText = '';
      this._rerender(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newPost;
      this._rerender(this._state);
    }
     
   
  } 
}

export let addPostActionCreator = () => {
    return {
     type: ADD_POST
  }
}

export let updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


export default store;


