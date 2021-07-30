import React, { Suspense } from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import Result404Page from "~/components/Exception/Result404Page";
import Dashboard from "~/pages/Dashboard";
import { PropsRoute } from "~/routes/PrivateRoute";
import "../assets/scss/App.scss";

const App: React.FunctionComponent = () => {
  return (
    <div className="wrapper">
      <Suspense fallback={<div />}>
        <Switch>
          <PropsRoute exact path="/" component={Dashboard} />
          <Route component={Result404Page} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default withRouter(App);
