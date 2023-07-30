import { Col, Row } from "antd";
import React from "react";
import { Cpu } from "@styled-icons/bootstrap/Cpu";
import { Motherboard } from "@styled-icons/bootstrap/Motherboard";
import { Memory } from "@styled-icons/bootstrap/Memory";
import { Power } from "@styled-icons/icomoon/Power";
import { DeviceSsd } from "@styled-icons/bootstrap/DeviceSsd";
import { MonitorOutline } from "@styled-icons/evaicons-outline/MonitorOutline";
import { Card } from "antd";
import Link from "next/link";

const FeaturedCategory = () => {
  return (
    <div style={{ paddingTop: "2rem", paddingBottom: "2rem", margin: "1rem" }}>
      <h2
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "1rem" }}
      >
        Featured Categories
      </h2>
      <Row justify="space-around" gutter={[40, 40]}>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 3 }}
        >
          <Link href="/category/cpu">
            <Card hoverable bordered={false} bodyStyle={{}}>
              <Cpu title="cpu" />
            </Card>
          </Link>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 3 }}
        >
          <Link href="/category/motherboard">
            <Card hoverable bordered={false} bodyStyle={{}}>
              <Motherboard title="motherboard" />
            </Card>
          </Link>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 3 }}
        >
          <Link href="/category/ram">
            <Card hoverable bordered={false} bodyStyle={{}}>
              <Memory title="ram memory" />
            </Card>
          </Link>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 3 }}
        >
          <Link href="/category/power-supply">
            <Card hoverable bordered={false} bodyStyle={{}}>
              <Power title="power supply units" />
            </Card>
          </Link>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 3 }}
        >
          <Link href="/category/storage">
            <Card hoverable bordered={false} bodyStyle={{}}>
              <DeviceSsd title="storage devices" />
            </Card>
          </Link>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 3 }}
        >
          <Link href="/category/monitor">
            <Card hoverable bordered={false} bodyStyle={{}}>
              <MonitorOutline title="monitors" />
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturedCategory;
