import React from "react";

const AllMouse = ({ data }) => {
  return <div>AllMouse</div>;
};

export default AllMouse;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/products/category?category=mouse`
  );
  const mouses = await res.json();

  return {
    props: {
      data: mouses,
    },
  };
}
