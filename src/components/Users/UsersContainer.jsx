import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';

import { setUsers,
    setUsersTotalCount,
    setUserListCurrentPage,
    showPreloader,
    getUserListThunkCreator,
    follow,
    unfollow, } from '../../Redux/usersReducer';

import { getDisabledUserListFollowButton, 
    getIsShowPreloader, 
    getUserListCurrentPage, 
    getUserListPageSize, 
    getUsers, 
    getUsersTotalCount, } from '../../Redux/usersSelectors';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUserListThunkCreator(this.props.userListCurrentPage, this.props.userListPageSize)

    };

    onPageNumberClick = (pageNumber) => {
        // this.props.setUserListCurrentPage(pageNumber);
        this.props.getUserListThunkCreator(pageNumber, this.props.userListPageSize)
    };

    render() {
        return <>
            {this.props.isShowPreloader
                ? <Preloader style={{ backgroundColor: 'white', width: '400px', height: '400px' }} />
                : <Users
                    users={this.props.users}
                    usersTotalCount={this.props.usersTotalCount}
                    userListPageSize={this.props.userListPageSize}
                    userListCurrentPage={this.props.userListCurrentPage}
                    disabledUserListFollowButton={this.props.disabledUserListFollowButton}

                    onPageNumberClick={this.onPageNumberClick}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                />}
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         userListPageSize: state.usersPage.userListPageSize,
//         usersTotalCount: state.usersPage.usersTotalCount,
//         userListCurrentPage: state.usersPage.userListCurrentPage,
//         isShowPreloader: state.usersPage.isShowPreloader,
//         disabledUserListFollowButton: state.usersPage.disabledUserListFollowButton,
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        userListPageSize: getUserListPageSize(state),
        usersTotalCount: getUsersTotalCount(state),
        userListCurrentPage: getUserListCurrentPage(state),
        isShowPreloader: getIsShowPreloader(state),
        disabledUserListFollowButton: getDisabledUserListFollowButton(state),
    }
}


export default compose(
    connect(mapStateToProps, { setUsers, 
        setUsersTotalCount, 
        setUserListCurrentPage,
        showPreloader, 
        getUserListThunkCreator, 
        follow, 
        unfollow }),
        withAuthRedirect)(UsersContainer);