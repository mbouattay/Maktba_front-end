import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config'

export const GoogleService = createAsyncThunk(
  'GoogleService',
  async (postData) => {
    const response = await axios.post(Base_url+ Path.loginsocial, postData)
    return response.data
  }
)


