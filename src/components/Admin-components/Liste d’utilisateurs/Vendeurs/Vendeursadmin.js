import React, { useEffect,useState } from "react";
import { Avatar, InputAdornment, OutlinedInput} from "@mui/material";
import'./Vendeurs.css'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Pagination from "@mui/material/Pagination";
import Typography from '@mui/material/Typography';
import { Trash,CloseCircle} from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from "react-router-dom";
import { TickSquare, More, FilterAdd, ArrowCircleRight2, Edit } from "iconsax-react";

import { toast } from "react-toastify";

import { getAlluser } from "../../../../Store/Service/getAlluser.js";
import { bloqueuser } from "../../../../Store/Service/actionuser.js";

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
const Vendeursadmin  = (props) => {
    const [op, setop] = React.useState(false);
    const [op2, setop2] = React.useState(false);
    const [iduser ,setIduser] = useState()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const Alluser = useSelector(
        (state) => state.getAlluser.users
      );
      const handleClose = () => {
        setAnchorEl(null);
      };
      useEffect(() => {
        dispatch(getAlluser())
      }, []);
const bloquecl=()=>{
    bloqueuser(iduser).then((res)=>{
        dispatch(getAlluser())
        setAnchorEl(null);
        toast.success("c'est client a bloque avec success", {autoClose: 1000, });
    })
}
const CLINET = Alluser.filter(product => 
    product?.role?.toLowerCase()?.includes("labrairie")
  );

  const Activ = CLINET.filter(product => 
    product?.etatCompte?.toLowerCase()?.includes("active")
  );
  const blog = CLINET.filter(product => 
    product?.etatCompte?.toLowerCase()?.includes("bloque")
  );


  return (
    <div className="pages-container1">

    <div className="header-ven">
   <div>   <p className="title-ven">Liste de Vendeurs</p></div>
    <div>
  

      </div>

    </div>


    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: "#222" } }}>
       <Tab label={<p className="txttabs-c">Tout</p>} {...a11yProps(0)} />
        <Tab label={<p className="txttabs-c">Actif</p>} {...a11yProps(1)} />
        <Tab label={<p className="txttabs-c">Bloquée</p>} {...a11yProps(2)} />
      </Tabs>
    </Box>
 

    <TabPanel value={value} index={0}>  
    <table>
      <tr>
        <th>#</th>
        <th>Nom</th>
        <th>Téléphone</th>
        <th>Email adresse</th>
        <th>Derniére Activité</th>
        <th>Staut</th>

      </tr>
 {
CLINET.map((obj, index) => (
<tr>
  <td className="tdwidth">{obj.id}</td>
  <td className="tdwidth02">
    <div className="row-int01">

    <Avatar src={"http://127.0.0.1:8080/uploads/"+obj?.avatar} className="img512-ad" />
     <div style={{ marginTop: "3%" }}>
        <p className="txt01-int">{obj.fullname}</p>
      </div>
    </div>
  </td>
  <td className="tdwidth1">
    <p className="txt02-int">{obj?.telephone}</p>
  </td>
  <td className="tdwidth10">{obj?.email}</td>

  <td className="tdwidth1">{obj?.createdAt}</td>
  <td className="tdwidth1">{ obj?.etatCompte==="active"?
  <div className="stats-admin1">{obj?.etatCompte }</div> 
  :
  <div className="stats-admin2"><p>{obj?.etatCompte}</p></div> 
    }
     </td>
<td>
<div>
 <More
 size="22"
 color="#222222"
 aria-controls={open ? "basic-menu" : undefined}
 aria-haspopup="true"
 aria-expanded={open ? "true" : undefined}
 className="more-ad"
 onClick={(e)=>{setAnchorEl(e.currentTarget);setIduser(obj.id)}}
/>


 </div>
</td>
</tr>
))
 }

    </table>

   
    </TabPanel>
    </Box>

    <TabPanel value={value} index={1}>  
    <table>
      <tr>
        <th>#</th>
        <th>Nom</th>
        <th>Téléphone</th>
        <th>Email adresse</th>
        <th>Derniére Activité</th>
        <th>Staut</th>

      </tr>
 {
Activ.map((obj, index) => (
<tr>
  <td className="tdwidth">{obj.id}</td>
  <td className="tdwidth02">
    <div className="row-int01">

    <Avatar src={"http://127.0.0.1:8080/uploads/"+obj?.avatar} className="img512-ad" />
     <div style={{ marginTop: "3%" }}>
        <p className="txt01-int">{obj.fullname}</p>
      </div>
    </div>
  </td>
  <td className="tdwidth1">
    <p className="txt02-int">{obj?.telephone}</p>
  </td>
  <td className="tdwidth10">{obj?.email}</td>

  <td className="tdwidth1">{obj?.createdAt}</td>
  <td className="tdwidth1">{ obj?.etatCompte==="active"?
  <div className="stats-admin1">{obj?.etatCompte }</div> 
  :
  <div className="stats-admin2"><p>{obj?.etatCompte}</p></div> 
    }
     </td>
<td>
<div>
 <More
 size="22"
 color="#222222"
 aria-controls={open ? "basic-menu" : undefined}
 aria-haspopup="true"
 aria-expanded={open ? "true" : undefined}
 className="more-ad"
 onClick={(e)=>{setAnchorEl(e.currentTarget);setIduser(obj.id)}}
/>


 </div>
</td>
</tr>
))
 }

    </table>
 </TabPanel>
 <TabPanel value={value} index={2}>  
    <table>
      <tr>
        <th>#</th>
        <th>Nom</th>
        <th>Téléphone</th>
        <th>Email adresse</th>
        <th>Derniére Activité</th>
        <th>Staut</th>

      </tr>
 {
blog.map((obj, index) => (
<tr>
  <td className="tdwidth">{obj.id}</td>
  <td className="tdwidth02">
    <div className="row-int01">

    <Avatar src={"http://127.0.0.1:8080/uploads/"+obj?.avatar} className="img512-ad" />
     <div style={{ marginTop: "3%" }}>
        <p className="txt01-int">{obj.fullname}</p>
      </div>
    </div>
  </td>
  <td className="tdwidth1">
    <p className="txt02-int">{obj?.telephone}</p>
  </td>
  <td className="tdwidth10">{obj?.email}</td>

  <td className="tdwidth1">{obj?.createdAt}</td>
  <td className="tdwidth1">{ obj?.etatCompte==="active"?
  <div className="stats-admin1">{obj?.etatCompte }</div> 
  :
  <div className="stats-admin2"><p>{obj?.etatCompte}</p></div> 
    }
     </td>
<td>
<div>
 <More
 size="22"
 color="#222222"
 aria-controls={open ? "basic-menu" : undefined}
 aria-haspopup="true"
 aria-expanded={open ? "true" : undefined}
 className="more-ad"
 onClick={(e)=>{setAnchorEl(e.currentTarget);setIduser(obj.id)}}
/>


 </div>
</td>
</tr>
))
 }

    </table>
 </TabPanel>
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
              <MenuItem className="menuitem-avis" onClick={bloquecl}>
                <CloseCircle size="22" color="#626262" />
                <span className="spn-ad">
                Bloquer
                </span>
              </MenuItem>
  
              <MenuItem
                className="menuitem-avis"
                onClick={() => {
                  setop2(true);
                }}
              >
                <Trash size="22" color="#D64545" />
                <span>
                  <p className="spn-ad2">Suprimer</p>
                </span>
              </MenuItem>
            </Menu>
  </div>

  )
}

export default Vendeursadmin 
