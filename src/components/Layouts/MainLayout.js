import { Button, Col, Layout, Menu, Row, theme } from "antd";
import Link from "next/link";
import { Dropdown } from "antd";
const { Header, Content, Footer } = Layout;
import { HomeSmile } from "@styled-icons/boxicons-regular/HomeSmile";
import { signOut, useSession } from "next-auth/react";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  const { data: session } = useSession();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const categoriesMenu = (
    <Menu>
      <Menu.Item key="cpu">
        <Link href="/category/cpu">CPU / Processor</Link>
      </Menu.Item>
      <Menu.Item key="motherboard">
        <Link href="/category/motherboard">Motherboard</Link>
      </Menu.Item>
      <Menu.Item key="ram">
        <Link href="/category/ram">RAM</Link>
      </Menu.Item>
      <Menu.Item key="psu">
        <Link href="/category/power-supply">Power Supply Unit</Link>
      </Menu.Item>
      <Menu.Item key="storage">
        <Link href="/category/storage">Storage Device</Link>
      </Menu.Item>
      <Menu.Item key="monitor">
        <Link href="/category/monitor">Monitor</Link>
      </Menu.Item>
      <Menu.SubMenu key="others" title="Others">
        <Menu.Item key="gpu">
          <Link href="/category/gpu">GPU</Link>
        </Menu.Item>
        <Menu.Item key="mouse">
          <Link href="/category/mouse">Mouse</Link>
        </Menu.Item>
        <Menu.Item key="keyboard">
          <Link href="/category/keyboard">Keyboard</Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );

  return (
    <Layout className="layout">
      <Row
        align="middle"
        justify="space-between"
        style={{ padding: "1rem 2rem" }}
      >
        <Col className={styles.brandIcon}>
          <Link href={"/"} passHref>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <HomeSmile size="32" />
              <span style={{ fontSize: "1.5rem", marginLeft: "8px" }}>
                Pc-Builder
              </span>
            </div>
          </Link>
        </Col>
        <Col
          flex="auto"
          style={{ display: "flex", justifyContent: "flex-end" }}
          sm={{ marginTop: "1rem" }}
        >
          <Button type="primary" style={{ marginRight: "16px" }}>
            <Link href={"/pc-builder"}>PC Builder</Link>
          </Button>
          <Dropdown
            overlay={categoriesMenu}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Button
              className="categories-dropdown-btn"
              style={{ marginRight: "16px" }}
            >
              Categories
            </Button>
          </Dropdown>
          {session?.user ? (
            <items>
              <Button onClick={() => signOut()} type="link" danger>
                Logout
              </Button>
            </items>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/login"
            >
              <items>
                <Button type="link">Login</Button>
              </items>
            </Link>
          )}
        </Col>
      </Row>
      <Content
        style={{
          padding: "0 0",
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            minHeight: "100vh",
            paddingBottom: "2rem",
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
