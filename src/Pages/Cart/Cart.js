import { Grid} from "@mui/material";
import * as React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./Cart.css";
import { Link } from "react-router-dom";
import Box_produit_Card from "../../components/box-produit-card/box-produit-card";
import Recapitulatif from "../../components/Recapitulatif.js/Recapitulatif";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const panier=useSelector(state=> state.Panier.panier)

  return (
    <>
       <div className="Cart">
      <Grid item>
        <h1 className="titre">Panier</h1>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <div className="produit">
          <Grid container direction="row" className="items">
            <div item className="item Article">
              Article
            </div>
            <div item className="item Qte1">
              Qte
            </div>
            <div item className="item total1">
              Total HT
            </div>
            <div item className="item"></div>
          </Grid>
          <hr className="underline"></hr>
          <div className="scroll">
            {panier?.map((e,key)=>(<Box_produit_Card titre={e.titre} prix={e.prix} qte={e.qte} imgp={e.imgp} index={key} idl={e.idl} idp={e.idp} Allqte={e.Allqte}/>))}
          </div>
        </div>
        <Recapitulatif iduser={props.user.id} auth={props.user.auth} panier={panier} etatcompt={props.user.etatCompte} authuser={props.user.auth}/>
      </Grid>
      <div className="Continuer">
        <ArrowBackIosNewIcon className="icon1" />
        <Link to="/Shop"> Continuer vos achats</Link>
      </div>
    </div>

    </>
   
  );
};
export default Cart;
