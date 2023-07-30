import { useRouter } from "next/router";
import React from "react";

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

  return (
    <div>
      <h1>{product.productName}</h1>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Status: {product.status}</p>
      <p>Rating: {product.averageRating}/5</p>
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
