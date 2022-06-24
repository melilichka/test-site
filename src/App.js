import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';
import { compose } from 'redux';
import { initializeApp } from './Redux/appReducer';
import Footer from './components/Footer/Footer';


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
        <Navbar />
        <div className='app-wrapper-content'>

          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />

          {/* <Route exact path='/dialogs' component={Dialogs} /> */}
        </div>
        <Footer />
      </div>
    );
  }

}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
