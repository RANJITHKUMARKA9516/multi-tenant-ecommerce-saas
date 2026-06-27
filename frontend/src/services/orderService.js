import api from "./api";

export const createOrder = async () => {
  const response = await api.post("/orders");

  return response.data;
};

export const getMyOrders = async () => {
  const response = await api.get("/orders/my-orders");

  return response.data;
};

export const getVendorOrders = async () => {
  const response = await api.get("/orders/vendor-orders");

  return response.data;
};
