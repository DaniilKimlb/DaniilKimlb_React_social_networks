import { connect } from 'react-redux';
import Friends from './Favourite';
// let backgroundColor = 'background-color: blue';

let mapStateToProps = (state) => {
  return { InfoFavorite: state.NavPage.InfoFavorite };
};

let FavoriteContainer = connect(mapStateToProps, {})(Friends);

export default FavoriteContainer;
