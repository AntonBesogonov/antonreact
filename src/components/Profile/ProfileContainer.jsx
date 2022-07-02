// import React from 'react';
// import { connect } from 'react-redux';
// import Profile from './Profile';
// import axios from "axios";
// import { setUserProfile } from '../redux/profile-reducer';
// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// const blo = () => {
//   const [profile.setPost] = useState([]);
// }
// useEffect(() => {
//   fetch('https://social-network.samuraijs.com/api/1.0/profile/2')
//     .then(response => response.json())
//     .then(commits => alert(userId));
// }, []);

// return (
//   <div>
//     <h1>qwe</h1>
//     {
//       post.map(post =>
//         <Link key={post.id} to={`/profile/${post.id}`}></Link>
//         )
//     }
//   </div>
// )






// export default ProfileContainer;





import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import axios from "axios";
import { setUserProfile } from '../redux/profile-reducer';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});



export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);



