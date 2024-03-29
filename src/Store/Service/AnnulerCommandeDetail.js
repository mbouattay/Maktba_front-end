import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const AnnulerCommande = async (id) => {
  const response = await axios.put(Base_url + Path.AnnulerCommande+id);
  return response.data;
};