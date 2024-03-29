import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const Addprod = async (data) => {
  const response = await axios.post(Base_url + Path.addprod,data);
  return response.data;
};
