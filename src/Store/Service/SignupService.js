import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config'

export const Signupuser = createAsyncThunk(
  'Signup',
  async (postData) => {
    const response = await axios.post(Base_url+ Path.SignupApi, postData)
    return response.data
  }
)


