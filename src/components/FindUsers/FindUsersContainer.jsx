import { connect } from 'react-redux';
import {
  FollowerAC,
  OnFollowerAC,
  setUsersAC,
} from '../../redux/UsersPageReducer';
import FindUsers from './FindUsers';

let mapStateToProps = (state) => {
  return { users: state.UsersPage.users };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(FollowerAC(userId));
    },
    onFollow: (userId) => {
      dispatch(OnFollowerAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);
