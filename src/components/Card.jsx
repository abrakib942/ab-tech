import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-96 p-4">
      <Link href={`/products/${product?._id}`}>
        <div className="border rounded-lg shadow-lg p-4 bg-white">
          <img
            src={product.image}
            alt={product.productName}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{product.productName}</h3>
          <p className="text-gray-600 text-sm mb-2">{product.category}</p>
          <p className="text-green-600 font-semibold mb-2">{product.price}</p>
          <p
            className={`text-sm mb-2 ${
              product.status === "In Stock" ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.status}
          </p>
          <div className="flex items-center">
            <span className="text-yellow-500 text-sm mr-1">Rating:</span>
            {Array.from(
              { length: Math.round(product.averageRating) },
              (_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.293 1.293a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L11 4.414V14a1 1 0 11-2 0V4.414L6.707 5.707a1 1 0 01-1.414-1.414l3-3zM7 16a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              )
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
