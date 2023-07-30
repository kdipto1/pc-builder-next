import ProductCard from "@/shared/ProductCard";
import { Col, Row } from "antd";
import React from "react";

const AllKeyboard = ({ data }) => {
  const products = data;
  return (
    <div>
      <h2
        style={{ textAlign: "center", fontSize: "2rem", padding: "2rem 2rem" }}
      >
        All Keyboards
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

export default AllKeyboard;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/products/category?category=keyboard`
  );
  const keyboards = await res.json();

  return {
    props: {
      data: keyboards,
    },
  };
}
