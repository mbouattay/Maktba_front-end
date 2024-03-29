import {createSlice} from "@reduxjs/toolkit";
export const SliceCommande=createSlice({
  // Cette Slice nous permet de filtrer les commandes lorsque nous avons plusieurs commandes provenant de différentes librairies.
  name:"Commande",
  initialState:{commande:[]},
  reducers:{
    add:(state,action)=>{
        const ProduitExist =state.commande.find((obj)=>obj.produitlabrairieId===action.payload.produitlabrairieId)?true:false
        if(ProduitExist){
            state.commande.forEach((obj)=>{
              if (obj.produitlabrairieId === action.payload.produitlabrairieId) {
                obj.qte = Number(action.payload.qte);
                obj.prix = Number(action.payload.prix);
              }
            })        
          }else{
            state.commande.push(action.payload);
          }
          
    },
    removeCommande:(state,action)=>{
        state.commande.splice(action.payload,1);
      }
  },

})
export const{add,removeCommande}=SliceCommande.actions
export default SliceCommande.reducer;