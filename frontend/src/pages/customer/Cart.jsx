import { useEffect, useState } from "react";

import { getCart, removeFromCart } from "../../services/cartService";
import { createOrder } from "../../services/orderService";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const data = await getCart();

      setCart(data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId);

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const total =
    cart?.items?.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0,
    ) || 0;

  const handleCheckout = async () => {
    try {
      await createOrder();

      alert("Order Placed Successfully");

      fetchCart();
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {!cart || cart.items.length === 0 ? (
        <p>Cart Empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div
                key={item.product._id}
                className="bg-white p-4 rounded-xl shadow flex justify-between"
              >
                <div>
                  <h2 className="font-bold">{item.product.title}</h2>

                  <p>₹{item.product.price}</p>

                  <p>
                    Qty:
                    {item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => handleRemove(item.product._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold">Total: ₹{total}</h2>
            <Link
              to="/checkout"
              className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded"
            >
              Checkout
            </Link>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-green-600 text-white px-6 py-3 rounded"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
