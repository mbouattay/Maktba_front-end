import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const AjouteSignale = async (data) => {
  try {
    const response = await axios.post(Base_url + Path.addSignale, data, {
      headers: {
        'content-type': 'multipart/form-data',
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};