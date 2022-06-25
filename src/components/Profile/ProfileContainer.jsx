import React from 'react';
import { connect } from 'react-redux';
import prof from './Profile.module.css';
import Profile from './Profile';
import axios from "axios";




class ProfileContainer extends React.Component {
  
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      
         this.props.setUserProfile(response.data);
         
    })
};


  render() {
    return (
      
      < Profile {...this.props } />
      
    )
  }
};

let mapStatetoProps = (props) => ({
a: 13
})

export default connect (mapStatetoProps, {setUserProfile}) (ProfileContainer);


 
