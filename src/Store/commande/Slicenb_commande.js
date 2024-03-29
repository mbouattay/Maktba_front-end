import {createSlice} from "@reduxjs/toolkit";
import { nb_commande } from "../Service/nb_commande";
export const Slicenb_commande=createSlice({
  name:"Slicenb_commande",
  initialState:{
    produit:[],
    status:null
  },
  reducers: {},
  extraReducers:{
    [nb_commande.fulfilled]:(state,{payload})=>{
        state.produit=payload.nb_commande;
       state.status="success"
    },
   [nb_commande.pending]:(state)=>{
    state.status="loading"
   },
   [nb_commande.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default Slicenb_commande.reducer;