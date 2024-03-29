import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getinfolibrairie = createAsyncThunk(
    'getinfolibrairie',
    async (id)=>{
      const response = await axios.get(Base_url+Path.getinfolibrairie+id)
      return response.data
    }
  )