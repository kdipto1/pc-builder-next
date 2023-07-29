import React, { useState } from "react";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { Dropdown } from "antd";
const { Header, Content, Footer } = Layout;
import { HomeSmile } from "@styled-icons/boxicons-regular/HomeSmile";

const MainLayout = ({ children }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuToggle = () => {
    setMenuCollapsed(!menuCollapsed);
  };

  const categoriesMenu = (
    <Menu>
      <Menu.Item key="cpu">
        <Link href="/category/cpu">CPU / Processor </Link>
      </Menu.Item>
      <Menu.Item key="motherboard">
        <Link href="/category/motherboard">Motherboard</Link>
      </Menu.Item>
      <Menu.Item key="ram">
        <Link href="/category/ram">RAM</Link>
      </Menu.Item>
      <Menu.Item key="psu">
        <Link href="/category/psu">Power Supply Unit</Link>
      </Menu.Item>
      <Menu.Item key="storage">
        <Link href="/category/storage">Storage Device</Link>
      </Menu.Item>
      <Menu.Item key="monitor">
        <Link href="/category/monitor">Monitor</Link>
      </Menu.Item>
      <Menu.Item key="others">
        <Link href="/category/others">Others</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href={"/"} style={{ display: "flex", background: "red" }}>
          <HomeSmile />
          Home
        </Link>
        <div className="demo-logo" />
        <div>
          <Button type="primary" onClick={handleMenuToggle}>
            <Link href={"/pc-builder"}>PC Builder</Link>
          </Button>
          <Dropdown
            overlay={categoriesMenu}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Button className="categories-dropdown-btn">Categories</Button>
          </Dropdown>
        </div>
        {/* <Menu theme="dark" mode="horizontal" /> */}
      </Header>
      <Content
        style={{
          padding: "0 0",
          minHeight: "screen",
        }}
      >
        <div
          // className="site-layout-content"
          style={{
            background: colorBgContainer,
            minHeight: "screen",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
