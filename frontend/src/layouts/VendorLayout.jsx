import { Link } from "react-router-dom";

function VendorLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-slate-900 text-white">
        <div className="p-6 text-2xl font-bold">Vendor Panel</div>

        <nav className="flex flex-col p-4 gap-3">
          <Link to="/vendor">Dashboard</Link>

          <Link to="/vendor/store">My Store</Link>

          <Link to="/vendor/create-store">Create Store</Link>

          <Link to="/vendor/products">Products</Link>

          <Link to="/vendor/add-product">Add Product</Link>
          <Link to="/vendor/products">Products</Link>
          <Link to="/vendor/orders">Orders</Link>
        </nav>
      </aside>

      <main className="flex-1 bg-slate-100 p-8">{children}</main>
    </div>
  );
}

export default VendorLayout;
