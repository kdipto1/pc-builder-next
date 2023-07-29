import { Card, Col, Row } from "antd";
import Image from "next/image";
import React from "react";

const FeaturedProducts = ({ products }) => {
  const { Meta } = Card;
  console.log(products.data);
  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
        Featured Products
      </h2>

      <Row
        justify="space-around"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        {products?.data?.map((product) => (
          <Col
            key={product._id}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <Card
              key={product._id}
              hoverable
              style={{ width: 240 }}
              cover={
                <Image
                  width={200}
                  height={200}
                  responsive="true"
                  src={product.image}
                  alt="pc components"
                />
              }
            >
              <Meta
                title={product.productName}
                description="www.instagram.com"
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedProducts;
