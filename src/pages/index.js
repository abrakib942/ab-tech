import ProductCard from "@/components/Card";
import Navbar from "@/components/Navbar";
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
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();

  return {
    props: {
      products: data.data,
    },
  };
}
