import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const deleteProduitCommande = async (idp,idc) => {
  const response = await axios.delete(Base_url + Path.deleteProduitCommande+idp+"/"+idc);
  return response.data;
};
