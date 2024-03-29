import { Path, Base_url } from "../../config/Config";
import axios from "axios"
export const Visiblein = async (id,data) => {
    const response = await axios.put(Base_url+Path.Visible+id,data);
    console.log(data)
    return response.data;
  };