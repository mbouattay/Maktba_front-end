import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const nb_commande_par_jour = createAsyncThunk(
    'nb_commande_par_jour',
    async (id) => {
        const response = await axios.get(Base_url+Path.nb_commande_par+id);
      return response.data
    }
  )