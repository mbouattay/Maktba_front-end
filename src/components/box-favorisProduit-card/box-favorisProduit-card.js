import React, { useEffect,useState } from "react";
import {  ShoppingCart, Trash } from "iconsax-react";
import Rating from "@mui/material/Rating";
import { Link, useNavigate } from "react-router-dom";
import { add } from "../../Store/panier/panierSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { DeleteProduitFavorie } from "../../Store/Service/DeleteProduitFavorie";
import { getAllProduitFavorie } from "../../Store/Service/AllProduitFavorieByclient";
import { removeProductFromFav } from "../../Store/ClientApi/SliceProduitFavorie";

const Box_FavoirsProduit_Card = (props) => {
  const dispatch=useDispatch()
  const relod=useNavigate()
  const Addtopanier=(idp,imgp,prix,titre,qte,idl)=>{
    dispatch(add({idp,imgp,prix,titre,qte,idl}))
    toast.success("Vous avez ajouté un produit à votre panier",{autoClose: 1000})
  }
  const removefavo=()=>{
    DeleteProduitFavorie(props.idp,props.idclient).then((response)=>{
      if(response.success===true){
          toast.success("votre produit  Suppr avec success",{autoClose: 1000})
          props.refresh()
      }
      dispatch(getAllProduitFavorie(props.user?.id));
     
    })
  }

  return (
<div>
<div className="colline-box">
      <div className="row6-favo">
        <div className="row2-favo">
      
          <div>
            <img src={"http://127.0.0.1:8080/uploads/"+props.imgp}className="img1-favo" />
          </div>
          <div className="col2-favo">
            <div className="txt3-favo">
              <p>{props.titre}</p>
            </div>
            <div className="row4-favo">
              <div className="logolib">
                <img src={"http://127.0.0.1:8080/uploads/"+props.imgl}  style={{width:"20px" , height:"20px"}} />
              </div>
              <div>
                <Link to={`/librairieProfile/${props.idl}`}>
                  <p className="txtlink-favo">{props.namelibriarie}</p>
                </Link>
              </div>
            </div>
            <div className="stars-favo">
              <Rating name="read-only" value={props.nbstart} readOnly
                defaultValue={0}
                size="small"
                className="stars"
              />      <div className="total-avis">({props.nbstart===undefined?0:props.nbstart})</div>
            </div>
          </div>
        </div>

       
          
         <div>   <p className="prix-favo">{props.prix} dt</p></div>
       
          <div className="rowboxfavo-page2">
          <div className="shop-favo">
            <div className="shopcont-favo"  onClick={()=>Addtopanier(props.idp,props.imgp,props.prix,props.titre,1,props.idl)}>
              <ShoppingCart size="22" color="#222222" variant="Bold" />
            </div>
          </div>
          <div className="delete-favo" onClick={removefavo}>
              <Trash size="22" color="#E66A6A" className="icondelete" variant="Bold" />
          </div>
          </div>
          

      </div>

    </div>
          <div className="lin-favo2" />
</div>
  );
};
export default Box_FavoirsProduit_Card;
