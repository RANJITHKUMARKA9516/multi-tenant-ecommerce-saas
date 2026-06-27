import { useEffect, useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";

import { getAdminAnalytics } from "../../services/adminService";

function AdminDashboard() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await getAdminAnalytics();

      console.log("Analytics Data:", data);

      setAnalytics(data.analytics);
    } catch (error) {
      console.log("Analytics Error:", error);
      console.log("Response:", error.response?.data);
    }
  };

  return (
    <AdminLayout>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Users</h2>
          <p className="text-3xl font-bold">{analytics?.totalUsers || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Vendors</h2>
          <p className="text-3xl font-bold">{analytics?.totalVendors || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Customers</h2>
          <p className="text-3xl font-bold">{analytics?.totalCustomers || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Stores</h2>
          <p className="text-3xl font-bold">{analytics?.totalStores || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Pending Stores</h2>
          <p className="text-3xl font-bold text-yellow-600">
            {analytics?.pendingStores || 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Approved Stores</h2>
          <p className="text-3xl font-bold text-green-600">
            {analytics?.approvedStores || 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Rejected Stores</h2>
          <p className="text-3xl font-bold text-red-600">
            {analytics?.rejectedStores || 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Products</h2>
          <p className="text-3xl font-bold">{analytics?.totalProducts || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Orders</h2>
          <p className="text-3xl font-bold">{analytics?.totalOrders || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Pending Orders</h2>
          <p className="text-3xl font-bold text-yellow-600">
            {analytics?.pendingOrders || 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Delivered Orders</h2>
          <p className="text-3xl font-bold text-green-600">
            {analytics?.deliveredOrders || 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Revenue</h2>
          <p className="text-3xl font-bold text-green-600">
            ₹{analytics?.totalRevenue || 0}
          </p>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
