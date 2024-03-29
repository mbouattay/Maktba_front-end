import React, { useEffect } from 'react'
import './Approvisionner.css'
import {ReceiptText,ShoppingCart} from "iconsax-react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import img2 from "../../assets/Ellipse 503.png"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img1 from "../../assets/prod2.png";
import Filterbar from '../filterbar/Filterbar';
import {ArrowLeft2,ArrowRight2,Sort} from "iconsax-react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { findAllProduitFournisseur } from '../../Store/Service/findAllProduitFournisseur';
const Approvisionner = () => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
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
    
      const produit = useSelector((state)=>state.AllproduitFournisseur.produitFournisseur)
      const dispatch=useDispatch()
      useEffect(()=>{
            dispatch(findAllProduitFournisseur())
      },[])
      console.log(produit)
  return (
    <div className='Approvisionner'>
      <div className='row1-Appr'>
        <div><p className='txt1-Appr'>Approvisionner</p></div>
        <div className='row2-Appr'>
            <button className='bnt1-appr'><div className='rowbnt-appr'><ReceiptText size="24" color="#222" variant="Bold"/><div><p>Transactions</p></div></div></button>
            <button className='bnt2-appr'><ShoppingCart size="24" color="#fff" variant="Bold" style={{marginTop:"28%"}}/><p className='patch-appr'><p className='patchtxt-appr'>+3</p></p></button>

            </div>
    
      </div>
      <div className='box01-Appr'>
            <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#F7D070" } }}>
         <Tab label={<p className="txttabs-Appr">Articles</p>} {...a11yProps(0)} />
          <Tab label={<p className="txttabs-Appr">Fournisseurs</p>} {...a11yProps(1)} />
     
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <br/>
      <div className='row01-Appr'>
      <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>

<table>
<tr>

<th>#</th>
<th>Produit</th>
<th>Prix</th>
<th>Qté</th>
<th>Fournisseur</th>
<th>Téléphone</th>
<th></th>
</tr>

{produit.map((obj,index) => (

<tr  className='backnovo-Appr'>

<td className='tdwidth-Appr'>{obj.id}</td>
<td className='tdwidth02-Appr'> 
         
<div className="row-Appr01">
            <img src={"http://127.0.0.1:8080/uploads/"+obj.image} className="img2-Appr" />
              <div style={{marginTop:"3%"}}><p className='txt010-Appr'>{obj.titre}</p></div>
              </div>
      
        
              </td>
<td className='tdwidth1-Appr'><p className='txt020-Appr'>{obj.prix_en_gros}</p></td>
<td className='tdwidth1-Appr'>{obj.Qte}</td>
<td className='tdwidth02-Appr'>
<div className="row-Appr01">
            <img src={"http://127.0.0.1:8080/uploads/"+obj.fournisseur?.user?.avatar} className="img3-Appr" />
              <div style={{marginTop:"3%"}}><p className='txt010-Appr'>{obj.fournisseur?.user?.fullname}</p></div>
              </div></td>
<td className='tdwidth101-Appr'>{obj.fournisseur?.telephone}</td>

<td className='tdwidth1-Appr'>
  <div className="bntshoop-appr">
  <ShoppingCart size="24" color="#222" variant="Bold" style={{marginTop:"14%",marginLeft:"13%"}}/>
    </div>
  </td>

</tr>

))}


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

export default Approvisionner
