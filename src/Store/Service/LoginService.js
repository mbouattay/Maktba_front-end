import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config'

export const Loginuser = createAsyncThunk(
  'loginservice',
  async (postData) => {
    const response = await axios.post(Base_url+ Path.LoginApi, postData)
    return response.data
  }
)


