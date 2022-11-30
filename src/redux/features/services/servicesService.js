import { axiosInstance } from "../../../utils";

// Create new service
const createService = async (serviceData, token) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axiosInstance.post("/services", serviceData, config);

  return response.data;
};

// Get service
const getService = async (serviceId, serviceData) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  const response = await axiosInstance.get(
    `/services/${serviceId}`,
    serviceData,
    config
  );

  return response.data;
};

// Get services
const getServices = async () => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  const response = await axiosInstance.get("/services/?q=", config);

  if (response.data) {
    localStorage.setItem("services", JSON.stringify(response.data));
  }

  return response.data;
};

//update product
const updateService = async (servicesData, servicesId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const response = await axiosInstance.put(
    `/services/${servicesId}`,
    servicesData,
    config
  );

  return response.data;
};

// Delete product
const deleteService = async (serviceId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  };

  const response = await axiosInstance.delete(`/services/${serviceId}`, config);

  return response.data;
};

const servicesService = {
  createService,
  getService,
  getServices,
  updateService,
  deleteService,
};

export default servicesService;
