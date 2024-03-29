import {createSlice} from "@reduxjs/toolkit";
import { ProduitMieuxNote } from "../Service/produitMieuxNote";
export const AllProduitMieuxNote=createSlice({
  name:"AllProduitMieuxNote",
  initialState:{
    ProduitMieuxNote:[],
    status:null
    
  },
  reducers: {},
  extraReducers:{
    [ProduitMieuxNote.fulfilled]:(state,{payload})=>{
        state.ProduitMieuxNote=payload.produit
        state.status="success"
    },
   [ProduitMieuxNote.pending]:(state)=>{
    state.status="loading"
   },
   [ProduitMieuxNote.rejected]:(state)=>{
    state.status="failed"
   }
  }  

})

export default AllProduitMieuxNote.reducer;