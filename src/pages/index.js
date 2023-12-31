/* eslint-disable @next/next/no-img-element */
import ProductCard from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home({ products }) {
  const categories = [
    {
      name: "CPU",
      color: "#FF5733",
    },
    {
      name: "Motherboard",
      color: "#33FF57",
    },
    {
      name: "RAM",
      color: "#5733FF",
    },
    {
      name: "PSU",
      color: "#33A1FF",
    },
    {
      name: "Storage",
      color: "#FF33E8",
    },
    {
      name: "Monitor",
      color: "#FFD233",
    },
    {
      name: "Others",
      color: "#33FFA8",
    },
  ];

  return (
    <div className="">
      <Navbar />

      <div className="lg:p-12 flex flex-col md:flex-row items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Build Your Dream PC</h1>
          <p className="text-lg">
            Choose from a wide range of components to create your perfect PC.
          </p>
          <button className="btn btn-neutral my-8">Get Started</button>
        </div>
        <div>
          <img className="w-full" src="/pc.jpg" alt="pc" />
        </div>
      </div>

      {/* featured products section */}
      <div>
        <div className="text-center my-8 font-semibold text-3xl">
          Featured products
        </div>
        <div className="container mx-auto mt-8 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products?.slice(0, 6).map((product) => (
              <ProductCard key={product.productName} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* featured categories */}
      <div>
        <div className="text-center my-8 font-semibold text-3xl">
          Featured Categories
        </div>
        <div className="container mx-auto mb-8 p-4">
          <div className="lg:flex gap-8 justify-center">
            {categories?.map((category, i) => (
              <Link
                href={`/categories/${category.name}`}
                style={{
                  backgroundColor: category.color,
                }}
                key={i}
                className="card text-center font-bold "
              >
                <div className="card-body">{category.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
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
