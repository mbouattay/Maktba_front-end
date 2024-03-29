
import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const findCommandeBylibrairie = createAsyncThunk(
    'findCommandeBylibrairie',
    async (id) => {
      const response = await axios.get(Base_url+ Path.findCommandeBylibrairie+id)
    
      return response.data
    }
  )