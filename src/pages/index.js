import FeaturedCategory from "@/components/Home/FeaturedCategory";
import FeaturedProducts from "@/components/Home/FeaturedProducts";

export default function HomePage({ data }) {
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Home page</h1>
      <FeaturedProducts products={data} />
      <FeaturedCategory />
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/products/random`);
    const randomProducts = await res.json();

    return {
      props: {
        data: randomProducts,
      },
    };
  } catch (error) {
    console.log(error.message);
    return {
      props: {
        data: null,
      },
    };
  }
}
