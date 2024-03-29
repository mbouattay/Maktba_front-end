import axios from "axios";
import { Path, Base_url } from "../../config/Config";
export const becamePartner = async (data) => {
 
    const response = await axios.post(Base_url + Path.becomePartner, data, {
      headers: {
        'content-type': 'multipart/form-data',
      }
    });
    return response.data;
 
};