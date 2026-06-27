import { Routes, Route } from "react-router-dom";
import CreateStore from "../pages/vendor/CreateStore";

import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import VendorDashboard from "../pages/vendor/VendorDashboard";
import MyStore from "../pages/vendor/MyStore";
import ProductList from "../pages/vendor/ProductList";
import AddProduct from "../pages/vendor/AddProduct";
import AdminDashboard from "../pages/admin/AdminDashboard";
import PendingStores from "../pages/admin/PendingStores";
import EditProduct from "../pages/vendor/EditProduct";
import CustomerProducts from "../pages/customer/Products";
import Cart from "../pages/customer/Cart";
import MyOrders from "../pages/customer/MyOrders";
import VendorOrders from "../pages/vendor/VendorOrders";
import AdminOrders from "../pages/admin/AdminOrders";
import Checkout from "../pages/customer/Checkout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/vendor" element={<VendorDashboard />} />
      <Route path="/vendor/create-store" element={<CreateStore />} />
      <Route path="/vendor/store" element={<MyStore />} />
      <Route path="/vendor/add-product" element={<AddProduct />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/pending-stores" element={<PendingStores />} />
      <Route path="/vendor/products" element={<ProductList />} />
      <Route path="/vendor/edit-product/:id" element={<EditProduct />} />
      <Route path="/products" element={<CustomerProducts />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/vendor/orders" element={<VendorOrders />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default AppRoutes;
