import React, { useState } from "react";
import Box from "@mui/material/Box";
import PrettoSlider from "@mui/material/Slider";
import Modal from "@mui/material/Modal";
import './Triipar.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import { OutlinedInput, IconButton } from '@mui/material';
import { Refresh2} from 'iconsax-react';
const Triipar = ({onData,isopen}) => {
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
                    <div><h2 style={{textAlign:"center"}}>Filtrer les produits</h2></div>
             <div>
           <div><p className="txt-modall">Prix</p></div>
             <div>   <PrettoSlider 
          value={value}
          onChange={handleChange}
          getAriaValueText={valuetext}
          style={{ color: "#E9B949" }}
        
        /></div>
        <div className="boxval-modal">
            <div className="val-modal"><p>{value[0]}</p></div>
            <div className="val-modal"><p>{value[1]}</p></div>
        </div>
             </div>

<div>
          <div><p className="txt-modall"> Catégorie </p></div>
          <div>
          <Select className='txt-select' defaultValue="Par pertinence" style={{ width: "300px", height: " 39px", borderRadius: "8px" }} >
                    <MenuItem value="Par pertinence">
                        <em ><p className='txt-select'></p>Scolaire</em>
                    </MenuItem>
                    <ListSubheader> </ListSubheader>
                    <MenuItem value={1} className='txt-selectmodal'>Scolaire</MenuItem>
                    <MenuItem value={2} className='txt-selectmodal'>Para-scolaires</MenuItem>
                    <MenuItem value={3} className='txt-selectmodal'>Outils informatiques</MenuItem>
                    <MenuItem value={4} className='txt-selectmodal'>Divers</MenuItem>
                    <MenuItem value={5} className='txt-selectmodal'>Jeux educatifs</MenuItem>
                    <MenuItem value={5} className='txt-selectmodal'>Pack promo</MenuItem>
                    <ListSubheader></ListSubheader>
                   
                </Select>
          </div>
      

</div>
<div>
        <div><p className="txt-modall"> Quantité </p></div>
        <div className="box-32modal">
        <OutlinedInput className='inpnumber-modal' type="number" placeholder="Minimum"  />
       <div className="min-modal">-</div>
        <OutlinedInput className='inpnumber-modal' type="number"  placeholder="Maximum"/>

        </div>
          </div>
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

export default Triipar
