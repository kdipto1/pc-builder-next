import React from "react";

const AllMonitor = ({ data }) => {
  return <div>AllMonitor</div>;
};

export default AllMonitor;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/products/category?category=monitor`
  );
  const monitors = await res.json();

  return {
    props: {
      data: monitors,
    },
  };
}
