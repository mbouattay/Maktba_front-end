import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const ModifierAvis = async (id,data) => {
  const response = await axios.put(Base_url+Path.ModifierAvis+id,data);
  return response.data;
};