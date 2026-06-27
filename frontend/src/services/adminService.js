import api from "./api";

export const getPendingStores = async () => {
  const response = await api.get("/admin/stores/pending");

  return response.data;
};

export const approveStore = async (storeId) => {
  const response = await api.put(`/admin/stores/${storeId}/approve`);

  return response.data;
};

export const getAdminAnalytics = async () => {
  const response = await api.get("/admin/analytics");

  return response.data;
};

export const getAllOrders = async () => {
  const response = await api.get("/admin/orders");

  return response.data;
};

export const updateOrderStatus = async (orderId, status) => {
  const response = await api.put(`/admin/orders/${orderId}/status`, { status });

  return response.data;
};
