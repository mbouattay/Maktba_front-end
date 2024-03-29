import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const modifierIdentiteClient = async (id,data) => {
  const response = await axios.put(Base_url+Path.modifierIdentiteClient+id,data,{headers: {
    'content-type': 'multipart/form-data',
}});
  return response.data;
};