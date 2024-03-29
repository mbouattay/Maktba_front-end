import React, { useEffect, useState } from "react";
import './Listeivraisons.css'
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Pagination from "@mui/material/Pagination";
import Typography from '@mui/material/Typography';
import Filterbar from '../filterbar/Filterbar';
import {ArrowLeft2,ArrowRight2,Sort} from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findCommandeBylibrairie } from "../../Store/Service/findCommandeBylibrairie";
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


const Listeivraisons = (props) => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      
    const librairieData = useSelector(
      (state) => state.findCommandeBylibrairie.commandeslibrairie
    );

const dispatch=useDispatch()
  

    const navigat=(id)=>{
        navigate(`/Vender/Details_de_livraison/${id}`)
    }
    
      

    const librairieState = useSelector(
      (state) => state.findCommandeBylibrairie.status
    );
    const filteredData = librairieData?.filter((item) => {
      return item.etatVender.includes("En cours")  || item.etatVender.includes("Compléter");;
    });

    const filteredDataEnattente = filteredData?.filter((item) => {
      return item.etatVender.includes("En cours");
    });
    const filteredDataLivrer = filteredData?.filter((item) => {
        return item.etatVender.includes("Compléter");
      });
      const [all, setAll] = React.useState(filteredData);
      const items =8;
      const [current,setCurrent]=useState(1)
      const NbPage=Math.ceil(all?.length/items);
      const startIndex=(current -1)*items;
      const endIndex=startIndex+items;
      const DataPerPage=all?.slice(startIndex,endIndex)
      function handlePagination (event,page) {
        setCurrent(page)
      }
      useEffect(() => {
        dispatch(findCommandeBylibrairie(props?.user.id));
        if(all?.length===0 && librairieState!="failed"&&filteredData?.length!==0) 
        {
          navigate(0)
        }
      },[]);

  return (
    <div className='liste-c'>
  <div>   <p className='txt-c'>Liste de livraisons</p></div>
    <div className='box01-lv'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#F7D070" } }}>
         <Tab onClick={()=>{setAll(filteredData);setCurrent(1)}} label={<p className="txttabs-c">Tout</p>} {...a11yProps(0)} />
          <Tab onClick={()=>{setAll(filteredDataEnattente);setCurrent(1)}} label={<p className="txttabs-c">En cours</p>} {...a11yProps(1)} />
          <Tab  onClick={()=>{setAll(filteredDataLivrer);setCurrent(1)}} label={<p className="txttabs-c">Livrer</p>} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <br/>
      <div className='row01-c'>
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
{DataPerPage?.map((obj,index) => (

<tr  onClick={()=>{navigat(obj.id)}} style={{cursor:"pointer"}}>

<td className='tdwidth-lv'>{obj.id}</td>
<td className='tdwidth02-lv'> <div className="row-c">
          
            <Avatar src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar} className="img1-c"style={{borderRadius:"50%"}} />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1-lv'><p className='txt02-c'>{obj.total_ttc.toFixed(2)}</p></td>
<td className='tdwidth1-lv'>{obj.produitlabrairies[0]?.nb_Article}</td>
<td className='tdwidth1-lv'>{obj.createdAt}</td>

<td className='tdwidth1-lv'>
{obj.etatVender==="Compléter"?
<><button className='bnt01-lc'><p className='txtbnt01-lc'>{obj.etatVender}</p></button></>
:
<>
<button className='bnt02-lc'><p className='txtbnt02-lc'>{obj.etatVender}</p></button>
</>
}
  </td>

</tr>

))}


</table>
      </div>

 
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className='row01-c'>
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
{DataPerPage?.map((obj,index) => (

<tr  onClick={()=>{navigat(obj.id)}}style={{cursor:"pointer"}}>

<td className='tdwidth-lv'>{obj.id}</td>
<td className='tdwidth02-lv'> <div className="row-c">
          
            <Avatar src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar} style={{borderRadius:"50%"}} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1-lv'><p className='txt02-c'>{obj.total_ttc.toFixed(2)}</p></td>
<td className='tdwidth1-lv'>{obj.produitlabrairies[0]?.nb_Article}</td>
<td className='tdwidth1-lv'>{obj.createdAt}</td>

<td className='tdwidth1-lv'>


<button className='bnt02-lc'><p className='txtbnt02-lc'>{obj.etatVender}</p></button>

  
  </td>

</tr>

))}


</table>
</div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className='row01-c'>
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

{filteredDataLivrer?.map((obj,index) => (

<tr onClick={()=>{navigat(obj.id)}}style={{cursor:"pointer"}}>

<td className='tdwidth-lv'>{obj.id}</td>
<td className='tdwidth02-lv'> <div className="row-c">
          
            <Avatar src={"http://127.0.0.1:8080/uploads/"+obj.user.avatar}  style={{borderRadius:"50%"}} className="img1-c" />
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj.user.fullname}</p></div>
              </div>
              </td>
<td className='tdwidth1-lv'><p className='txt02-c'>{obj.total_ttc.toFixed(2)}</p></td>
<td className='tdwidth1-lv'>{obj.produitlabrairies[0]?.nb_Article}</td>
<td className='tdwidth1-lv'>{obj.createdAt}</td>

<td className='tdwidth1-lv'>
{obj.etatVender==="Compléter"?
<><button className='bnt01-lc'><p className='txtbnt01-lc'>{obj.etatVender}</p></button></>
:
<>
<button className='bnt02-lc'><p className='txtbnt02-lc'>{obj.etatVender}</p></button>
</>
}
  </td>


</tr>

))}

</table>
        </div>
  
        </TabPanel>
  
    </Box>
    </div>
    <div className='page-c'>  

    <Pagination
                  count={NbPage}
                  shape="rounded"
                  className="pagination-shop"
                  page={current}
                  onChange={handlePagination}
        />
        
        </div>

    </div>
  )
}

export default Listeivraisons


