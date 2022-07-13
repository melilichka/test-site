import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getStatus, updateAuthStatus } from '../../Redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  updateProfileData = ()=>{
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.updateProfileData();
  }

  componentDidUpdate(prevProps,prevState) {
    if(prevProps.match.params.userId !== this.props.match.params.userId ) {
      this.updateProfileData();
    }
  }
  
  render() {
    return <Profile {...this.props}/>
  }
}

let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    
  }
}

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateAuthStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);