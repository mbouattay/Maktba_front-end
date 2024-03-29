import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const avisLib = createAsyncThunk(
    'avisLib',
    async (id) => {
      const response = await axios.get(Base_url+ Path.allAvisLib+id)
      return response.data
    }
)