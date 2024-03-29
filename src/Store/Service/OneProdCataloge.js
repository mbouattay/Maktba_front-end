import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const getOneProdCataloge = createAsyncThunk(
    'getOneProdCataloge',
    async (id) => {
      const response = await axios.get(Base_url+ Path.oneProdCataloge+id)
      console.log(response)
      return response.data
    }
  )