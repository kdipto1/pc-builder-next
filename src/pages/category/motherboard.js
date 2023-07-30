import React from "react";

const AllMotherboard = ({ data }) => {
  return <div>AllMotherboard</div>;
};

export default AllMotherboard;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/products/category?category=motherboard`
  );
  const motherboards = await res.json();

  return {
    props: {
      data: motherboards,
    },
  };
}
