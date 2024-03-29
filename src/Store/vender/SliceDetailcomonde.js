import {createSlice} from "@reduxjs/toolkit";
import { Detailcomonde } from "../Service/Detailcomonde";
export const SliceDetailcomonde=createSlice({
  name:"SlicefindCommandeBylibrairie",
  initialState:{
    Detailcomonde:[],
    status:null
  },
  reducers: {},
  extraReducers:{
    [Detailcomonde.fulfilled]:(state,{payload})=>{
        state.Detailcomonde=payload.commandes;
       state.status="success"
    },
   [Detailcomonde.pending]:(state)=>{
    state.status="loading"
   },
   [Detailcomonde.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default SliceDetailcomonde.reducer;