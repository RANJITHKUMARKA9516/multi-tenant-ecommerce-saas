import api from "./api";

export const createStore = async (storeData) => {
  const response = await api.post("/stores", storeData);

  return response.data;
};

export const getMyStore = async () => {
  const response = await api.get("/stores/my-store");

  return response.data;
};

export const updateStore = async (id, storeData) => {
  const response = await api.put(`/stores/${id}`, storeData);

  return response.data;
};

export const deleteStore = async (id) => {
  const response = await api.delete(`/stores/${id}`);

  return response.data;
};
