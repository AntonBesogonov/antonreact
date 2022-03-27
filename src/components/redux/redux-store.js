import { combineReducers, createStore } from "redux";
import profileReducer from '../redux/profile-reducer';

let reducers = combineReducers({
  profilePage: profileReducer
  
});

let store = createStore(reducers);
 
export default store;