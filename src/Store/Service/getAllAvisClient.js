import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getAllAvisClient = createAsyncThunk(
    'getAllcommandeByclient',
    async (id) => {
      const response = await axios.get(Base_url+ Path.getAllAvieByclient+id)

      return response.data
    }
)