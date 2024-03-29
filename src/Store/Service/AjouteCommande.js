import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const AjouteCommande = createAsyncThunk(
    'AjouteCommande',
    async (data) => {
      const response = await axios.post(Base_url+ Path.addcommande,data)
      return response.data
    }
)