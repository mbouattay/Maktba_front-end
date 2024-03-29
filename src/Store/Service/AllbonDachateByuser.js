import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const AllbonDachateByuser = createAsyncThunk(
    'AllbonDachateByuser',
    async (id) => {
      const response = await axios.get(Base_url+ Path.allbonDachateUser+id)
      return response.data
    }
)