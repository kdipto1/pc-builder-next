import React from "react";

const AllCpu = ({ data }) => {
  return <div>AllCpu</div>;
};

export default AllCpu;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/products/category?category=cpu`
  );
  const cpus = await res.json();

  return {
    props: {
      data: cpus,
    },
  };
}
