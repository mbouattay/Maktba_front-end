import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const prodplusvendus = createAsyncThunk(
    'prodplusvendus',
    async (id) => {
        const response = await axios.get(Base_url+Path. produit_plus_vendus+id);
    
      return response.data
    }
  )