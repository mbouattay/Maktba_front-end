import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const addBonDachateapi = createAsyncThunk(
    'addBonDachateapi',
    async (data) => {
      const response = await axios.post(Base_url+ Path.addBonDachate,data)
      return response.data
    }
)