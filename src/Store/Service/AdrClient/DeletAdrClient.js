import axios from "axios";
import { Path, Base_url } from "../../../config/Config";
export const DeletAdrClient = async (id,idclent) => {
  const response = await axios.delete(Base_url + Path.deleteAdrr+"/"+id+"/"+idclent);
  return response.data;
};
