import api from "./api";

export const addToCart = async (productId, quantity = 1) => {
  const response = await api.post("/cart/add", {
    productId,
    quantity,
  });

  return response.data;
};

export const getCart = async () => {
  const response = await api.get("/cart");

  return response.data;
};

export const removeFromCart = async (productId) => {
  const response = await api.delete(`/cart/remove/${productId}`);

  return response.data;
};
