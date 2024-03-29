import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const produitmieuxnotes = createAsyncThunk(
    'produitmieuxnotes',
    async (id) => {
      const response = await axios.get(Base_url+ Path.produitmieuxnotes+id)
      console.log(Base_url+ Path.produitmieuxnotes+id)
      return response.data
    }
)