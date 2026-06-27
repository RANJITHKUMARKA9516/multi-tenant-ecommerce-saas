import { Link } from "react-router-dom";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-slate-900 text-white">
        <div className="p-6 text-2xl font-bold">Admin Panel</div>

        <nav className="flex flex-col gap-3 p-4">
          <Link to="/admin" className="hover:text-blue-400">
            Dashboard
          </Link>

          <Link to="/admin/pending-stores" className="hover:text-blue-400">
            Pending Stores
          </Link>
          <Link to="/admin/orders">Orders</Link>
        </nav>
      </aside>

      <main className="flex-1 bg-slate-100 p-8">{children}</main>
    </div>
  );
}

export default AdminLayout;
