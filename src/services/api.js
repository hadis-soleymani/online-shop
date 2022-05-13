import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const getProducts = async () => {
  const response = await axios('https://fakestoreapi.com/products/');
  return response.data;
};
export { getProducts };
