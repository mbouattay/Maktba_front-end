import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getAllProduitFavorie = createAsyncThunk(
    'AllgetProduitFavorie',
    async (id) => {
      const response = await axios.get(Base_url+ Path.getproduitFavorie+id)
      return response.data
    }
  )