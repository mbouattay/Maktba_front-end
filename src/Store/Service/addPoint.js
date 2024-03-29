import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const addPoint = async (id,data) => {
  const response = await axios.put(Base_url + Path.addPoint+id,data);
  return response.data;
};
