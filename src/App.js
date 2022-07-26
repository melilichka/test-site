import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Redirect, Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';
import { compose } from 'redux';
import { initializeApp } from './Redux/appReducer';

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        {this.props.isAuth && <Navbar />}
        <div className='app-wrapper-content'>

          <Route exact path='/'><Redirect to='/profile' /></Route>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/dialogs/:dialogId?' render={() => <DialogsContainer />} />
        </div>
      </div>
    );
  }

}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth,
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
