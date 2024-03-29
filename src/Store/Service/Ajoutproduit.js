import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const Ajoutproduit = async (data) => {
  const response = await axios.post(Base_url + Path.Ajoutproduit, data);
  console.log(data)
  return response.data;
};
