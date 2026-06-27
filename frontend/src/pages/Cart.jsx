import MainLayout from "../layouts/MainLayout";

function Cart() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>

        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          Cart items will appear here
        </div>
      </div>
    </MainLayout>
  );
}

export default Cart;
