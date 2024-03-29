import {createSlice} from "@reduxjs/toolkit";
import { addBonDachateapi } from "../Service/addBonDachate";
import { AllbonDachateByuser } from './../Service/AllbonDachateByuser';

export const AllbonDachateByuserSclie=createSlice({
  name:"AllbonDachateByuserSclie",
  initialState:{
   bondachates :[] ,
   sucsses : null
  },
  reducers: {},
  extraReducers:{
    [AllbonDachateByuser.pending]:(state,)=>{
      state.sucsses=false;
    },
    [AllbonDachateByuser.fulfilled]:(state,{payload})=>{
    
      state.sucsses=true;
      state.bondachates=payload.bonAchat;
      
    },
    [AllbonDachateByuser.rejected]:(state,action)=>{
      state.sucsses=false
      
    },
  }  

})

export default AllbonDachateByuserSclie.reducer;