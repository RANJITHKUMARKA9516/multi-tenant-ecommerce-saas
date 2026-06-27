import { useEffect, useState } from "react";

import { getMyOrders } from "../../services/orderService";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getMyOrders();

      setOrders(data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">My Orders</h1>

      {orders.map((order) => (
        <div key={order._id} className="bg-white rounded-xl shadow p-6 mb-4">
          <h2 className="font-bold">Order ID:</h2>

          <p>{order._id}</p>

          <span
            className={
              order.status === "Delivered"
                ? "text-green-600 font-bold"
                : order.status === "Processing"
                  ? "text-blue-600 font-bold"
                  : "text-yellow-600 font-bold"
            }
          >
            {order.status}
          </span>

          <p className="mt-2">Total: ₹{order.totalAmount}</p>

          <p className="mt-2">
            Items:
            {order.items.length}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MyOrders;
