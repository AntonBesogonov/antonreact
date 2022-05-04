import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let store = {

  _state: {
    profilePage: {
      compot: [
        { id: 111, name: '1' },
        { id: 22, name: 'ge23ru' },
        { id: 22, name: 'ger1223412u' },
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
 
  subscribe(observer) {
    this._rerender = observer; //наблюдатель обсервер (патерн)
  },
  
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.profilePage = dialogReducer(this._state.profilePage, action);
    this._rerender(this._state);
  }
};

export default store;


