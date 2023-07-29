import React from "react";

const AllGpu = ({ data }) => {
  return <div>AllGpu</div>;
};

export default AllGpu;

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:3000/api/products/category?category=gpu"
  );
  const gpus = await res.json();

  return {
    props: {
      data: gpus,
    },
  };
}
