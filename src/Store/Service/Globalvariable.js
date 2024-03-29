
import { createAsyncThunk} from '@reduxjs/toolkit';
export const Globalvariable = createAsyncThunk(
    'Globalvariable',
    async (id) => {
      const data=id
      return data
    }
)
export const Globalvariable2 = createAsyncThunk(
  'Globalvariable2',
  async (id) => {
    const data=id
    return data
  }
)