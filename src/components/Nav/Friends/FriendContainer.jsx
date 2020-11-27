import { connect } from 'react-redux';
import Friends from './Friend';
import s from './Friends.module.css';
// let backgroundColor = 'background-color: blue';

let mapStateToProps = (state) => {
  return { NavPage: state.NavPage };
};
let mapDispatchToProps = () => {
  return {};
};
let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
