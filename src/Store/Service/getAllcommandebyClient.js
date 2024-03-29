import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getAllcommandeByclient = createAsyncThunk(
    'getAllcommandeByclient',
    async (id) => {
      const response = await axios.get(Base_url+ Path.getAllcommandeByclient+id)
      return response.data
    }
)