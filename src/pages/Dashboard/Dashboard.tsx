import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Layout } from "antd";
import { useStore } from "~/store/useStateProvider";

interface Props {
  location: any;
}
const Dashboard: React.FC<Props> = ({ location }) => {
  const store = useStore();
  console.log(location);
  console.log(store);
  return (
    <Layout.Content className="full">
      <div className="container-fluid mr-t-10">
        <Card>
          <h5 className="text-center">Shopee System Management</h5>
        </Card>
      </div>
    </Layout.Content>
  );
};

export default withRouter(Dashboard);
