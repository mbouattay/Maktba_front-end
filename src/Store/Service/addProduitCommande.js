import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const addProduitCommande = async (data) => {
  const response = await axios.post(Base_url + Path.addProduitCommande,data);
  return response.data;
};
