import { addComponent } from "@/redux/features/pcBuilderSlice";

import { Button, Card, notification, Col, Row } from "antd";

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const ProductChooseFromCategory = ({ data }) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Component selected`,
      placement,
    });
  };

  const { Meta } = Card;
  const router = useRouter();
  const products = data?.data;
  const dispatch = useDispatch();
  const handleAddComponents = (product) => {
    dispatch(addComponent(product));
    openNotification("top");

    setTimeout(() => {
      router.push("/pc-builder");
    }, 1000);
  };
  return (
    <div>
      {contextHolder}
      <p
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          padding: "1rem  1rem",
        }}
      >
        All {router.query.category}
      </p>
      <Row justify="center" gutter={[0, 40]}>
        {products?.map((product) => (
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
              style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}
              cover={
                <Image
                  width={400}
                  height={200}
                  responsive="true"
                  src={product.image}
                  alt="pc components"
                />
              }
            >
              <Meta title={product.productName} />
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
              <p>Status: {product.status}</p>
              <p>Rating: {product.averageRating}/5</p>
              <Button onClick={() => handleAddComponents(product)}>
                Add To Builder
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductChooseFromCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/products/category?category=${params.category}`
    );
    if (!res.ok) {
      throw new Error("Products not found");
    }
    const data = await res.json();
    return {
      props: {
        data: data,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: { message: error.message },
      },
    };
  }
}
