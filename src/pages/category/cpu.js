import React from "react";

const AllCpu = ({ data }) => {
  return <div>AllCpu</div>;
};

export default AllCpu;

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:3000/api/products/category?category=cpu"
  );
  const cpus = await res.json();

  return {
    props: {
      data: cpus,
    },
  };
}
