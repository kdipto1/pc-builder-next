import React from "react";

const AllRam = ({ data }) => {
  return <div>AllRam</div>;
};

export default AllRam;

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:3000/api/products/category?category=ram"
  );
  const rams = await res.json();

  return {
    props: {
      data: rams,
    },
  };
}
