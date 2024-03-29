import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getNbProduitlibBycategorie = createAsyncThunk(
    'getNbProduitlibBycategorie',
    async (id) => {
      const response = await axios.get(Base_url+ Path.nbProduitLibBycategorie+id)
      return response.data
    }
  )