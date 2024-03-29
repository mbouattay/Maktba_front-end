import axios from "axios";
import { Path, Base_url } from "../../../config/Config";
export const AddAdrClient = async (data) => {
  const response = await axios.post(Base_url + Path.addAdrr, data);
  return response.data;
};
