import { createSelector } from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
    
}

export const getUserListPageSize = (state) => {
    return state.usersPage.userListPageSize;
}

export const getUsersTotalCount = (state) => {
    return state.usersPage.usersTotalCount; 
}

export const getUserListCurrentPage = (state) => {
    return state.usersPage.userListCurrentPage;
}

export const getIsShowPreloader = (state) => {
    return state.usersPage.isShowPreloader;
}

export const getDisabledUserListFollowButton = (state) => {
    return state.usersPage.disabledUserListFollowButton;
}

export const getUsers = createSelector(
    getUsersSelector, 
    getIsShowPreloader, 
    (users, isShowPreloader) => {
 return users.filter(u => true);
});
