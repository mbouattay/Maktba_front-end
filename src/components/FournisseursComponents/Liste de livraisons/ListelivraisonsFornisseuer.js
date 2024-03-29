import React from 'react'
import  './ListelivraisonsFornisseuer.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import img1 from "../../../assets/Ellipse 503.png"
import Typography from '@mui/material/Typography';
import Filterbar from '../../filterbar/Filterbar';
import {ArrowLeft2,ArrowRight2,Sort} from "iconsax-react";
import { useNavigate } from "react-router-dom";
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
      'aria-listeFontrols': `simple-tabpanel-${index}`,
    };
  }

const ListelivraisonsFornisseuer = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const data=[
        {id:"45645645",nom:"Otis Hoppe",prix:"8.500",Nbr:"20",date:"31/03/2023",Staut:"Compléter"},
        {id:"2000254",nom:"Otis Hoppe",prix:"8.500",Nbr:"5",date:"05/03/2023",Staut:"Compléter"},
        {id:"45468",nom:"Otis Hoppe",prix:"8.500",Nbr:"10",date:"01/03/2023",Staut:"Compléter"},
        {id:"103429",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"En attente"},
        {id:"456456456",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"En attente"},
        {id:"33773732",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Compléter"},
        {id:"103429",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"En attente"},
        {id:"5533223",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"En attente"},
        {id:"999999955",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Compléter"},
        {id:"232323232",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"En attente"},

 
    ]
    const navigat=(id)=>{
        navigate(`/Fornisseuer/Détails_de_livraison/${id}`)
    }
    const filteredDataEnattente = data.filter((item) => {
      return item.Staut.includes("En attente");
    });
    const filteredDataLivrer = data.filter((item) => {
        return item.Staut.includes("Compléter");
      });
  
  return (
    <div className='liste-listeF'>
     <div><p className='txt-listeF'>Liste de livraisons</p></div>
    <div className='box01-lv'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#F7D070" } }}>
         <Tab label={<p className="txttabs-listeF">Tout</p>} {...a11yProps(0)} />
          <Tab label={<p className="txttabs-listeF">En attente</p>} {...a11yProps(1)} />
          <Tab label={<p className="txttabs-listeF">Livrer</p>} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <br/>
      <div className='row01-listeF'>
      <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>

<table>
<tr>

<th>#</th>
<th>Client</th>
<th>Montant</th>
<th>Nbr d’articles</th>
<th>Date de création</th>
<th>Mise à jour</th>

</tr>

{data.map((obj,index) => (

<tr onClick={()=>{navigat(obj.id)}} className='backnovo-listeF0'>

<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-listeF">
            <img src={img1} className="img1-listeF" />
              <div style={{marginTop:"3%"}}><p className='txt01-listeF'>{obj.nom}</p></div>
              </div>
              </td>
<td className='tdwidth1-listeF'><p className='txt02-listeF'>{obj.prix}</p></td>
<td className='tdwidth1-listeF'>{obj.Nbr}</td>
<td className='tdwidth1-listeF'>{obj.date}</td>

<td className='tdwidth1-listeF'>
{obj.Staut==="Compléter"?<button className='bnt02-listeF'><p className='txtbnt02-listeF'>{obj.Staut}</p></button>:<button className='bnt01-listeF'><p className='txtbnt02-listeF'>{obj.Staut}</p></button>}

  
  </td>

</tr>

))}


</table>
      </div>

 
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className='row01-listeF'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
        <table>
<tr>

<th>#</th>
<th>Client</th>
<th>Montant</th>
<th>Nbr d’articles</th>
<th>Date de création</th>
<th>Mise à jour</th>

</tr>

{filteredDataEnattente.map((item) => (
<tr onClick={()=>{navigat(item.id)}} className='backnovo-listeF0'>
<td className='tdwidth'>{item.id}</td>
<td className='tdwidth02'> <div className="row-listeF">
            <img src={img1} className="img1-listeF" />
              <div style={{marginTop:"3%"}}><p className='txt01-listeF'>{item.nom}</p></div>
              </div>
              </td>
<td className='tdwidth1-listeF'><p className='txt02-listeF'>{item.prix}</p></td>
<td className='tdwidth1-listeF'>{item.Nbr}</td>
<td className='tdwidth1-listeF'>{item.date}</td>


<td className='tdwidth1-listeF'>
{item.Staut==="Compléter"?<button className='bnt02-listeF'><p className='txtbnt02-listeF'>{item.Staut}</p></button>:<button className='bnt01-listeF'><p className='txtbnt02-listeF'>{item.Staut}</p></button>}

</td>


</tr>
))}


</table>
</div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className='row01-listeF'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
        <table>
<tr>

<th>#</th>
<th>Client</th>
<th>Montant</th>
<th>Nbr d’articles</th>
<th>Date de création</th>
<th>Mise à jour</th>

</tr>

{filteredDataLivrer.map((item) => (
<tr onClick={()=>{navigat(item.id)}} className='backnovo-listeF0'>
<td className='tdwidth'>{item.id}</td>
<td className='tdwidth02'> <div className="row-listeF">
            <img src={img1} className="img1-listeF" />
              <div style={{marginTop:"3%"}}><p className='txt01-listeF'>{item.nom}</p></div>
              </div>
              </td>
<td className='tdwidth1-listeF'><p className='txt02-listeF'>{item.prix}</p></td>
<td className='tdwidth1-listeF'>{item.Nbr}</td>
<td className='tdwidth1-listeF'>{item.date}</td>



<td className='tdwidth1-listeF'>
{item.Staut==="Compléter"?<button className='bnt02-listeF'><p className='txtbnt02-listeF'>{item.Staut}</p></button>:<button className='bnt01-listeF'><p className='txtbnt02-listeF'>{item.Staut}</p></button>}

</td>

</tr>
))}


</table>
        </div>
  
        </TabPanel>
  
    </Box>
    </div>
    <div className='page-listeF'>  
<div className="pagination1-listeF">
          <ArrowLeft2 size="22" color="#626262" style={{cursor:"pointer"}} />
          <p>Page 1 sur 1</p>
          <ArrowRight2 size="22" color="#626262" style={{cursor:"pointer"}} />
        </div></div>

    </div>
  )
}

export default ListelivraisonsFornisseuer
