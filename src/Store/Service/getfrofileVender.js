import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getprofileVender = createAsyncThunk(
    'getfrofileVender',
    async (id) => {
      const response = await axios.get(Base_url+ Path.ProfileVender+id)
      return response.data
    }
)