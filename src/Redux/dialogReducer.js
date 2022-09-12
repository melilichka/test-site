import avatarIcon from '../assets/images/rainbow.jpeg';

const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

let initialState = {
  dialogs: [
    {
      id: 1, name: 'Rinat Sharip', avatar: avatarIcon, messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you doing?' },
        { id: 3, message: 'I am currently hiring for a React Developer' },
        { id: 4, message: 'This would be a hybrid working schedule in San Leandro' },
      ],
    },
    {
      id: 2, name: 'Zulfia Vaf', avatar: avatarIcon, messages: [
        { id: 1, message: 'Hey!' },
        { id: 2, message: 'The roles are remote, full time not contract' },
        { id: 3, message: 'Does this spark an interested at all?' },
        { id: 4, message: 'Let me know what do you think about it' },
      ],
    },
    {
      id: 3, name: 'Rafis Rais', avatar: '', messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'We came across your profile' },
        { id: 3, message: 'it suitable for the opening we have opening for React JS at Santa Clara' },
        { id: 4, message: 'Please let us know if you are anyone you know is interested in this job' },
      ],
    },
    {
      id: 4, name: 'Roza Khusain', avatar: avatarIcon, messages: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'I am a lead recruiter' },
        { id: 3, message: 'we are looking to hire solid developers to work' },
        { id: 4, message: 'For the particular role I have in mind a background in React ' },
      ],
    },
    {
      id: 5, name: 'Alia Shakur', avatar: avatarIcon, messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'The roles are remote, full time not contract' },
        { id: 3, message: 'Please let us know if you are anyone you know is interested in this job' },
       
      ],
    },
    {
      id: 6, name: 'Galina Akim', avatar: '', messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you doing?' },
        { id: 3, message: 'I am currently hiring for a React Developer' },
      ],
    },
    {
      id: 7, name: 'Agnia Nikol', avatar: avatarIcon, messages: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'We came across your profile' },
        { id: 3, message: 'it suitable for the opening we have opening for React JS' },
        { id: 4, message: 'What time can we organize the meeting?' },
      ],
    },
  ],

}

const dialogReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_NEW_MESSAGE:
      return {
        ...state,
        dialogs: state.dialogs.map(dialog => {
          if (dialog.id == action.selectedDialogId) {
            let newMessageId = 1;
            if (dialog.messages.length > 0) {
              newMessageId = dialog.messages.slice(-1)[0].id + 1;
            }
            return {
              ...dialog,
              messages: [...dialog.messages, {id: newMessageId, message: action.newMessageBody }],
            }
          }
          return dialog;
        }),
      }

    default:
      return state;
  }
}


export const addNewMessage = (selectedDialogId, newMessageBody) => ({ type: ADD_NEW_MESSAGE, selectedDialogId, newMessageBody });

export default dialogReducer;

