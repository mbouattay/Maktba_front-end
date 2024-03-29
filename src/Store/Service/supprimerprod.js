import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const supprimerprod = async (data) => {
  console.log(data)
  const response = await axios.delete(Base_url+Path.Supproduit,{ data:data});
  console.log(response.data)
  return response.data;
};