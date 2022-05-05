import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC } from "../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
     return {
          users: state.usersPage.users
     }
};

let mapDispatchToProps = (dispatch) => {
     return {
          foolow: (userId) => {
               dispatch(followAC(userId));
          },
          unfoolow: (userId) => {
               dispatch(unfollowAC(userId));
          },
          setusers: (users) => {
               dispatch(setUsersAC(users));
          },

     }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;