import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../components/Preloader/Preloader';

let mapStateToPropsForPreloader = (state) => ({
  profile: state.ProfilePage.profile,
});
export const withPreloader = (Component) => {
  class withPreloader extends React.Component {
    render() {
      if (!this.props.profile) {
        return <Preloader />;
      }
      return <Component {...this.props} />;
    }
  }
  let ConnectedWithPreloader = connect(mapStateToPropsForPreloader)(
    withPreloader
  );
  return ConnectedWithPreloader;
};
