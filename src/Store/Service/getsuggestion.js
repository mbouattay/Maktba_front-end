import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getsuggestion = createAsyncThunk(
    'getsuggestion',
    async () => {
      const response = await axios.get(Base_url+ Path.getsuggestion)
      console.log(response.data)
      return response.data
    }
)