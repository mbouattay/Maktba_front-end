import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const sousGategorie = createAsyncThunk(
    'sousGategorie',
    async (id) => {
      const response = await axios.get(Base_url+ Path.sousGategorie+id)

      return response.data
    }
  )