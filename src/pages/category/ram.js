import ProductCard from "@/shared/ProductCard";
import { Col, Row } from "antd";
import React from "react";

const AllRam = ({ data }) => {
  const products = data;
  return (
    <div>
      <h2
        style={{ textAlign: "center", fontSize: "2rem", padding: "2rem 2rem" }}
      >
        All Ram
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

export default AllRam;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/products/category?category=ram`
  );
  const rams = await res.json();

  return {
    props: {
      data: rams,
    },
  };
}
