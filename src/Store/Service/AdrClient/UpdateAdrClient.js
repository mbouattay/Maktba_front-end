import axios from "axios";
import { Path, Base_url } from "../../../config/Config";
export const UpdateAdr = async (id,idclent,data) => {
  const response = await axios.put(Base_url + Path.ModifAdrr+id+"/"+idclent,data);
  return response.data;
};
