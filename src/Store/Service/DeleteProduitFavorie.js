import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const DeleteProduitFavorie = async (id,idclent) => {
  const response = await axios.delete(Base_url + Path.DeleteproduitFavorie+"/"+id+"/"+idclent);
  return response.data;
};
