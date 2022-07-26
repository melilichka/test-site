import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import DialogItems from './DialogItems/DialogItems';
import style from './Dialogs.module.css';
import Message from './Message/Message';


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field
                name='newMessageBody'
                component='textarea'
                placeholder='Enter your message...' /></div>
            <button type={'submit'} >Send</button>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({ form: 'dialogMessageForm' })(AddMessageForm);

const Dialogs = (props) => {
    let selectedDialogId = props.match.params.dialogId;

    const redirectToFirstDialog = () => {
        let firstDialog = props.dialogsPage.dialogs[0];
        if (firstDialog) {
            return <Redirect to={'/dialogs/'+ firstDialog.id}/>
        }
    }

    if (!selectedDialogId) {
        return redirectToFirstDialog();
    }

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItems id={d.id} avatar={d.avatar} name={d.name} key={d.id} />);

    let selectedDialog = props.dialogsPage.dialogs.filter(item => item.id == selectedDialogId)[0];

    let messagesElements=[];
    if (selectedDialog) {
        messagesElements = selectedDialog.messages.map(m => <Message id={m.id} message={m.message} key={m.id} />);

    } else {
        return redirectToFirstDialog();
    }
    let sendNewMessage = (formData) => {
        if (formData.newMessageBody) {
            props.addNewMessage(selectedDialogId, formData.newMessageBody);
            formData.newMessageBody = '';
        }

    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={sendNewMessage} />
            </div>
        </div>
    );
}


export default Dialogs;