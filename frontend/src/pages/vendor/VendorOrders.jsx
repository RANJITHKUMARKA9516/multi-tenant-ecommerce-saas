import { useEffect, useState } from "react";

import VendorLayout from "../../layouts/VendorLayout";

import { getVendorOrders } from "../../services/orderService";

function VendorOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await getVendorOrders();

      setOrders(data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VendorLayout>
      <h1 className="text-3xl font-bold mb-6">Vendor Orders</h1>

      {orders.map((order) => (
        <div key={order._id} className="bg-white rounded-xl shadow p-6 mb-4">
          <h2>
            Customer:
            {order.customer?.name}
          </h2>

          <p>
            Status:
            {order.status}
          </p>

          <p>Total: ₹{order.totalAmount}</p>
        </div>
      ))}
    </VendorLayout>
  );
}

export default VendorOrders;
