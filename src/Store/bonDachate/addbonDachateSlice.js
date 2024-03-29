import {createSlice} from "@reduxjs/toolkit";
import { addBonDachateapi } from "../Service/addBonDachate";

export const addBondachateSlice=createSlice({
  name:"addBondachateSlice",
  initialState:{
   bondachate :[] ,
   sucsses : null
  },
  reducers: {},
  extraReducers:{
    [addBonDachateapi.pending]:(state,)=>{
      state.sucsses=false;
    },
    [addBonDachateapi.fulfilled]:(state,{payload})=>{
    
      state.sucsses=true;
      state.bondachate=payload.bonAchat;
      
    },
    [addBonDachateapi.rejected]:(state,action)=>{
      state.sucsses=false
      
    },
  }  

})

export default addBondachateSlice.reducer;