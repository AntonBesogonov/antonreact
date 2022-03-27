import profileReducer from "../redux/profile-reducer"



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
        { id: 888, name: ')11))' },
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
    profileReducer(this._state.profilePage.newPostText, action);

    this._rerender(this._state);
    
   
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


