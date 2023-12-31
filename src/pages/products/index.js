import ProductCard from "@/components/Card";
import Navbar from "@/components/Navbar";
import React from "react";

const products = ({ products }) => {
  return (
    <div>
      <Navbar />
      <div className="text-center my-8 font-semibold text-3xl">Products</div>
      <div className="container mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.map((product) => (
            <ProductCard key={product.productName} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default products;

export async function getStaticProps() {
  const response = await fetch(`${process.env.BASE_URL}/api/products`);
  const data = await response.json();

  return {
    props: {
      products: data.data,
    },
  };
}
