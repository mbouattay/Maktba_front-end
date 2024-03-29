import { createSlice } from "@reduxjs/toolkit";
import { getAllProduitFavorie } from "../Service/AllProduitFavorieByclient";
export const produiFavorie = createSlice({
  name: "produiFavorie",
  initialState: {
    produiFavorieClient: [],
    status: null,
  },
  reducers: {
    removeProductFromFav: (state, { payload }) => {
      state.produiFavorieClient = state.produiFavorieClient.filter(
        (index) => index !== payload.id
      );
    },
  },
  extraReducers: {
    [getAllProduitFavorie.fulfilled]: (state, { payload }) => {
      state.produiFavorieClient = payload.produitFavorie;
      state.status = "success";
    },
    [getAllProduitFavorie.pending]: (state) => {
      state.status = "loading";
    },
    [getAllProduitFavorie.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
export const { removeProductFromFav } = produiFavorie.actions;

export default produiFavorie.reducer;
