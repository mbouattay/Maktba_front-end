import axios from "axios"
import { createAsyncThunk} from '@reduxjs/toolkit';
import { Path, Base_url } from '../../config/Config';
export const findAllProduitFournisseur = createAsyncThunk(
    'findAllProduitFournisseur',
    async () => {
      const response = await axios.get(Base_url+ Path.getAllProduitFornisseur)
      return response.data
    }
  )