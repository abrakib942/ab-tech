import ProductCard from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function Home({ products }) {
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
            {products?.map((product) => (
              <ProductCard key={product.productName} product={product} />
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
