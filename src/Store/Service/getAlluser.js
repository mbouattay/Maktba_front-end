import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getAlluser = createAsyncThunk(
    'getAlluser',
    async () => {
      const response = await axios.get(Base_url+ Path.getAlluser)
      return response.data
    }
)