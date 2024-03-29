import React, { useEffect, useState } from "react";
import './AdminPartners.css'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Filterbar from '../../filterbar/Filterbar';
import {Sort,More, TickCircle, Trash,CloseCircle,ReceiptSearch } from "iconsax-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { demondePar } from "../../../Store/Service/demondePar";
import { AddFournisseur, AddLibrairie, AnnulerDemende } from "../../../Store/Service/Addpartnier";
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
const Listecommandes = (props) => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [op, setop] = React.useState(false);
    const [op2, setop2] = React.useState(false);
    const [librairieData, setlibrairieData] = React.useState();
    const [etat, setetat] = React.useState();
    const [all, setAll] = React.useState();
    const [demende, setdemende] = React.useState();
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const navigat=(id)=>{
        navigate(`/Admin`)
        navigate(0)
    }

    const filteredLibrairie = librairieData?.filter((item) => {
      return item?.Role?.includes("Librairie");
    });
    const filteredDataFournisseur = librairieData?.filter((item) => {
        return item?.Role?.includes("Fournisseur");
      });
      const filteredEntreprise = librairieData?.filter((item) => {
        return item?.Role?.includes("Entreprise");
      });
      const filteredDataÉcole = librairieData?.filter((item) => {
        return item?.Role?.includes("École");
      });
      const filteredAssociation = librairieData?.filter((item) => {
        return item?.Role?.includes("Association");
      });
      const handleChange = (event, newValue) => {
        setValue(newValue);
      }
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleClicke = () => {
        setop(true);
      };
      const items =10;
      const [current,setCurrent]=useState(1)
      const NbPage=Math.ceil(all?.length/items);
      const startIndex=(current -1)*items;
      const endIndex=startIndex+items;
      const DataPerPage = all ? all.slice(startIndex, endIndex) : [];
      function handlePagination (event,page) {
        setCurrent(page)
      }     
  
      const filteredetat1= filteredLibrairie?.filter((item) => {
        return item?.etat?.includes("en_cours");
      });
      const filteredetat2= filteredDataFournisseur?.filter((item) => {
        return item?.etat?.includes("en_cours");
      });
      const filteredetat3= filteredEntreprise?.filter((item) => {
        return item?.etat?.includes("en_cours");
      });
      const filteredetat4= filteredDataÉcole?.filter((item) => {
        return item?.etat?.includes("en_cours");
      });
      const filteredetat5= filteredAssociation?.filter((item) => {
        return item?.etat?.includes("en_cours");
      });
     const confirm=()=>{
      if(demende.etat!=="accepte" )
      {
 
          const data={
            email: demende.email,
            Role:demende.Role,
            username: demende.fullname,
          
            }

                  AddLibrairie(demende.id,data).then((res)=>{
           
                    if(res.message!=="email exist ")
                    {
                      toast.success("c'est demande a ete accepté success", { autoClose: 1000,})
                      setAnchorEl(null);
                      setetat(demende.etat)
                    }else{
                      toast.error("email exist", { autoClose: 1000,})
                      setAnchorEl(null);
                    }
             
              
           })

      }else{ toast.error("demende deja accepted", { autoClose: 1000,})}
     }      

const Annuler=()=>{
  if(demende.etat!=="Annuler")
  {
    AnnulerDemende(demende.id).then((res)=>{
      if(res.success===true)
      {
       toast.success("c'esta ete Refuse  success", { autoClose: 1000,})
       setAnchorEl(null);
       setetat(demende.etat)
      }else(  toast.error(res.message, { autoClose: 1000,})
      )
   })
  }else{(  toast.error("deja Refuse !!", { autoClose: 1000,}))}

}


      useEffect(() => {
           demondePar().then((res)=>{
            setlibrairieData(res.demende)
            setAll(res.demende)
           })
      }, [demondePar,etat]);



  return (
    <div className='liste-c'>
  <div>   <p className='txt-c'>Liste de demande</p></div>
    <div className='box01-c'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#F7D070" } }}>
         <Tab onClick={()=>{setAll(librairieData);setCurrent(1)}}  label={<p className="txttabs-c">Tout</p>} {...a11yProps(0)} />
          <Tab onClick={()=>{setAll(filteredLibrairie);setCurrent(1);}} label={<div style={{display:"flex"}}><p className="txttabs-c">Librairie</p>{filteredetat1?.length!==0?<div className="cir-titre">{filteredetat1?.length}</div>:<></>}</div>}{...a11yProps(1)} />
          <Tab  onClick={()=>{setAll(filteredDataFournisseur);setCurrent(1)}} label={<div style={{display:"flex"}}><p className="txttabs-c">Fournesseur</p>{filteredetat2?.length!==0?<div className="cir-titre2">{filteredetat2?.length}</div>:<></>}</div>}{...a11yProps(2)} />
          <Tab  onClick={()=>{setAll(filteredEntreprise);setCurrent(1)}} label={<div style={{display:"flex"}}><p className="txttabs-c">Entreprise</p>{filteredetat3?.length!==0?<div className="cir-titre2">{filteredetat3?.length}</div>:<></>}</div>} {...a11yProps(3)} />
          <Tab  onClick={()=>{setAll(filteredDataÉcole);setCurrent(1)}} label={<div style={{display:"flex"}}><p className="txttabs-c">Ecole</p>{filteredetat4?.length!==0?<div className="cir-titre">{filteredetat4?.length}</div>:<></>}</div>} {...a11yProps(4)} />
          <Tab  onClick={()=>{setAll(filteredAssociation);setCurrent(1)}} label={<div style={{display:"flex"}}><p className="txttabs-c">Association</p>{filteredetat5?.length!==0?<div className="cir-titre2">{filteredetat5?.length}</div>:<></>}</div>} {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <br/>
      <div className='row01-c'>
      <Filterbar icon={  <Sort size="22" color="#222222"/> } nom="Trier par" />
        
<table>
<tr>

<th><p style={{marginLeft:"15%"}}>#</p></th>
<th>Client</th>
<th>N téléphone</th>
<th>E-mail</th>
<th>Role</th>
<th>Nom de travail </th>
<th>etat</th>
<th>pack</th>
<th ><p style={{marginLeft:"50%"}}>fichier</p></th>

</tr>

{DataPerPage?.map((obj,index) => (

<tr className={obj?.etat==="en_cours"?"backnovo-c":"backnovo-c0"} >

<td className='tdwidth'><p style={{marginLeft:"15%"}}>{obj?.id}</p></td>
<td > <div className="row-c">
          
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj?.fullname}</p></div>
              </div>
              </td>
<td ><p className='txt02-c'>{obj?.phone}</p></td>
<td>{obj?.email}</td>
<td ><div className="txt02-s">{obj?.Role}</div></td>
<td >{obj?.name_work}</td>
<td >
{obj.etat==="accepte"?
<><button className='bnt01-c'><p className='txtbnt01-c'style={{color:"#05400A"}}>{obj.etat}</p></button></>
:<>{obj.etat==="Annuler"?<button className='bnt02-c' style={{background:"#E66A6A"}}><p className='txtbnt02-c'style={{color:"#fff"}}>Annuler</p> </button>:
<>{obj.etat==="en_cours"?<button className='bnt02-c' style={{background:"#DCEEFB"}}><p className='txtbnt02-c'style={{color:"#05400A"}}>en attente</p></button>:<></>}</>}
</>}

  
  </td>
  <td >
    {obj?.pack}
  </td>
  <td >
  <Link to={"http://127.0.0.1:8080/uploads/"+obj?.file}  style={{marginLeft:"50%",marginTop:"15%"}}><ReceiptSearch size="22" color="#222" style={{marginLeft:"-10%",marginTop:"15%"}}/></Link>
  </td>

  <td className="more-avis">
                   <div  className="more-avis2">
                      <More
                      size="22"
                      color="#222222"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(e)=>{ setAnchorEl(e.currentTarget);setdemende(obj)}}
                      />
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
        <table>
<tr>

<th><p style={{marginLeft:"15%"}}>#</p></th>
<th>Client</th>
<th>N téléphone</th>
<th>E-mail</th>
<th>Role</th>
<th>Nom de travail </th>
<th>etat</th>
<th>pack</th>
<th ><p style={{marginLeft:"50%"}}>fichier</p></th>

</tr>

{DataPerPage?.map((obj,index) => (

<tr className={obj?.etat==="en_cours"?"backnovo-c":"backnovo-c0"} >

<td className='tdwidth'><p style={{marginLeft:"15%"}}>{obj?.id}</p></td>
<td > <div className="row-c">
          
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj?.fullname}</p></div>
              </div>
              </td>
<td ><p className='txt02-c'>{obj?.phone}</p></td>
<td>{obj?.email}</td>
<td ><div className="txt02-s">{obj?.Role}</div></td>
<td >{obj?.name_work}</td>
<td >
{obj.etat==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'style={{color:"#05400A"}}>Payer</p></button></>
:<>{obj.etat==="Rejeter"?<button className='bnt02-c' style={{background:"#E66A6A"}}><p className='txtbnt02-c'style={{color:"#fff"}}>Retard</p></button>:
<>{obj.etat==="en_cours"?<button className='bnt02-c' style={{background:"#DCEEFB"}}><p className='txtbnt02-c'style={{color:"#05400A"}}>en attente</p></button>:<></>}</>}
</>}

  
  </td>
  <td >
    {obj?.pack}
  </td>
  <td >
  <Link to={"http://127.0.0.1:8080/uploads/"+obj?.file}><ReceiptSearch size="22" color="#222" style={{marginLeft:"50%",marginTop:"15%"}}/></Link>
  </td>

  <td className="more-avis">
                   <div  className="more-avis2">
                      <More
                      size="22"
                      color="#222222"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={()=>{handleClick(obj)}}
                      />
            </div>
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

<th><p style={{marginLeft:"15%"}}>#</p></th>
<th>Client</th>
<th>N téléphone</th>
<th>E-mail</th>
<th>Role</th>
<th>Nom de travail </th>
<th>etat</th>
<th>pack</th>
<th ><p style={{marginLeft:"50%"}}>fichier</p></th>

</tr>

{DataPerPage?.map((obj,index) => (

<tr className={obj?.etat==="en_cours"?"backnovo-c":"backnovo-c0"} >

<td className='tdwidth'><p style={{marginLeft:"15%"}}>{obj?.id}</p></td>
<td > <div className="row-c">
          
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj?.fullname}</p></div>
              </div>
              </td>
<td ><p className='txt02-c'>{obj?.phone}</p></td>
<td>{obj?.email}</td>
<td ><div className="txt02-s">{obj?.Role}</div></td>
<td >{obj?.name_work}</td>
<td >
{obj.etat==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'style={{color:"#05400A"}}>Payer</p></button></>
:<>{obj.etat==="Rejeter"?<button className='bnt02-c' style={{background:"#E66A6A"}}><p className='txtbnt02-c'style={{color:"#fff"}}>Retard</p></button>:
<>{obj.etat==="en_cours"?<button className='bnt02-c' style={{background:"#DCEEFB"}}><p className='txtbnt02-c'style={{color:"#05400A"}}>en attente</p></button>:<></>}</>}
</>}

  
  </td>
  <td >
    {obj?.pack}
  </td>
  <td >
  <Link to={"http://127.0.0.1:8080/uploads/"+obj?.file}><ReceiptSearch size="22" color="#222" style={{marginLeft:"50%",marginTop:"15%"}}/></Link>
  </td>

  <td className="more-avis">
                   <div  className="more-avis2">
                      <More
                      size="22"
                      color="#222222"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      />
            </div>
  </td>
</tr>

))}


</table>
        </div>
  
        </TabPanel>
        <TabPanel value={value} index={3}>
        <div className='row01-c'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
        <table>
<tr>

<th><p style={{marginLeft:"15%"}}>#</p></th>
<th>Client</th>
<th>N téléphone</th>
<th>E-mail</th>
<th>Role</th>
<th>Nom de travail </th>
<th>etat</th>
<th>pack</th>
<th ><p style={{marginLeft:"50%"}}>fichier</p></th>

</tr>

{DataPerPage?.map((obj,index) => (

<tr className={obj?.etat==="en_cours"?"backnovo-c":"backnovo-c0"} >

<td className='tdwidth'><p style={{marginLeft:"15%"}}>{obj?.id}</p></td>
<td > <div className="row-c">
          
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj?.fullname}</p></div>
              </div>
              </td>
<td ><p className='txt02-c'>{obj?.phone}</p></td>
<td>{obj?.email}</td>
<td ><div className="txt02-s">{obj?.Role}</div></td>
<td >{obj?.name_work}</td>
<td >
{obj.etat==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'style={{color:"#05400A"}}>Payer</p></button></>
:<>{obj.etat==="Rejeter"?<button className='bnt02-c' style={{background:"#E66A6A"}}><p className='txtbnt02-c'style={{color:"#fff"}}>Retard</p></button>:
<>{obj.etat==="en_cours"?<button className='bnt02-c' style={{background:"#DCEEFB"}}><p className='txtbnt02-c'style={{color:"#05400A"}}>en attente</p></button>:<></>}</>}
</>}

  
  </td>
  <td >
    {obj?.pack}
  </td>
  <td >
  <Link to={"http://127.0.0.1:8080/uploads/"+obj?.file}><ReceiptSearch size="22" color="#222" style={{marginLeft:"50%",marginTop:"15%"}}/></Link>
  </td>

  <td className="more-avis">
                   <div  className="more-avis2">
                      <More
                      size="22"
                      color="#222222"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      />
            </div>
  </td>
</tr>

))}


</table>
</div>
        </TabPanel>
        <TabPanel value={value} index={4}>
        <div className='row01-c'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
        <table>
<tr>

<th><p style={{marginLeft:"15%"}}>#</p></th>
<th>Client</th>
<th>N téléphone</th>
<th>E-mail</th>
<th>Role</th>
<th>Nom de travail </th>
<th>etat</th>
<th>pack</th>
<th ><p style={{marginLeft:"50%"}}>fichier</p></th>

</tr>

{DataPerPage?.map((obj,index) => (

<tr className={obj?.etat==="en_cours"?"backnovo-c":"backnovo-c0"} >

<td className='tdwidth'><p style={{marginLeft:"15%"}}>{obj?.id}</p></td>
<td > <div className="row-c">
          
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj?.fullname}</p></div>
              </div>
              </td>
<td ><p className='txt02-c'>{obj?.phone}</p></td>
<td>{obj?.email}</td>
<td ><div className="txt02-s">{obj?.Role}</div></td>
<td >{obj?.name_work}</td>
<td >
{obj.etat==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'style={{color:"#05400A"}}>Payer</p></button></>
:<>{obj.etat==="Rejeter"?<button className='bnt02-c' style={{background:"#E66A6A"}}><p className='txtbnt02-c'style={{color:"#fff"}}>Retard</p></button>:
<>{obj.etat==="en_cours"?<button className='bnt02-c' style={{background:"#DCEEFB"}}><p className='txtbnt02-c'style={{color:"#05400A"}}>en attente</p></button>:<></>}</>}
</>}

  
  </td>
  <td >
    {obj?.pack}
  </td>
  <td >
  <Link to={"http://127.0.0.1:8080/uploads/"+obj?.file}><ReceiptSearch size="22" color="#222" style={{marginLeft:"50%",marginTop:"15%"}}/></Link>
  </td>

  <td className="more-avis">
                   <div  className="more-avis2">
                      <More
                      size="22"
                      color="#222222"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      />
            </div>
  </td>
</tr>

))}


</table>
         </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
        <div className='row01-c'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
        <table>
<tr>

<th><p style={{marginLeft:"15%"}}>#</p></th>
<th>Client</th>
<th>N téléphone</th>
<th>E-mail</th>
<th>Role</th>
<th>Nom de travail </th>
<th>etat</th>
<th>pack</th>
<th ><p style={{marginLeft:"50%"}}>fichier</p></th>

</tr>

{DataPerPage?.map((obj,index) => (

<tr className={obj?.etat==="en_cours"?"backnovo-c":"backnovo-c0"} >

<td className='tdwidth'><p style={{marginLeft:"15%"}}>{obj?.id}</p></td>
<td > <div className="row-c">
          
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj?.fullname}</p></div>
              </div>
              </td>
<td ><p className='txt02-c'>{obj?.phone}</p></td>
<td>{obj?.email}</td>
<td ><div className="txt02-s">{obj?.Role}</div></td>
<td >{obj?.name_work}</td>
<td >
{obj.etat==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'style={{color:"#05400A"}}>Payer</p></button></>
:<>{obj.etat==="Rejeter"?<button className='bnt02-c' style={{background:"#E66A6A"}}><p className='txtbnt02-c'style={{color:"#fff"}}>Retard</p></button>:
<>{obj.etat==="en_cours"?<button className='bnt02-c' style={{background:"#DCEEFB"}}><p className='txtbnt02-c'style={{color:"#05400A"}}>en attente</p></button>:<></>}</>}
</>}

  
  </td>
  <td >
    {obj?.pack}
  </td>
  <td >
  <Link to={"http://127.0.0.1:8080/uploads/"+obj?.file}><ReceiptSearch size="22" color="#222" style={{marginLeft:"50%",marginTop:"15%"}}/></Link>
  </td>

  <td className="more-avis">
                   <div  className="more-avis2">
                      <More
                      size="22"
                      color="#222222"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      />
            </div>
  </td>
</tr>

))}


</table>
         </div>
        </TabPanel>
        <TabPanel value={value} index={6}>
        <div className='row01-c'>
        <Filterbar icon={  <Sort size="22" color="#222222"/> }nom="Trier par"/>
        <table>
<tr>

<th><p style={{marginLeft:"15%"}}>#</p></th>
<th>Client</th>
<th>N téléphone</th>
<th>E-mail</th>
<th>Role</th>
<th>Nom de travail </th>
<th>etat</th>
<th>pack</th>
<th ><p style={{marginLeft:"50%"}}>fichier</p></th>

</tr>

{DataPerPage?.map((obj,index) => (

<tr className={obj?.etat==="en_cours"?"backnovo-c":"backnovo-c0"} >

<td className='tdwidth'><p style={{marginLeft:"15%"}}>{obj?.id}</p></td>
<td > <div className="row-c">
          
              <div style={{marginTop:"3%"}}><p className='txt01-c'>{obj?.fullname}</p></div>
              </div>
              </td>
<td ><p className='txt02-c'>{obj?.phone}</p></td>
<td>{obj?.email}</td>
<td ><div className="txt02-s">{obj?.Role}</div></td>
<td >{obj?.name_work}</td>
<td >
{obj.etat==="Compléter"?
<><button className='bnt01-c'><p className='txtbnt01-c'style={{color:"#05400A"}}>Payer</p></button></>
:<>{obj.etat==="Rejeter"?<button className='bnt02-c' style={{background:"#E66A6A"}}><p className='txtbnt02-c'style={{color:"#fff"}}>Retard</p></button>:
<>{obj.etat==="en_cours"?<button className='bnt02-c' style={{background:"#DCEEFB"}}><p className='txtbnt02-c'style={{color:"#05400A"}}>en attente</p></button>:<></>}</>}
</>}

  
  </td>
  <td >
    {obj?.pack}
  </td>
  <td >
  <Link to={"http://127.0.0.1:8080/uploads/"+obj?.file}><ReceiptSearch size="22" color="#222" style={{marginLeft:"50%",marginTop:"15%"}}/></Link>
  </td>

  <td className="more-avis">
                   <div  className="more-avis2">
                      <More
                      size="22"
                      color="#222222"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      />
            </div>
  </td>
</tr>

))}


</table>
         </div>
        </TabPanel>
    </Box>
    </div>
    <Menu
              id="basic-menu"
              className="menu-avis"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
      
              <MenuItem className="menuitem-avis" onClick={confirm}>
              <TickCircle size="22" color="#626262"/>
                <span>
                  <p className="txtmenu-avis">Confirmer</p>
                </span>
              </MenuItem>
              <MenuItem
                className="menuitem-avis"
                onClick={Annuler}
              >          
               <CloseCircle size="22" color="#D64545" />
                <span>
                <p className="txtmenu-avis" style={{color:"#D64545"}}>Refuser</p>
                </span>
              </MenuItem>

            </Menu>
    <div className='page-c'>  
<div className="pagination1-c">

           <Pagination
                  count={NbPage}
                  shape="rounded"
                  className="pagination-shop"
                  page={current}
                  onChange={handlePagination}
                />

        </div>
        </div>

    </div>
  )
}

export default Listecommandes
