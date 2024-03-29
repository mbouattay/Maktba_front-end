import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getProduitDetail = createAsyncThunk(
    'getProduitDetail',
    async (id) => {
      const response = await axios.get(Base_url+ Path.getProduitDetail+id)
      return response.data
    }
  )