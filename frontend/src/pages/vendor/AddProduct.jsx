import { useState } from "react";

import VendorLayout from "../../layouts/VendorLayout";

import {
  createProduct,
  uploadProductImage,
} from "../../services/productService";

function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createProduct(formData);

      if (image) {
        await uploadProductImage(response.product._id, image);
      }

      alert("Product Added Successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Failed");
    }
  };

  return (
    <VendorLayout>
      <div className="bg-white p-8 rounded-xl shadow max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            placeholder="Product Title"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            className="w-full border p-3 rounded"
            rows="5"
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input type="file" onChange={(e) => setImage(e.target.files[0])} />

          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Add Product
          </button>
        </form>
      </div>
    </VendorLayout>
  );
}

export default AddProduct;
