import axios from "axios";
export const fetchData = async() => {
  const response = await axios.get('https://fakestoreapi.com/products');
  const data = response.data;
  return data;
}
