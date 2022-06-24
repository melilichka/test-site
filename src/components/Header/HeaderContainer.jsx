import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authLogOut } from '../../Redux/authReducer';



class HeaderContainer extends React.Component {

  // fetchAuthProfile = (userId) => {
  //   profileAPI.getProfileRequest(userId)
  //   .then(data => {
  //     this.props.setAuthUserProfile(data);
  //   });
  // }

  // componentDidMount() {
    // authMeAPI.authMeRequest()
    //   .then(data => {
    //     if (data.resultCode === 0) {
    //       this.props.setAuthUserData(data.data);
    //       // this.fetchAuthProfile(data.data.id);
    //     }
    //   });
  // }
  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    authProfile: state.auth.authProfile,
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
  }
}


export default connect(mapStateToProps, { authLogOut })(HeaderContainer);