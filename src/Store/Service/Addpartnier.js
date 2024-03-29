import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const AddLibrairie = async (id,data) => {
  const response = await axios.post(Base_url + Path.AddLibrairie+id,data);
  return response.data;
};

export const AnnulerDemende = async (id) => {
  const response = await axios.put(Base_url + Path.AnnulerDemende+id);
  return response.data;
};