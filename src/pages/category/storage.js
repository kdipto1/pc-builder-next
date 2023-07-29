import React from "react";

const AllStorage = ({ data }) => {
  return <div>AllStorage</div>;
};

export default AllStorage;

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:3000/api/products/category?category=storage"
  );
  const storageDevices = await res.json();

  return {
    props: {
      data: storageDevices,
    },
  };
}
