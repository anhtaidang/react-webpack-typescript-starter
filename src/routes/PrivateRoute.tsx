import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import MicrositeLayout from "~/layout/MicrositeLayout";
import enumUrlClients from "../constants/enumUrlClients";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  // return React.createElement(component, finalProps);
  return (
    <MicrositeLayout
      component={React.createElement(component, finalProps)}
      {...finalProps}
    />
  );
};

const PrivateRoute = ({ component, authenticated, ...rest }) => (
  <Route
    render={(props) =>
      authenticated ? (
        renderMergedProps(component, props, rest)
      ) : (
        <Redirect
          to={{
            pathname: enumUrlClients.USER_LOGIN,
            state: { from: props.location },
          }}
        />
      )
    }
    {...rest}
  />
);

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(PrivateRoute);

export const PropsRoute = (props: any) => {
  const { component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(routeProps) => renderMergedProps(component, routeProps, rest)}
    />
  );
};
