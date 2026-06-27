import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createPaymentOrder,
  verifyPayment,
} from "../../services/paymentService";

function Checkout() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      setLoading(true);

      const amount = 1000; // Replace later with cart total

      const data = await createPaymentOrder(amount);
      console.log("ENV KEY:", import.meta.env.VITE_RAZORPAY_KEY_ID);
      console.log("API DATA:", data);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: data.order.amount,

        currency: data.order.currency,

        name: "Multi Tenant Ecommerce",

        description: "Order Payment",

        order_id: data.order.id,

        handler: async function (response) {
          const verifyData = await verifyPayment({
            razorpay_order_id: response.razorpay_order_id,

            razorpay_payment_id: response.razorpay_payment_id,

            razorpay_signature: response.razorpay_signature,
          });

          alert(verifyData.message);

          navigate("/my-orders");
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razor = new window.Razorpay(options);

      razor.open();
    } catch (error) {
      console.log(error);

      alert("Payment Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 bg-white p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}

export default Checkout;
