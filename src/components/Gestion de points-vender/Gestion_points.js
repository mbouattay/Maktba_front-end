import React, { useEffect,useState } from "react";
import './Gestion_points.css'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {  More } from "iconsax-react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Filterbar from '../filterbar/Filterbar';
import {Sort} from "iconsax-react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { findAllProduitFournisseur } from '../../Store/Service/findAllProduitFournisseur';
import img2 from "../../assets/Ellipse 503.png"

const Gestion_points = () => {
    const [value, setValue] = React.useState(0);
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const [op2, setop2] = React.useState(false);

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
      const produit =[{Code:"103429",Client:"Otis Hoppe",Date_création:"20/03/2023",Nbr_points:"20",Montant:"8.500",Date_validation:"20/03/2023",Staut:"Non validé"},{Code:"103429",Client:"Otis Hoppe",Date_création:"20/03/2023",Nbr_points:"20",Montant:"8.500",Date_validation:"20/03/2023",Staut:"Validé"},{Code:"103429",Client:"Otis Hoppe",Date_création:"20/03/2023",Nbr_points:"20",Montant:"8.500",Date_validation:"20/03/2023",Staut:"Non validé"},{Code:"103429",Client:"Otis Hoppe",Date_création:"20/03/2023",Nbr_points:"20",Montant:"8.500",Date_validation:"20/03/2023",Staut:"Non validé"}]

  return (
    <div className='Approvisionner'>
      <div className='row1-Appr'>
        <div><p className='txt1-Appr'>Gestion de points</p></div>
      
    
      </div>
      <div className='box01-Appr'>
            <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#F7D070" } }}>
         <Tab label={<p className="txttabs-Appr">Tout</p>} {...a11yProps(0)} />
          <Tab label={<p className="txttabs-Appr">Validé</p>} {...a11yProps(1)} />
          <Tab label={<p className="txttabs-Appr">Non validé</p>} {...a11yProps(2)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <br/>
      <div className='row01-Appr'>
      <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>

<table>
<tr>

<th>Code</th>
<th>Client</th>
<th>Date de création</th>
<th>Nbr de points</th>
<th>Montant</th>
<th>Date de validation</th>
<th>Staut</th>
<th></th>
<th></th>
</tr>

{produit.map((obj,index) => (

<tr  className='backnovo-Appr'>

<td className='tdwidth-Appr'>{obj.Code}</td>
<td className='tdwidth02-Appr'> 
         
<div className="row-Appr01">
            <img src={img2} className="img2-Appr" />
              <div style={{marginTop:"3%"}}><p className='txt010-Appr'>{obj.Client}</p></div>
              </div>
      
        
              </td>
<td className='tdwidth1-pont'><p className='txt010-Appr'>{obj.Date_création}</p></td>
<td className='tdwidth1-pont'>{obj.Nbr_points}</td>
<td className='tdwidth1-pont'>

<p className='txt020-Appr'>{obj.Montant}</p>
</td>
<td className='tdwidth1-pont'>{obj.Date_validation}</td>

<td className='tdwidth1-Appr'>
  
  {obj.Staut==="Non validé"?
    <div className="bntshoop-pon0">
    <p>{obj.Staut}</p>
    </div>
    :
    obj.Staut==="Validé"?
    <div className="bntshoop-pon0" style={{background:"#C1EAC5",color:"#05400A"}}>
    <p>{obj.Staut}</p>
    </div>
    :<>-</>

  }


  </td>
<td className='tdwidth1-Appr'>

<div className="more-int">
 
 <More
 size="22"
 color="#222222"
 aria-controls={open ? "basic-menu" : undefined}
 aria-haspopup="true"
 aria-expanded={open ? "true" : undefined}
/>


 </div>
</td>
</tr>

))}
  
  <Menu
              id="basic-menu"
              className="menu-listev"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
 
              <MenuItem className="menuitem-listev">
                <span>
                  <p className="txtmenu-avis">Modifier</p>
                </span>
              </MenuItem>
              <MenuItem
                className="menuitem-listev"
                onClick={() => {
                  setop2(true);
                }}
              >
                <span>
                  <p className="txtmenu-avis">Supprimer</p>
                </span>
              </MenuItem>
            </Menu>


</table>
      </div>

 
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className='row01-c'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
    
</div>
        </TabPanel>
     
    </Box>
    </div>

    </div>
  )
}



export default Gestion_points
