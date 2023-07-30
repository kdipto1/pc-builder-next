import React from "react";

const AllStorage = ({ data }) => {
  return <div>AllStorage</div>;
};

export default AllStorage;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/products/category?category=storage`
  );
  const storageDevices = await res.json();

  return {
    props: {
      data: storageDevices,
    },
  };
}
