/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = ({ products, category }) => {
  const router = useRouter();

  const addToBuilder = (product) => {
    // Implement your logic here to add the selected product to the builder
    console.log("Adding to builder:", product);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="text-center my-8 font-semibold text-3xl">
          Select {category}
        </div>
        <div className="container mx-auto mb-8 p-4">
          <div className="grid gap-4">
            {products?.map((product, i) => (
              <div
                key={i}
                className="flex mx-auto items-center justify-between gap-24 border border-gray-300 p-4 bg-base-200 w-full"
              >
                <div>
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="w-60 object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{product.productName}</div>

                  <div
                    className={`text-sm mb-2 ${
                      product.status === "In Stock"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {product.status}
                  </div>
                  <div className="text-yellow-500">
                    {product.individualRating}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-semibold">{product.price}</div>

                  <div>
                    <button
                      className="btn btn-info"
                      onClick={() => addToBuilder(product)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const category = params.slug[0];

  const response = await fetch(`${process.env.BASE_URL}/api/products`);
  const data = await response.json();

  const products = data.data.filter((product) => product.category === category);

  return {
    props: {
      products,
      category,
    },
  };
}

export default CategoryPage;
