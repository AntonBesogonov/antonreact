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
    userPage: {
      users: [
        {
          id: 1,
          photoUrl: 'https://yandex.ru/images/search?pos=0&from=tabbar&img_url=https%3A%2F%2Fi0.wp.com%2Fvoyagist.ru%2Fwp-content%2Fuploads%2F2017%2F11%2Forel-reshka-vedushchie-anton-ptushkin-1.jpg&text=%D0%B0%D0%BD%D1%82%D0%BE%D0%BD+%D0%BF%D1%82%D1%83%D1%88%D0%BA%D0%B8%D0%BD+%D1%84%D0%BE%D1%82%D0%BE&rpt=simage',
          followed: false,
          fullName: 'Dmitry',
          status: 'I am boss 1',
          location: { city: 'Minsk', country: 'Belarus' },
        },
        {
          id: 2,
          photoUrl: 'https://yandex.ru/images/search?pos=0&from=tabbar&img_url=https%3A%2F%2Fi0.wp.com%2Fvoyagist.ru%2Fwp-content%2Fuploads%2F2017%2F11%2Forel-reshka-vedushchie-anton-ptushkin-1.jpg&text=%D0%B0%D0%BD%D1%82%D0%BE%D0%BD+%D0%BF%D1%82%D1%83%D1%88%D0%BA%D0%B8%D0%BD+%D1%84%D0%BE%D1%82%D0%BE&rpt=simage',
          followed: true,
          fullName: 'Sasha',
          status: 'I am boss 2',
          location: { city: 'Moscow', country: 'Russia' },
        },
        {
          id: 3,
          photoUrl: 'https://yandex.ru/images/search?pos=0&from=tabbar&img_url=https%3A%2F%2Fi0.wp.com%2Fvoyagist.ru%2Fwp-content%2Fuploads%2F2017%2F11%2Forel-reshka-vedushchie-anton-ptushkin-1.jpg&text=%D0%B0%D0%BD%D1%82%D0%BE%D0%BD+%D0%BF%D1%82%D1%83%D1%88%D0%BA%D0%B8%D0%BD+%D1%84%D0%BE%D1%82%D0%BE&rpt=simage',
          followed: false,
          fullName: 'Andrew',
          status: 'I am boss 3',
          location: { city: 'Kiev', country: 'Ukraine' },
        },
      ],
    }
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


