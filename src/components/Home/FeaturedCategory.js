import { Col, Row } from "antd";
import React from "react";
import { Cpu } from "@styled-icons/bootstrap/Cpu";
import { Motherboard } from "@styled-icons/bootstrap/Motherboard";
import { Memory } from "@styled-icons/bootstrap/Memory";
import { Power } from "@styled-icons/icomoon/Power";
import { DeviceSsd } from "@styled-icons/bootstrap/DeviceSsd";
import { MonitorOutline } from "@styled-icons/evaicons-outline/MonitorOutline";
import { Card } from "antd";

const FeaturedCategory = () => {
  return (
    <div style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
        Featured Categories
      </h2>
      <Row justify="space-around" gutter={[40, 40]} style={{ margin: "1rem" }}>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 3 }}
        >
          <Card hoverable bordered={false} bodyStyle={{}}>
            <Cpu title="cpu" />
          </Card>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 3 }}
        >
          <Card hoverable bordered={false} bodyStyle={{}}>
            <Motherboard title="motherboard" />
          </Card>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 3 }}
        >
          <Card hoverable bordered={false} bodyStyle={{}}>
            <Memory title="ram memory" />
          </Card>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 3 }}
        >
          <Card hoverable bordered={false} bodyStyle={{}}>
            <Power title="power supply units" />
          </Card>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 3 }}
        >
          <Card hoverable bordered={false} bodyStyle={{}}>
            <DeviceSsd title="storage devices" />
          </Card>
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 3 }}
        >
          <Card hoverable bordered={false} bodyStyle={{}}>
            <MonitorOutline title="monitors" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturedCategory;
