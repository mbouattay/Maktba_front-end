import {createSlice} from "@reduxjs/toolkit";
import { getprofileVender } from "../Service/getfrofileVender";
export const Slicegetprofile=createSlice({
  name:"Slicegetprofile",
  initialState:{
    getprofileVender:[],
    status:null
  },
  reducers: {},
  extraReducers:{
    [getprofileVender.fulfilled]:(state,{payload})=>{
        state.getprofileVender=payload.profile;
       state.status="success"
    },
   [getprofileVender.pending]:(state)=>{
    state.status="loading"
   },
   [getprofileVender.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default Slicegetprofile.reducer;