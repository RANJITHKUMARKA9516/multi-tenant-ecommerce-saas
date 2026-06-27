import { useEffect, useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";

import { getAllOrders, updateOrderStatus } from "../../services/adminService";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await getAllOrders();

      console.log("ORDERS RESPONSE:", data);

      setOrders(data.orders || []);
    } catch (error) {
      console.log("ORDER ERROR:", error.response?.data || error);
    }
  };

  const handleStatusChange = async (orderId, status) => {
    console.log("Order ID:", orderId);
    console.log("New Status:", status);

    try {
      const data = await updateOrderStatus(orderId, status);

      console.log("Response:", data);

      loadOrders();
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message);
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order._id} className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold">Customer: {order.customer?.name}</h2>

            <p>Email: {order.customer?.email}</p>

            <p>Total: ₹{order.totalAmount}</p>

            <div className="mt-4">
              <select
                value={order.status}
                onChange={(e) => handleStatusChange(order._id, e.target.value)}
                className="border p-2 rounded"
              >
                <option>Pending</option>

                <option>Processing</option>

                <option>Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

export default AdminOrders;
