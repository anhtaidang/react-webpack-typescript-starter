import React, { useState } from "react";
import { Breadcrumb, Col, Layout, Menu, Row } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./micrositeLayout.scss";
import Colors from "~/constants/Color";
import routerMaps from "~/constants/enumRouterMap";

const { Header, Sider, Content } = Layout;

interface Props {
  component: React.ReactElement;
}

const MAIN_HEADER = "MAIN_HEADER";
const MAIN_NAVBAR = "MAIN_NAVBAR";
const MAIN_LAYOUT = "MAIN_LAYOUT";
const MicrositeLayout = ({ component }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  React.useLayoutEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      console.log(document.getElementById(`${MAIN_HEADER}`));
    }

    window.addEventListener("resize", handleResize);
  });

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const renderSubMenuItem = (subLinks) => {
    return subLinks?.length > 0
      ? subLinks.map((sub) => (
          <Menu.Item key={sub.url} icon={sub.icon}>
            {sub.title}
          </Menu.Item>
        ))
      : null;
  };

  return (
    <Layout id={MAIN_LAYOUT}>
      <Layout className="site-layout">
        <Header
          className={`site-layout-background ${MAIN_HEADER}`}
          id={MAIN_HEADER}
          style={{ padding: 0, background: Colors.MAIN_COLOR }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              style: { color: Colors.White },
              className: "trigger",
              onClick: toggle,
            }
          )}
          <span style={{ color: Colors.White, fontSize: 16 }}>
            Infomation Management System
          </span>
        </Header>
        <Content>
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={collapsed}
              id={MAIN_NAVBAR}
              style={{ background: Colors.White }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                title="Navigation One"
                defaultOpenKeys={[routerMaps[0].root]}
              >
                {routerMaps.map((group) => {
                  return (
                    <Menu.SubMenu key={group.root} title={group.title}>
                      {renderSubMenuItem(group.subLinks)}
                    </Menu.SubMenu>
                  );
                })}
              </Menu>
            </Sider>
            <Content>
              <Row>
                <Col span={24}>
                  <div className="container-fluid">
                    <Breadcrumb style={{ margin: "16px 0" }}>
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>List</Breadcrumb.Item>
                      <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>{component}</Col>
              </Row>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MicrositeLayout;
