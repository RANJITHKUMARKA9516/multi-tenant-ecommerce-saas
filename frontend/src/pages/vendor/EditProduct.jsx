import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import VendorLayout from "../../layouts/VendorLayout";

import { getProductById, updateProduct } from "../../services/productService";

function EditProduct() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const product = await getProductById(id);

      setFormData({
        title: product.title || "",
        description: product.description || "",
        price: product.price || "",
        stock: product.stock || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProduct(id, formData);

      alert("Product Updated");

      navigate("/vendor/products");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <VendorLayout>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6">Edit Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Update Product
          </button>
        </form>
      </div>
    </VendorLayout>
  );
}

export default EditProduct;
