import axios from "axios";

const REACT_APP_API_PORT = 5050;
const API_URL = `http://127.0.0.1:${REACT_APP_API_PORT}/api`;

// API Related Utility Functions (Axios Call)
const fetchAllProducts = async () => {
  console.log(API_URL);
  return axios.get(`${API_URL}/products`);
};

const fetchSingleProduct = async (productID) => {
  return axios.get(`${API_URL}/products/${productID}`);
};

export { fetchAllProducts, fetchSingleProduct, API_URL };
