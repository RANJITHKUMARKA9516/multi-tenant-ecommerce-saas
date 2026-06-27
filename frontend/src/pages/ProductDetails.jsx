import { useParams } from "react-router-dom";
import products from "../assets/products";
import MainLayout from "../layouts/MainLayout";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <MainLayout>
        <h2 className="text-center text-3xl py-20">Product Not Found</h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl shadow-md"
          />

          <div>
            <h1 className="text-4xl font-bold">{product.title}</h1>

            <p className="text-blue-600 text-2xl mt-4">₹ {product.price}</p>

            <p className="mt-6 text-gray-600">{product.description}</p>

            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProductDetails;
