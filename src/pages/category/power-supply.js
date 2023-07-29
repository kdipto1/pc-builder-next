import React from "react";

const AllPowerSupply = ({ data }) => {
  console.log(data);
  return <div>AllPowerSupply</div>;
};

export default AllPowerSupply;

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:3000/api/products/category?category=power supply"
  );
  const powerSupply = await res.json();

  return {
    props: {
      data: powerSupply,
    },
  };
}
