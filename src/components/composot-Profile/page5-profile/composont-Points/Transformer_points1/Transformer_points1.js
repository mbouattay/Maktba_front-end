import React, { useEffect, useState } from "react";
import "./Transformer_points1.css";
import { SearchNormal1, ArrowCircleLeft } from "iconsax-react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPartanire } from "../../../../../Store/Service/Allpartnaire";
import { toast } from 'react-toastify';

const Transformer_points1 = (props) => {
  const [nbPoint ,setnbPoint]=useState(false)

  const dispatch=useDispatch()
  const allPartnaire = useSelector((state)=>state.Allpartnaire.partnaire)
  useEffect(()=>{
    dispatch(getAllPartanire())
  },[])

  return (
    <div className="Tf1">
      <div
        className="row-Tf1"
        onClick={() => {
          props.onRetourner();
        }}
      >
        <ArrowCircleLeft size="22" color="#222" />
        <div>
          <p>Retourner</p>
        </div>
      </div>
      <div>
        <p className="txt-Tf1">Transformer mes points</p>
      </div>

      <div>
        {" "}
        <OutlinedInput
          className="search-Tf1"
          placeholder={"Rechercher..."}
          endAdornment={
            <InputAdornment position="end">
              <SearchNormal1 size="19" color="#B1B1B1" />
            </InputAdornment>
          }
        />
      </div>
      <div>
        <p>Convertissez vos points avec:</p>
      </div>
      <div className="colini-Tf1">
        {allPartnaire.map((obj, index) => (
          <div className="rowmini-Tf1">
            <input type="Radio" className="radio-Tf1" name="r0" value={obj.id} onChange={(e)=>{props.handldataipd(e.target.value);setnbPoint(true);props.setpartnaire(obj.user.fullname)}}  />

            <div>
              <p className="txt7-Tf1">{obj.user?.fullname} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="minirow-Tf1">
        <button className="bnt3-Tf1">Annuler</button>

        <button
          className="bnt4-Tf1"
          onClick={() => {
            if(nbPoint){
              props.onClick();

            }else{toast.error("choisir voter partnaire!!!",{autoClose: 1000})}
    
          }}
        >
          Valider
        </button>
      </div>
    </div>
  );
};

export default Transformer_points1;
