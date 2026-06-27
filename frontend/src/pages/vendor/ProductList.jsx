import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import VendorLayout from "../../layouts/VendorLayout";

import { getMyProducts, deleteProduct } from "../../services/productService";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getMyProducts();

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this product?");

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);

      alert("Product Deleted");

      fetchProducts();
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <VendorLayout>
      <h1 className="text-3xl font-bold mb-6">My Products</h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b">
                <td className="p-4">
                  <img
                    src={product.image?.url || "https://via.placeholder.com/80"}
                    alt=""
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>

                <td className="p-4">{product.title}</td>

                <td className="p-4">₹{product.price}</td>

                <td className="p-4">{product.stock}</td>

                <td className="p-4">
                  <Link
                    to={`/vendor/edit-product/${product._id}`}
                    className="bg-blue-600 text-white px-3 py-2 rounded mr-2"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-600 text-white px-3 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </VendorLayout>
  );
}

export default ProductList;
