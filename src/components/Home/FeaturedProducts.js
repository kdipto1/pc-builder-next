import ProductCard from "@/shared/ProductCard";
import { Col, Row } from "antd";
import React from "react";

const FeaturedProducts = ({ products }) => {
  return (
    <div>
      <h2
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "1rem" }}
      >
        Featured Products
      </h2>

      <Row justify="center" gutter={[0, 40]}>
        {products?.data?.map((product) => (
          <Col
            key={product._id}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedProducts;
