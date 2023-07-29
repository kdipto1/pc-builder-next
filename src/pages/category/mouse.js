import React from "react";

const AllMouse = ({ data }) => {
  return <div>AllMouse</div>;
};

export default AllMouse;

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:3000/api/products/category?category=mouse"
  );
  const mouses = await res.json();

  return {
    props: {
      data: mouses,
    },
  };
}
