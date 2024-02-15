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
  const { Meta } = Card;
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
            <Card hoverable bordered={false}>
              <Cpu title="cpu" />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "0.2rem",
                  fontSize: "1rem",
                }}
              >
                CPU
              </p>
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
            <Card hoverable bordered={false}>
              <Motherboard title="motherboard" />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "0.2rem",
                  fontSize: "1rem",
                }}
              >
                Motherboard
              </p>
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
            <Card hoverable bordered={false}>
              <Memory title="ram memory" />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "0.2rem",
                  fontSize: "1rem",
                }}
              >
                RAM
              </p>
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
            <Card hoverable bordered={false}>
              <Power title="power supply units" />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "0.2rem",
                  fontSize: "1rem",
                }}
              >
                PSU
              </p>
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
            <Card hoverable bordered={false}>
              <DeviceSsd title="storage devices" />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "0.2rem",
                  fontSize: "1rem",
                }}
              >
                Storage
              </p>
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
            <Card hoverable bordered={false}>
              <MonitorOutline title="monitors" />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "0.2rem",
                  fontSize: "1rem",
                }}
              >
                Monitors
              </p>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturedCategory;
