const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';

let initionalState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  // isFetching: false,
};

let authReducer = (state = initionalState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    
    
    
    default:
      return state;
  }
};

export const setAuthUserData = (Id, email, login) => ({ type: SET_USER_DATA, data: { Id, email, login }  });


export default authReducer;
