import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const addProdCataloge = async (data) => {
  const response = await axios.post(Base_url + Path.addProdCataloge,data);
  return response.data;
};
