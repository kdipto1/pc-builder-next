import FeaturedProducts from "@/components/Home/FeaturedProducts";

export default function HomePage({ data }) {
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Home page</h1>
      <FeaturedProducts products={data} />
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/products/random");
  const randomProducts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data: randomProducts,
    },
  };
}
