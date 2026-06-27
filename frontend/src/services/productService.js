import api from "./api";

export const getMyProducts = async () => {
  const response = await api.get("/products/my-products");

  return response.data;
};

export const createProduct = async (productData) => {
  const response = await api.post("/products", productData);

  return response.data;
};

export const uploadProductImage = async (productId, imageFile) => {
  const formData = new FormData();

  formData.append("image", imageFile);

  const response = await api.post(`/products/image/${productId}`, formData);

  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await api.put(`/products/${id}`, productData);

  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);

  return response.data;
};

export const getProductById = async (id) => {
  const products = await getMyProducts();

  return products.products.find((product) => product._id === id);
};
