import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const nb_commande = createAsyncThunk(
    'nb_commande',
    async (id) => {
        const response = await axios.get(Base_url+Path.nbcommande+id);
      return response.data
    }
  )