import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const AllListProduitLibe = createAsyncThunk(
    'AllListProduitLibe',
    async (id) => {
      const response = await axios.get(Base_url+ Path.listProduitLib+id)
      return response.data
    }
)