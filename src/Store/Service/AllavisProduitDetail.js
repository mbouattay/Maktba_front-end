import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getAllAvisProduitDeatil = createAsyncThunk(
    'getAllAvisProduitDeatil',
    async (id) => {
      const response = await axios.get(Base_url+ Path.getAllAvisProduitDeatil+id)
      return response.data
    }
  )