import React from "react";
import { Switch } from "react-router-dom";
import Result404Page from "~/components/Exception/Result404Page";
import Dashboard from "~/pages/Dashboard";
import enumUrlClients from "../constants/enumUrlClients";
import { PropsRoute } from "./PrivateRoute";

const AdminRoutes: () => React.ReactElement = () => {
  return (
    <Switch>
      <PropsRoute
        path={enumUrlClients.ADMIN_DASHBOARD_PAGE}
        component={Dashboard}
      />
      <PropsRoute component={Result404Page} />
    </Switch>
  );
};

export default AdminRoutes;
