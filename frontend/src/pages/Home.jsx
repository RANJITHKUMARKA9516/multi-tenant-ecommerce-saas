import { Link } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";
import products from "../assets/products";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold">Multi Vendor Marketplace</h1>

          <p className="mt-4 text-xl">Buy products from trusted stores.</p>

          <Link
            to="/products"
            className="inline-block mt-6 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Categories</h2>

        <div className="grid md:grid-cols-4 gap-4">
          {["Electronics", "Fashion", "Books", "Home"].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow-md text-center font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

export default Home;
