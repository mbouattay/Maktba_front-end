import React from 'react'
import './ListecommandesFornisseuer.js.css'
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
      'aria-Fornisseuercontrols': `simple-tabpanel-${index}`,
    };
  }

const ListecommandesFornisseuer = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const data=[
        {id:"45645645",nom:"Otis Hoppe",prix:"8.500",Nbr:"20",date:"31/03/2023",Staut:"Compléter"},
        {id:"2000254",nom:"Otis Hoppe",prix:"8.500",Nbr:"5",date:"05/03/2023",Staut:"En cours"},
        {id:"45468",nom:"Otis Hoppe",prix:"8.500",Nbr:"10",date:"01/03/2023",Staut:"Nouveau"},
        {id:"103429",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Rejeter"},
        {id:"456456456",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Rejeter"},
        {id:"33773732",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"En cours"},
        {id:"103429",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Rejeter"},
        {id:"5533223",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Nouveau"},
        {id:"999999955",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Nouveau"},
        {id:"232323232",nom:"Otis Hoppe",prix:"8.500",Nbr:"15",date:"21/03/2023",Staut:"Rejeter"},

 
    ]
    const navigat=(id)=>{
        navigate(`/Fornisseuer/Détails_de_commandes/${id}`)
    }
    const filteredDataNouveau = data.filter((item) => {
      return item.Staut.includes("Nouveau");
    });
    const filteredDataRejeter = data.filter((item) => {
        return item.Staut.includes("Rejeter");
      });
      const filteredEncours = data.filter((item) => {
        return item.Staut.includes("En cours");
      });
      const filteredDataCompléter = data.filter((item) => {
        return item.Staut.includes("Compléter");
      });
  return (
    <div className='liste-Fornisseuerc'>
  <div>   <p className='txt-Fornisseuerc'>Liste de commandes</p></div>
    <div className='box01-Fornisseuerc'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#F7D070" } }}>
         <Tab label={<p className="txttabs-Fornisseuerc">Tout</p>} {...a11yProps(0)} />
          <Tab label={<p className="txttabs-Fornisseuerc">Nouveau</p>} {...a11yProps(1)} />
          <Tab label={<p className="txttabs-Fornisseuerc">En cours</p>} {...a11yProps(1)} />
          <Tab label={<p className="txttabs-Fornisseuerc">Compléter</p>} {...a11yProps(1)} />
          <Tab label={<p className="txttabs-Fornisseuerc">Rejeter</p>} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <br/>
      <div className='row01-Fornisseuerc'>
      <Filterbar icon={  <Sort size="22" color="#222222"/> } nom="Trier par" />
        
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

<tr className={obj.Staut==="Nouveau"?"backnovo-Fornisseuerc":"backnovo-Fornisseuerc0"} onClick={()=>{navigat(obj.id)}}>

<td className='tdwidth'>{obj.id}</td>
<td className='tdwidth02'> <div className="row-Fornisseuerc">
            <img src={img1} className="img1-Fornisseuerc" />
              <div style={{marginTop:"3%"}}><p className='txt01-Fornisseuerc'>{obj.nom}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-Fornisseuerc'>{obj.prix}</p></td>
<td className='tdwidth1'>{obj.Nbr}</td>
<td className='tdwidth1'>{obj.date}</td>

<td className='tdwidth1'>
{obj.Staut==="Compléter"?
<><button className='bnt01-Fornisseuerc'><p className='txtbnt01-Fornisseuerc'>{obj.Staut}</p></button></>
:
<>
{obj.Staut==="En cours"?
<button className='bnt02-Fornisseuerc'><p className='txtbnt02-Fornisseuerc'>{obj.Staut}</p></button>
:<>{obj.Staut==="Rejeter"?<button className='bnt02-Fornisseuerc' style={{background:"#FACDCD"}}><p className='txtbnt02-Fornisseuerc'>{obj.Staut}</p></button>:
<>{obj.Staut==="Nouveau"?<button className='bnt02-Fornisseuerc' style={{background:"#FCEFC7"}}><p className='txtbnt02-Fornisseuerc'style={{color:"#513C06"}}>{obj.Staut}</p></button>:<></>}</>}</>}</>}

  
  </td>

</tr>

))}


</table>
      </div>

 
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className='row01-Fornisseuerc'>
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

{filteredDataNouveau.map((item) => (
<tr>
<td className='tdwidth'>{item.id}</td>
<td className='tdwidth02'> <div className="row-Fornisseuerc">
            <img src={img1} className="img1-Fornisseuerc" />
              <div style={{marginTop:"3%"}}><p className='txt01-Fornisseuerc'>{item.nom}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-Fornisseuerc'>{item.prix}</p></td>
<td className='tdwidth1'>{item.Nbr}</td>
<td className='tdwidth1'>{item.date}</td>


<td className='tdwidth1'>
    
{item.Staut==="Compléter"?
<><button className='bnt01-Fornisseuerc'><p className='txtbnt01-Fornisseuerc'>{item.Staut}</p></button></>
:
<>
{item.Staut==="En cours"?
<button className='bnt02-Fornisseuerc'><p className='txtbnt02-Fornisseuerc'>{item.Staut}</p></button>
:<>{item.Staut==="Rejeter"?<button className='bnt02-Fornisseuerc' style={{background:"#FACDCD"}}><p className='txtbnt02-Fornisseuerc'>{item.Staut}</p></button>:
<>{item.Staut==="Nouveau"?<button className='bnt02-Fornisseuerc' style={{background:"#FCEFC7"}}><p className='txtbnt02-Fornisseuerc'style={{color:"#513C06"}}>{item.Staut}</p></button>:<></>}</>}</>}</>}</td>


</tr>
))}


</table>
</div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className='row01-Fornisseuerc'>
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

{filteredEncours.map((item) => (
<tr className={item.Staut==="Nouveau"?"backnovo-Fornisseuerc":""}>
<td className='tdwidth'>{item.id}</td>
<td className='tdwidth02'> <div className="row-Fornisseuerc">
            <img src={img1} className="img1-Fornisseuerc" />
              <div style={{marginTop:"3%"}}><p className='txt01-Fornisseuerc'>{item.nom}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-Fornisseuerc'>{item.prix}</p></td>
<td className='tdwidth1'>{item.Nbr}</td>
<td className='tdwidth1'>{item.date}</td>


<td className='tdwidth1'>
    
{item.Staut==="Compléter"?
<><button className='bnt01-Fornisseuerc'><p className='txtbnt01-Fornisseuerc'>{item.Staut}</p></button></>
:
<>
{item.Staut==="En cours"?
<button className='bnt02-Fornisseuerc'><p className='txtbnt02-Fornisseuerc'>{item.Staut}</p></button>
:<>{item.Staut==="Rejeter"?<button className='bnt02-Fornisseuerc' style={{background:"#FACDCD"}}><p className='txtbnt02-Fornisseuerc'>{item.Staut}</p></button>:
<>{item.Staut==="Nouveau"?<button className='bnt02-Fornisseuerc' style={{background:"#FCEFC7"}}><p className='txtbnt02-Fornisseuerc'style={{color:"#513C06"}}>{item.Staut}</p></button>:<></>}</>}</>}</>}</td>

</tr>
))}


</table>
        </div>
  
        </TabPanel>
        <TabPanel value={value} index={3}>
        <div className='row01-Fornisseuerc'>
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

{filteredDataCompléter.map((item) => (
<tr className={item.Staut==="Nouveau"?"backnovo-Fornisseuerc":""}>
<td className='tdwidth'>{item.id}</td>
<td className='tdwidth02'> <div className="row-Fornisseuerc">
            <img src={img1} className="img1-Fornisseuerc" />
              <div style={{marginTop:"3%"}}><p className='txt01-Fornisseuerc'>{item.nom}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-Fornisseuerc'>{item.prix}</p></td>
<td className='tdwidth1'>{item.Nbr}</td>
<td className='tdwidth1'>{item.date}</td>
<td className='tdwidth1'>


    
{item.Staut==="Compléter"?
<><button className='bnt01-Fornisseuerc'><p className='txtbnt01-Fornisseuerc'>{item.Staut}</p></button></>
:
<>
{item.Staut==="En cours"?
<button className='bnt02-Fornisseuerc'><p className='txtbnt02-Fornisseuerc'>{item.Staut}</p></button>
:<>{item.Staut==="Rejeter"?<button className='bnt02-Fornisseuerc' style={{background:"#FACDCD"}}><p className='txtbnt02-Fornisseuerc'>{item.Staut}</p></button>:
<>{item.Staut==="Nouveau"?<button className='bnt02-Fornisseuerc' style={{background:"#FCEFC7"}}><p className='txtbnt02-Fornisseuerc'style={{color:"#513C06"}}>{item.Staut}</p></button>:<></>}</>}</>}</>}</td>


</tr>
))}


</table>
</div>
        </TabPanel>
        <TabPanel value={value} index={4}>
        <div className='row01-Fornisseuerc'>
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

{filteredDataRejeter.map((item) => (
<tr className={item.Staut==="Nouveau"?"backnovo-Fornisseuerc":""}>
<td className='tdwidth'>{item.id}</td>
<td className='tdwidth02'> <div className="row-Fornisseuerc">
            <img src={img1} className="img1-Fornisseuerc" />
              <div style={{marginTop:"3%"}}><p className='txt01-Fornisseuerc'>{item.nom}</p></div>
              </div>
              </td>
<td className='tdwidth1'><p className='txt02-Fornisseuerc'>{item.prix}</p></td>
<td className='tdwidth1'>{item.Nbr}</td>
<td className='tdwidth1'>{item.date}</td>
<td className='tdwidth1'>


    
{item.Staut==="Compléter"?
<><button className='bnt01-Fornisseuerc'><p className='txtbnt01-Fornisseuerc'>{item.Staut}</p></button></>
:
<>
{item.Staut==="En cours"?
<button className='bnt02-Fornisseuerc'><p className='txtbnt02-Fornisseuerc'>{item.Staut}</p></button>
:<>{item.Staut==="Rejeter"?<button className='bnt02-Fornisseuerc' style={{background:"#FACDCD"}}><p className='txtbnt02-Fornisseuerc'>{item.Staut}</p></button>:
<>{item.Staut==="Nouveau"?<button className='bnt02-Fornisseuerc' style={{background:"#FCEFC7"}}><p className='txtbnt02-Fornisseuerc'style={{color:"#513C06"}}>{item.Staut}</p></button>:<></>}</>}</>}</>}</td>


</tr>
))}


</table>
</div>
        </TabPanel>
    </Box>
    </div>
    <div className='page-Fornisseuerc'>  
<div className="pagination1-Fornisseuerc">
          <ArrowLeft2 size="22" color="#626262" style={{cursor:"pointer"}} />
          <p>Page 1 sur 1</p>
          <ArrowRight2 size="22" color="#626262" style={{cursor:"pointer"}} />
        </div></div>

    </div>
  )
}

export default ListecommandesFornisseuer
