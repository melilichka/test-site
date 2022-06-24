import { stopSubmit } from 'redux-form';
import { authMeAPI } from '../api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false, //Header right corner
  authProfile: null,// main content
  isRememberMe: false,
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_AUTH_USER_DATA: //Header right corner
      return {
        ...state,
        ...action.payload,
      }

    case SET_AUTH_USER_PROFILE: {// main content
      return {
        ...state,
        authProfile: action.authProfile,
      }
    }

    
    default:
      return state;
  }
}

export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: {id, login, email,isAuth} });
export const setAuthUserProfile = (authProfile) => ({ type: SET_AUTH_USER_PROFILE, authProfile });


export const getAuthUserData = () => (dispatch) => {
  
    return authMeAPI.authMeRequest()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;
          dispatch(setAuthUserData(id, login, email, true));
          // dispatch(setAuthUserData(data.data)); //It's alternative way for dispatch(setAuthUserData(id, login, email));
          // profileAPI.getProfileRequest(data.data.id)
          //   .then(data => {
          //     dispatch(setAuthUserProfile(data));
          //   });
        }
      });
  
};

export const authLogIn = (formData) => { // formData: {email, password, rememberMe}
  return (dispatch) => {
    authMeAPI.authLoginRequest(formData)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(getAuthUserData());
        } else {
          let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Common error';
          dispatch(stopSubmit('login', {_error: errorMessage}));
        }
      });
  }
}

export const authLogOut = () => {
  return (dispatch) => {
    authMeAPI.authLogOutRequest()
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(setAuthUserData(null,null,null,false));
        }
      })
  }
}

export default authReducer;

