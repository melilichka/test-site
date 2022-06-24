// import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addNewMessage } from '../../Redux/dialogReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


export default compose(
    connect(mapStateToProps, {addNewMessage}),
    withAuthRedirect
)(Dialogs);