import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const AjouteProduitFavorie = async (data) => {
  const response = await axios.post(Base_url + Path.addproduitfavorie, data);
  console.log(response.data)
  return response.data;
};
