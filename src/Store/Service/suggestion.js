
import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const suggestion = async (data) => {
  const response = await axios.post(Base_url + Path.suggestionProduitadd,data);
  return response.data;
};
