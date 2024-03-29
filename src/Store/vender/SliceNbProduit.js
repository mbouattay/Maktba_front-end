import {createSlice} from "@reduxjs/toolkit";
import { getNbProduitlibBycategorie } from "../Service/nbProduitLibByCategoorie";
export const SliceNbproduitLib=createSlice({
  name:"SliceNbproduitLib",
  initialState:{
    Nbproduit:[],
    status:null
  },
  reducers: {},
  extraReducers:{
    [getNbProduitlibBycategorie.fulfilled]:(state,{payload})=>{
        state.Nbproduit=payload.produit;
       state.status="success"
    },
   [getNbProduitlibBycategorie.pending]:(state)=>{
    state.status="loading"
   },
   [getNbProduitlibBycategorie.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default SliceNbproduitLib.reducer;