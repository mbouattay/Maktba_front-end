import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getAllProduitByCategorie = createAsyncThunk(
    'getAllProduitByCategorie',
    async (id) => {
      const response = await axios.get(Base_url+ Path.getAllproduitBycategorie+id)
      return response.data
    }
  )