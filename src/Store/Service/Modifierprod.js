import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const Modifierprod = async (id,data) => {
  const response = await axios.put(Base_url+Path.Modifierprod+id,data);
  return response.data;
};