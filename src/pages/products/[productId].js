import Loading from "@/components/Loading";

const ProductDetail = ({ product }) => {
  if (!product) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-12 py-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div>
          <img
            src={product.image}
            alt={product.productName}
            className="w-96 rounded-lg object-cover"
          />
        </div>
        <div className="md:flex-1 md:mt-10">
          <h1 className="text-3xl font-semibold">{product.productName}</h1>
          <p className="text-sm text-gray-600 font-semibold">
            {product.category}
          </p>
          <p
            className={`text-lg mb-2 ${
              product.status === "In Stock" ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.status}
          </p>
          <p className="text-lg text-red-500">{product.price}</p>
          <p className="mt-4 text-lg font-semibold">Description:</p>
          <p>{product.description}</p>
          <p className="mt-4 text-lg font-semibold">Key Features:</p>
          <ul>
            {Object?.entries(product?.keyFeatures)?.map(([key, value]) => (
              <li key={key}>
                <span className="font-bold">{key}:</span>{" "}
                <span className="text-gray-800">{value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lg font-semibold">
            Individual Rating: {product.individualRating}
          </p>
          <p className="text-lg font-semibold">
            Average Rating: {product.averageRating}
          </p>
        </div>
      </div>
    </div>
  );
};

// Generate paths with all product IDs for static generation
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();

  // Generate paths with product IDs
  const paths = data.data.map((product) => ({
    params: { productId: product._id },
  }));

  return {
    paths,
    fallback: false, // Show 404 if product with the given ID is not found
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/products/${params.productId}`
  );
  const product = await res.json();

  // Find the product with the matching ID
  // const product = data.data.find((product) => product._id === params.productId);

  return {
    props: {
      product: product?.data,
    },
  };
}

export default ProductDetail;
