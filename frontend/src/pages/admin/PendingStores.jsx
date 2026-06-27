import { useEffect, useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";

import { getPendingStores, approveStore } from "../../services/adminService";

function PendingStores() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      console.log("Fetching Pending Stores...");

      const data = await getPendingStores();

      console.log("Pending Stores Response:", data);

      setStores(data.stores || []);
    } catch (error) {
      console.log("Fetch Store Error:");

      console.log(error);

      console.log(error.response?.data);

      alert(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      console.log("Approving Store ID:", id);

      const data = await approveStore(id);

      console.log("Approve Success:", data);

      alert("Store Approved Successfully");

      fetchStores();
    } catch (error) {
      console.log("Approve Error:");

      console.log(error);

      console.log("Response:", error.response);

      console.log("Data:", error.response?.data);

      alert(
        error.response?.data?.message || error.message || "Approval Failed",
      );
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Pending Stores</h1>

      {loading ? (
        <div>Loading Stores...</div>
      ) : stores.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          No Pending Stores Found
        </div>
      ) : (
        <div className="space-y-4">
          {stores.map((store) => (
            <div key={store._id} className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-bold">{store.storeName}</h2>

              <p className="mt-2">{store.description}</p>

              <p className="mt-3">
                <strong>Owner:</strong> {store.owner?.name}
              </p>

              <p>
                <strong>Email:</strong> {store.owner?.email}
              </p>

              <p>
                <strong>Status:</strong> {store.status}
              </p>

              <button
                onClick={() => handleApprove(store._id)}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
              >
                Approve Store
              </button>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}

export default PendingStores;
