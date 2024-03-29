import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const deleteProdCataloge = async (idp) => {
  const response = await axios.delete(Base_url + Path.deleteProdCataloge+idp);
  return response.data;
};
