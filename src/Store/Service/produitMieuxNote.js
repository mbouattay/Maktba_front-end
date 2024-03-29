import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const ProduitMieuxNote = createAsyncThunk(
    'ProduitMieuxNote',
    async (id) => {
      const response = await axios.get(Base_url+ Path.produit_mieux_note+id)
      return response.data
    }
  )