import {createSlice} from "@reduxjs/toolkit";
import { getAllAvisProduitDeatil } from './../Service/AllavisProduitDetail';
export const AllAvisProduitDeatil=createSlice({
  name:"AllAvisProduitDeatil",
  initialState:{
    avisDetailProd:[{}],
    status:null
    
  },
  reducers: {},
  extraReducers:{
    [getAllAvisProduitDeatil.fulfilled]:(state,{payload})=>{
        state.avisDetailProd=payload.avis
       state.status="success"
    },
   [getAllAvisProduitDeatil.pending]:(state)=>{
    state.status="loading"
   },
   [getAllAvisProduitDeatil.rejected]:(state,{payload})=>{
    state.status="failed"
   }

  }  

})

export default AllAvisProduitDeatil.reducer;