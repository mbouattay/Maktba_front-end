
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import SliceLogin from './Authentication/SliceLogin';
import  SignupSlice  from './Authentication/SliceSignu';  
import {  persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import SlicebntGoogle from './Authentication/SlicebntGoogle';
import SliceAllproduitShope from './librairieApi/SliceAllProduitShope';
import SlicegetInfoLibrairie from './librairieApi/SlicegetInfoLibrairie';
import SliceAllProduitBylibrairie from './librairieApi/SliceAllProduitBylibrairie';
import SliceProduitDetailLibrairie from './librairieApi/SliceProduitDetailLibrairie';
import SliceAllavisProduitDetail from './librairieApi/SliceAllavisProduitDetail';
import SlicePanier  from './panier/panierSlice';
import SliceCommande  from './panier/commandeSlice';
import AjouteCommandeSlice from './commande/AjouteCommandeSlice';
import SliceAllproduitByCategorie from './librairieApi/SliceAllproduitByCategorie';
import SliceidentiteClient from './ClientApi/SliceidentiteClient';
import SliceProduitFavorie from './ClientApi/SliceProduitFavorie';
import SliceAllCommandeByClient from './commande/SliceAllCommandeByClient';
import SliceAvisClient from './ClientApi/SliceAvisClient';
import SliceGlobal from './Globalvariable/SliceGlobal';
import SlicefindCommandeBylibrairie from './commande/SlicefindCommandeBylibrairie';
import SliceDetailcomonde from './vender/SliceDetailcomonde';
import Slicegetfrofile from './vender/Slicegetprofile';
import SliceAllListProduit from './venderApi/SliceAllListProduit';
import SliceAvis from './vender/SliceAvis';
import  SliceNbproduitLib  from './vender/SliceNbProduit';
import SliceAllproduitFournisseur from './fournisseur/SlicefindAllproduit';
import SliceGategorie from './ClientApi/SliceGategorie';
import AllPartnaireSlice from './Partnaire/AllPartnaireSlice';
import  addBondachateSlice from './bonDachate/addbonDachateSlice';
import  AllbonDachateByuserSclie  from './bonDachate/AllbonDachateByuserSlice';
import Sliceprodplusvende from './commande/Sliceprodplusvende';
import Slicenb_commande_par_jour from './commande/Slicenb_commande_par_jour';
import Slicenb_commande from './commande/Slicenb_commande';
import  SliceAlldemondep  from './Admin/SliceAlldemondep';
import SliceProduitMieuxNote from './venderApi/SliceProduitMieuxNote';
import SliceAllProduitCataloge from './vender/SliceAllProduitCataloge';
import SliceOneProdCataloge from './vender/SliceOneProdCataloge';
import slicegetonesousGategorie from './ClientApi/slicegetonesousGategorie';
import Slicegetsuggestion from './Admin/Slicegetsuggestion';
import SlicegetAlluser from './Admin/SlicegetAlluser';

const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = combineReducers({
    loginservice:SliceLogin,
    Signup:SignupSlice,
    Googleservice:SlicebntGoogle,
    AllProduitShope:SliceAllproduitShope,
    infoLibrairie:SlicegetInfoLibrairie,
    AllProduitBylibrairie:SliceAllProduitBylibrairie,
    ProduitDetailLibrairie:SliceProduitDetailLibrairie,
    AllAvisProduitDeatil:SliceAllavisProduitDetail,
    Panier:SlicePanier,
    Commande:SliceCommande,
    AjouteCommande:AjouteCommandeSlice,
    AllProduitlibrairieByCategorie:SliceAllproduitByCategorie,
    IdentiteClient:SliceidentiteClient,
    produiFavorie:SliceProduitFavorie,
    AllcommandeByclient:SliceAllCommandeByClient,
    AvisClient:SliceAvisClient,
    Globalvariable:SliceGlobal,
    findCommandeBylibrairie:SlicefindCommandeBylibrairie,
    Detailcomonde:SliceDetailcomonde,
    profileVender:Slicegetfrofile,
    AlllistProduitLib:SliceAllListProduit,
    Allavislib:SliceAvis,
    NbproduitLib:SliceNbproduitLib,
    AllproduitFournisseur:SliceAllproduitFournisseur,
    AllCategorie:SliceGategorie,
    Allpartnaire:AllPartnaireSlice,
    addBondachateSlice:addBondachateSlice,
    AllbonDachateByuser:AllbonDachateByuserSclie,
    prodplusvende:Sliceprodplusvende,
    nbcommandeparjoure:Slicenb_commande_par_jour,
    nb_commande:Slicenb_commande,
    demondePar:SliceAlldemondep,
    ProduitMieuxNote:SliceProduitMieuxNote,
    prodCataloge:SliceAllProduitCataloge,
    OneProdCataloge:SliceOneProdCataloge,
    Onecategorie:slicegetonesousGategorie,
    getsuggestion:Slicegetsuggestion,
    getAlluser:SlicegetAlluser
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
  });
  export const persistor = persistStore(store);