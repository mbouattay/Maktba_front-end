import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getAllGategorie = createAsyncThunk(
    'getAllGategorie',
    async () => {
      const response = await axios.get(Base_url+ Path.Gategorie)

      return response.data
    }
)