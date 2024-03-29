import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getAllProduitCataloge = createAsyncThunk(
    'getAllProduitCataloge',
    async () => {
      const response = await axios.get(Base_url+ Path.allProduitcataloge)
      return response.data
    }
)