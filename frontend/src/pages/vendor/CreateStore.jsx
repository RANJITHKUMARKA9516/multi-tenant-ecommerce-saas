import { useState } from "react";
import VendorLayout from "../../layouts/VendorLayout";
import { createStore } from "../../services/storeService";

function CreateStore() {
  const [formData, setFormData] = useState({
    storeName: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createStore(formData);

      alert("Store created successfully. Waiting for admin approval.");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create store");
    }
  };

  return (
    <VendorLayout>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold mb-6">Create Store</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="storeName"
            placeholder="Store Name"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Store Description"
            rows="5"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Create Store
          </button>
        </form>
      </div>
    </VendorLayout>
  );
}

export default CreateStore;
