import {createSlice} from "@reduxjs/toolkit";
import { getProduitDetail } from "../Service/ProduitDetail";
export const ProduitDetailLibrairie=createSlice({
  name:"ProduitDetailLibrairie",
  initialState:{
    detailProd:[{}],
    status:null
    
  },
  reducers: {},
  extraReducers:{
    [getProduitDetail.fulfilled]:(state,{payload})=>{
        state.detailProd=payload.produit
       state.status="success"
    },
   [getProduitDetail.pending]:(state)=>{
    state.status="loading"
   },
   [getProduitDetail.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default ProduitDetailLibrairie.reducer;