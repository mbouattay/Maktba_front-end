import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getAllProduitBylibrairie = createAsyncThunk(
    'getAllProduitBylibrairie',
    async (id) => {
      const response = await axios.get(Base_url+ Path.getAllProduitbyLibrairie+id)
      return response.data
    }
  )