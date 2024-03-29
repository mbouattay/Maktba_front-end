
import axios from "axios";
import { Path, Base_url } from "../../config/Config";

export const bloqueuser = async (id) => {
    const response = await axios.put(Base_url + Path.bloqueuser+id);
    return response.data;
  };
  