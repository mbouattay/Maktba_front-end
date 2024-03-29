import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const supprimerAvis = async (id) => {
  const response = await axios.delete(Base_url+Path.deleteAvis+id);
  return response.data;
};