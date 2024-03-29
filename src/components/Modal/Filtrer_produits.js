import React, { useState } from "react";
import Box from "@mui/material/Box";
import PrettoSlider from "@mui/material/Slider";
import Modal from "@mui/material/Modal";
import './Filtrer_produits.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import { OutlinedInput, IconButton } from '@mui/material';
import { Refresh2} from 'iconsax-react';
const Filtrer_produits = ({onData,isopen}) => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#FFFFFF",
        width: "360px",
        height: "550px",
        boxShadow: "2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)",
        borderRadius: "8px",
        p: 4,
      };
      const [value, setValue] = useState([20, 37]);
      const handleClose = () => onData(false);
      const open=isopen
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      function valuetext(value) {
        return `${value}°C`;
      }

  return (

          <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    onClose={handleClose}
                  >
                    <Box sx={style}>
                    <div className='container-modal'>
                    <div><h2 style={{textAlign:"center",marginTop:'-1%'}}>Trier par</h2></div>
       
                <div><p className="txtbnt-mf">Date</p></div>
                <div className="minirow-mf"><div className="txtwidthbnt-modal"><p className="txtbnt-mf1">Les plus récent</p></div><div className="radi-modal">  <input type="Radio"className="radio-mf1"name="r1"/></div></div>
                <div className="minirow-mf"><div className="txtwidthbnt-modal"><p  className="txtbnt-mf1">Les plus anciens</p></div><div className="radi-modal"><input type="Radio"className="radio-mf1"name="r1"/></div></div>
                <div><p className="txtbnt-mf2">Montant de commandes</p></div>
                <div className="minirow-mf"><div className="txtwidthbnt-modal"><p  className="txtbnt-mf1">Par défaut</p></div><div className="radi-modal">  <input type="Radio"className="radio-mf1"name="r2"/></div></div>
                <div className="minirow-mf"><div className="txtwidthbnt-modal"><p  className="txtbnt-mf1">Du plus élevé au plus bas</p></div><div className="radi-modal">  <input type="Radio"className="radio-mf1"name="r2"/></div></div>
                <div className="minirow-mf"><div className="txtwidthbnt-modal"><p  className="txtbnt-mf1">Du plus bas au plus élevé</p></div><div className="radi-modal">  <input type="Radio"className="radio-mf1"name="r2"/></div></div>
                <br/>
                <div>
            <button className="bnt-modal3">
<div><Refresh2 size="25" color="#222"/></div>
<div><p className="txtbnt-modal32">Réinitialiser</p></div>

            </button>
          </div>
          <div>
            <button className="bnt2-modal23">Appliquer</button>
          </div>
                   </div>
                   
                  
                    </Box>
                  </Modal>

  )
}


export default Filtrer_produits
