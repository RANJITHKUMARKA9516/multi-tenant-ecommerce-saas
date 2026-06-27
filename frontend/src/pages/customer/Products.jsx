import { useEffect, useState } from "react";
import api from "../../services/api";
import { addToCart } from "../../services/cartService";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");

      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId, 1);

      alert("Added To Cart");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Products</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white rounded-xl shadow p-4">
            <img
              src={product.image?.url || "https://via.placeholder.com/300"}
              alt=""
              className="h-52 w-full object-cover rounded"
            />

            <h2 className="font-bold mt-4">{product.title}</h2>

            <p className="text-gray-500">{product.store?.storeName}</p>

            <p className="text-xl font-bold mt-2">₹{product.price}</p>

            <button
              onClick={() => handleAddToCart(product._id)}
              className="w-full bg-blue-600 text-white py-2 mt-4 rounded"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
