import api from "./api";

export const getVendorAnalytics = async () => {
  const response = await api.get("/vendor/analytics");

  return response.data;
};
