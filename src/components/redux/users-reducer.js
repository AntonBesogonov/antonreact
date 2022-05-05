const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initionalState = {
  users: [
    {
      id: 1,
      photoUrl:
        'https://bugaga.ru/uploads/posts/2016-01/1453106278_znamenitosti-dva-v-odnom-10.jpg',
      followed: false,
      fullName: 'Dmitry',
      status: 'I am boss 1',
      location: { city: 'Minsk', country: 'Belarus' },
    },
    {
      id: 2,
      photoUrl:
        'https://bugaga.ru/uploads/posts/2016-01/1453106278_znamenitosti-dva-v-odnom-10.jpg',
      followed: true,
      fullName: 'Sasha',
      status: 'I am boss 2',
      location: { city: 'Moscow', country: 'Russia' },
    },
    {
      id: 3,
      photoUrl:
        'https://bugaga.ru/uploads/posts/2016-01/1453106278_znamenitosti-dva-v-odnom-10.jpg',
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
