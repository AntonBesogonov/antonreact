const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initionalState = {
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
};

let usersReducer = (state = initionalState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export let followAC = (userId) => ({ type: FOLLOW, userId });
export let unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export let setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
