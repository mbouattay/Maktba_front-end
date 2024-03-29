import React, { useState } from "react";
import "./Transformer_points2.css";
import { SearchNormal1, ArrowCircleLeft } from "iconsax-react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { toast } from 'react-toastify';

const Transformer_points2 = (props) => {
  const data = [
    { nom: "100pts (20 dinars)" ,value:20 , nbp:100 },
    { nom: "200pts (40 dinars)",value:40 , nbp:200 },
    { nom: "500 (100 dinars)",value:100 , nbp:500},
    { nom: "1000 (200 dinars)",value:200, nbp:1000 },
    { nom: "Auter :"},
  ];
  const [nbPoint ,setnbPoint]=useState()
  const [ok ,setok]=useState(false)
  const [solde ,setsolde]=useState()
  const handelCalculeSolde=(nbp)=>{
    setnbPoint(nbp)
    setsolde(Number(nbPoint)/0.5/1)
  }

  const datae={
    solde:solde , 
    userId:props.user.id,
    partenaireId:props.idp,
    nbpoint:nbPoint,
  }

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
      <div className="colini-Tf2">
        {data.map((obj, index) => (
          <div className="rowmini-Tf1">
            <input
      type="radio"
      className="radio-Tf1"
      name="r0"
      value={obj.value}

      onChange={(e) => {
        if (setsolde === obj.value) {
          setsolde('');
        } else {
          setnbPoint(obj.nbp)
          setsolde(e.target.value)

          if(obj.nom=="Auter :")
          {
            setok(true)
          }else{  setok(false)}

        }
      }}
    />
           
           
           
            <div>
              <p className="txt7-Tf1">{obj.nom} </p>
            </div>
          </div>
        ))}
      </div>

      {ok?
     <div className="rowinput-Tf2">
     <OutlinedInput className="s-Tf2" placeholder={"(Minimum 50pts)"}  onChange={(e)=>handelCalculeSolde(e.target.value)}/>
     <div>
       <p className="txt25-Tf2">=</p>
     </div>
     <OutlinedInput className="s-Tf2" value={solde} />
   </div>
   :<></>
      }
 
      <div className="minirow-Tf1">
        <button className="bnt3-Tf1">Annuler</button>

        <button
          className="bnt4-Tf1"
          onClick={() => {
            if(nbPoint<=props.point && props.point!=0)
            {
              props.onClick(datae);
              props.setpoint(nbPoint)
            }
          else{toast.error("verifier voter point  !!!",{autoClose: 1000})}
          }}
        >
          Valider
        </button>
      </div>
    </div>
  );
};

export default Transformer_points2;
