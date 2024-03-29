import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getIdentiteClientt = createAsyncThunk(
    'getIdentiteClientt',
    async (id) => {
      const response = await axios.get(Base_url+ Path.identiteClient+id)
      return response.data
    }
  )