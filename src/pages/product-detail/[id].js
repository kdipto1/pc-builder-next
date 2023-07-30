import { useRouter } from "next/router";
import React from "react";
import { Carousel, Row, Col, Divider, Rate, List } from "antd";
import Image from "next/image";

const ProductDetailsPage = ({ data, error }) => {
  const router = useRouter();
  const product = data.data;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }
  const {
    image,
    productName,
    category,
    status,
    price,
    description,
    keyFeatures,
    individualRating,
    averageRating,
    reviews,
  } = product;

  return (
    <div>
      <p
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          padding: "1rem 1rem",
        }}
      >
        Product Details Page
      </p>
      <Carousel>
        <div>
          <Image
            style={{
              margin: "auto auto",
              padding: "1rem",
            }}
            width={600}
            height={400}
            responsive="true"
            src={image}
            alt="pc components"
          />
        </div>
      </Carousel>

      <Divider />

      <Row gutter={[16, 16]} style={{ margin: "auto auto" }}>
        <Col xs={24} sm={12}>
          <h1>{productName}</h1>
          <p>Category: {category}</p>
          <p>Status: {status}</p>
          <p>Price: ${price}</p>
          <Rate allowHalf value={averageRating} />
          <p>Average Rating: {averageRating} / 5</p>
        </Col>
        <Col xs={24} sm={12}>
          <h3>Description</h3>
          <p>{description}</p>
        </Col>
      </Row>

      <Divider />

      <Row gutter={[16, 16]} style={{ margin: "auto auto" }}>
        <Col xs={24} sm={12}>
          <h3>Key Features</h3>
          <List
            size="small"
            dataSource={Object.entries(keyFeatures)}
            renderItem={([key, value]) => (
              <List.Item>
                <strong>{key}:</strong> {value}
              </List.Item>
            )}
          />
        </Col>
        <Col xs={24} sm={12}>
          <h3>Reviews</h3>
          {reviews.map((review, index) => (
            <div key={index}>
              <p>
                <strong>Reviewer: </strong> {review.reviewer}
              </p>
              <p>
                <strong>Rating: </strong> {review.rating}
              </p>
              <p>{review.comment}</p>
              <Divider />
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailsPage;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/api/products`);
  const data = await res.json();
  const paths = data?.data.map((product) => ({
    params: { id: product._id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/products/${params.id}`
    );
    if (!res.ok) {
      throw new Error("Product not found");
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
