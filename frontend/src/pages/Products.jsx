import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/products/ProductCard";
import products from "../assets/products";

function Products() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">All Products</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Products;
