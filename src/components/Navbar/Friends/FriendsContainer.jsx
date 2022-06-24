import {connect} from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import Friends from './Friends';


let mapStateToProps = (state) => {
  return {
    friends: state.navbar.friends,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Friends));

export default FriendsContainer;