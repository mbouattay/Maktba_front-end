import React from 'react'
import './Filterbar.css'
import {SearchNormal1} from "iconsax-react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import Triipar from '../Modal/Triipar';
import Filtrer_produits from '../Modal/Filtrer_produits';

const Filterbar = (props) => {
  const [open, setOpen] = React.useState(false);
  const [dataFromChild, setDataFromChild] = React.useState(false);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };


  return (
    <div className='row1-int'>
    <div className='row2-int'> 
    <OutlinedInput
          className="input-int"
          placeholder={"Rechercher..."}
          endAdornment={
            <InputAdornment position="end">
              <SearchNormal1 size="19" color="#B1B1B1" />
            </InputAdornment>
          }
        />
    <button className='bnt0-int' onClick={()=>{setDataFromChild(true);}}>
    {props.icon}
    <div><p  className='txt0-int'>{props.nom}</p></div>
    </button>
    {props.nom==="Ajouter filtre"?
    <>
       <Filtrer_produits onData={handleDataFromChild} isopen={dataFromChild}/>
    </>:
    <>
     <Triipar onData={handleDataFromChild} isopen={dataFromChild}/>
    </>}

    </div>

    <div className='row2-int'> 
    <p>Affichage</p>
    <select className="select-int">
            <option value={10}> 10</option>
          </select>
          <p className='txt2-int'>résultats sur 50</p>
    </div>

 </div>
  )
}

export default Filterbar
