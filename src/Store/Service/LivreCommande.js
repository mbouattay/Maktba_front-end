import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const LivreCommande = async (id) => {
  const response = await axios.put(Base_url + Path.livreCommande+id);
  return response.data;
};