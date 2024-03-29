import {createSlice} from "@reduxjs/toolkit";
import { nb_commande_par_jour } from "../Service/nb_commande_par_jour";
export const Slicenb_commande_par_jour=createSlice({
  name:"Slicenb_commande_par_jour",
  initialState:{
    produit:[],
    status:null
  },
  reducers: {},
  extraReducers:{
    [nb_commande_par_jour.fulfilled]:(state,{payload})=>{
        state.produit=payload.commandes;
       state.status="success"
    },
   [nb_commande_par_jour.pending]:(state)=>{
    state.status="loading"
   },
   [nb_commande_par_jour.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default Slicenb_commande_par_jour.reducer;