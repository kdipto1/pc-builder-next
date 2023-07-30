import React from "react";

const AllKeyboard = ({ data }) => {
  console.log("🚀 ~ file: keyboard.js:4 ~ AllKeyboard ~ data:", data);
  return <div>AllKeyboard</div>;
};

export default AllKeyboard;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/products/category?category=keyboard`
  );
  const keyboards = await res.json();

  return {
    props: {
      data: keyboards,
    },
  };
}
