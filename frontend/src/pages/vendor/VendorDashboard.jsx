import { useEffect, useState } from "react";

import VendorLayout from "../../layouts/VendorLayout";

import { getVendorAnalytics } from "../../services/vendorService";

function VendorDashboard() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const data = await getVendorAnalytics();

      setAnalytics(data.analytics);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VendorLayout>
      <h1 className="text-4xl font-bold mb-8">Vendor Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Products</h2>

          <p className="text-3xl mt-3">{analytics?.totalProducts || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Orders</h2>

          <p className="text-3xl mt-3">{analytics?.totalOrders || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Revenue</h2>

          <p className="text-3xl mt-3">₹{analytics?.revenue || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Low Stock</h2>

          <p className="text-3xl mt-3">{analytics?.lowStock || 0}</p>
        </div>
      </div>
    </VendorLayout>
  );
}

export default VendorDashboard;
