import axios from "axios"

const API_URL = "https://localhost:7019/api/products"

export const getProducts = () => {
  return axios.get(API_URL)
}
