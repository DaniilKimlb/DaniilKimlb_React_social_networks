import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsOfAuth = (state) => ({
  isAuth: state.Auth.isAuth,
});
export const withAuthRedirect = (Component) => {
  class withAuthRedirect extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to="/Login" />;
      }
      return <Component {...this.props} />;
    }
  }
  let ConnectedWithAuthRedirect = connect(mapStateToPropsOfAuth)(
    withAuthRedirect
  );
  return ConnectedWithAuthRedirect;
};
