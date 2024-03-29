import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const modifierIdentitevender = async (id,data) => {
  const response = await axios.put(Base_url+Path.UpdateProfile+id,data,{headers: {
    'content-type': 'multipart/form-data',
}});
  return response.data;
};