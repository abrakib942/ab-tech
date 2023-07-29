import ProductCard from "@/components/Card";
import React from "react";

const products = ({ products }) => {
  return (
    <div>
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
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();

  return {
    props: {
      products: data.data,
    },
  };
}
