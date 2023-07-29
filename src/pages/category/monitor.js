import React from "react";

const AllMonitor = ({ data }) => {
  return <div>AllMonitor</div>;
};

export default AllMonitor;

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:3000/api/products/category?category=monitor"
  );
  const monitors = await res.json();

  return {
    props: {
      data: monitors,
    },
  };
}
