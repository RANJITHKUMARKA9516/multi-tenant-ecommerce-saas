import { useEffect, useState } from "react";
import VendorLayout from "../../layouts/VendorLayout";
import { getMyStore } from "../../services/storeService";

function MyStore() {
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStore();
  }, []);

  const fetchStore = async () => {
    try {
      const data = await getMyStore();

      setStore(data.store);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <VendorLayout>
        <h2>Loading...</h2>
      </VendorLayout>
    );
  }

  if (!store) {
    return (
      <VendorLayout>
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">No Store Found</h2>

          <p>Create your store first.</p>
        </div>
      </VendorLayout>
    );
  }

  return (
    <VendorLayout>
      <div className="bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold mb-6">My Store</h1>

        <div className="space-y-4">
          <div>
            <strong>Store Name:</strong>
            <p>{store.storeName}</p>
          </div>

          <div>
            <strong>Description:</strong>
            <p>{store.description}</p>
          </div>

          <div>
            <strong>Status:</strong>

            {store.status === "approved" && (
              <span className="ml-2 text-green-600 font-semibold">
                Approved
              </span>
            )}

            {store.status === "pending" && (
              <span className="ml-2 text-yellow-600 font-semibold">
                Pending Approval
              </span>
            )}

            {store.status === "rejected" && (
              <span className="ml-2 text-red-600 font-semibold">Rejected</span>
            )}
          </div>

          <div>
            <strong>Owner:</strong>
            <p>{store.owner?.name}</p>
          </div>

          <div>
            <strong>Email:</strong>
            <p>{store.owner?.email}</p>
          </div>
        </div>
      </div>
    </VendorLayout>
  );
}

export default MyStore;
