import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "2rem 0",
        marginBottom: "2rem",
      }}
    >
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} sm={12} lg={12}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Build Your Dream PC
          </h1>
          <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
            Choose from the latest components and build your perfect PC.
          </p>
        </Col>
        <Col xs={24} sm={12} lg={12}>
          <Image
            width={900}
            height={600}
            src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=842&q=80"
            alt="PC Builder"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
