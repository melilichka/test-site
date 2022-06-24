import { usersAPI } from '../api/api';

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_USERLIST_CURRENT_PAGE = 'SET_USERLIST_CURRENT_PAGE';
const SHOW_PRELOADER = 'SHOW_PRELOADER';
const TOGGLE_DISABLED_FOLLOWING_BUTTON = 'TOGGLE_DISABLED_FOLLOWING_BUTTON';

let initialState = {
  users: [],
  usersTotalCount: 0,
  userListPageSize: 10,
  userListCurrentPage: 1,
  isShowPreloader: false,
  disabledUserListFollowButton: [],
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {
              ...u,
              followed: !u.followed,
            }
          }
          return u;
        }),
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users, // to render only for new users
        // users: [...state.users, ...action.users], // to add new users in the end
      }

    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        usersTotalCount: action.totalCount,
      }

    case SET_USERLIST_CURRENT_PAGE:
      return {
        ...state,
        userListCurrentPage: action.pageNumber,
      }
    case SHOW_PRELOADER:
      return {
        ...state,
        isShowPreloader: action.isShow,
      }
    case TOGGLE_DISABLED_FOLLOWING_BUTTON:
      return {
        ...state,
        disabledUserListFollowButton: action.isDisabled
          ? [...state.disabledUserListFollowButton, action.userId]
          : state.disabledUserListFollowButton.filter(id => id !== action.userId),
      }
    default:
      return state;
  }
}

export const onToggleFollowClick = (userID) => ({ type: TOGGLE_FOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setUsersTotalCount = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, totalCount });
export const setUserListCurrentPage = (pageNumber) => ({ type: SET_USERLIST_CURRENT_PAGE, pageNumber });
export const showPreloader = (isShow) => ({ type: SHOW_PRELOADER, isShow });
export const toggleDisabledFollowingButton = (isDisabled, userId) => ({ type: TOGGLE_DISABLED_FOLLOWING_BUTTON, isDisabled, userId });

export const getUserListThunkCreator = (userListCurrentPage, userListPageSize) => {
  return (dispatch) => {
    dispatch(setUserListCurrentPage(userListCurrentPage));
    dispatch(showPreloader(true));
    usersAPI.getUserListRequest(userListCurrentPage, userListPageSize)
      .then(data => {
        dispatch(showPreloader(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
      });
  }
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleDisabledFollowingButton(true, userId));

    usersAPI.unfollowRequest(userId)
        .then(data => {
            if (data.resultCode === 0) {
              dispatch(onToggleFollowClick(userId));
            }
            dispatch(toggleDisabledFollowingButton(false, userId));
        });
  }
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleDisabledFollowingButton(true, userId));

    usersAPI.followRequest(userId)
        .then(data => {
            if (data.resultCode === 0) {
              dispatch(onToggleFollowClick(userId));
            }
            dispatch(toggleDisabledFollowingButton(false, userId));
        });
  }
};

export default usersReducer;

