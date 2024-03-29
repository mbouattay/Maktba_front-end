
import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const Detailcomonde = createAsyncThunk(
    'Detailcomonde',
    async (id) => {
      const response = await axios.get(Base_url+ Path.Detailcomonde+id)
      return response.data
    }
  )