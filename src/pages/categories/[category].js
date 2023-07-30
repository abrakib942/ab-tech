// pages/categories/[category].js
import Navbar from "@/components/Navbar";
import React from "react";
import Card from "@/components/Card";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";

const CategoryPage = ({ products }) => {
  const router = useRouter();
  const { category } = router.query;

  // Filter the products based on the selected category
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  if (!products) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />
      <div className="text-center my-8 font-semibold text-3xl">Products</div>
      <div className="container mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts?.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  // Replace this with the actual API endpoint for categories
  const categories = [
    "CPU",
    "Motherboard",
    "RAM",
    "PSU",
    "Storage",
    "Monitor",
    "Others",
  ];

  // Generate paths with all category names for dynamic routes
  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.BASE_URL}/api/products`);
  const data = await response.json();

  return {
    props: {
      products: data.data,
    },
  };
}

export default CategoryPage;
