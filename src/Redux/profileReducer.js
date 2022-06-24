import { profileAPI } from '../api/api';
import avatarIcon from '../assets/images/rainbow.jpeg';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, avatar: avatarIcon, likesCount: 14, message: 'A koala is my favorite animal', },
    { id: 2, avatar: avatarIcon, likesCount: 10, message: 'What a wonderful world!', },
    { id: 3, avatar: '', likesCount: 30, message: 'Every life matters. Even the smallest.', },
  ],
  // newPostText: '',
  userProfile: null,
  status: '',
}
const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    // case UPDATE_NEW_POST_TEXT:
    //   return {
    //     ...state,
    //     newPostText: action.newPostChange,
    //   }

    case ADD_POST:
      let newPost = {
        id: 5,
        avatar: avatarIcon,
        likesCount: 0,
        message: action.newPostBody,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        // newPostText: '',
      }

    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts].filter(p => p.id !== action.postId),
      }

    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.userProfileData,
      }
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    
    default:
      return state;
  }
}

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody }); //actionCreator create the action ={type: ADD_POST, newPostBody:newPostBody}
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
// export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostChange: text });
export const setUserProfile = (userProfileData) => ({ type: SET_USER_PROFILE, userProfileData });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfileRequest(userId)
    .then(data => {
      dispatch(setUserProfile(data));
    });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatusRequest(userId)
    .then(response => {
      dispatch(setStatus(response.data));
    });
};

export const updateAuthStatus = (status) => (dispatch) => {
  profileAPI.updateAuthStatusRequest(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
};

export default profileReducer;

