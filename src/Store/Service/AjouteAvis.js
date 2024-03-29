import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const AjouteAvis = async (data) => {
  const response = await axios.post(Base_url + Path.addAvis, data);
  return response.data;
};
