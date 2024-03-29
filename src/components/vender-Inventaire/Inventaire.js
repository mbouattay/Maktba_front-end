import React, { useEffect,useState } from "react";
import "./Inventaire.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Listevender from "../vender-liste/Listevender";
import { Trash, ExportCircle, ArrowCircleLeft } from "iconsax-react";
import Ajouter from "../ajoutprod-vender/Ajouter";
import Avis from "../Vender-avis/Avis";
import { supprimerprod } from "../../Store/Service/supprimerprod";


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Inventaire = (props) => {
  const [value, setValue] = useState(0);
  const [nextpage, setnextpage] =useState(true);
  const [produit, setproduit] = useState({titre:"",prix:"",qte:"",categorieId:"1",idprod:"",op:false,imagelibrairies:{},prix_en_Solde:"",remise:"",description:"",Allid:[]});

  const handleDataFromChild = (data) => {
    setproduit(data);
  
  };
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== value));
    }
  };



  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };
  const changepage = () => {
    setnextpage(false);
  };
  
  const supall=()=>{
    supprimerprod({"ids":selectedCheckboxes}).then((response)=>{
       window.location.reload() 
      
      })
  }

  
  return (
    <>
      {nextpage ? (
        <div className="row-int">
          <div className="row3-int">
            <div>
              <p className="txt-int">Inventaire</p>
            </div>
            <div className="row4-int">
              <div style={{ cursor: "pointer" }} onClick={supall}>
      
                <Trash size="24" color="#E66A6A" />
                <p className="txt3-int">Supprimer</p>
              </div>
              <div style={{ cursor: "pointer" }}>
                <ExportCircle size="24" color="#515151" />
                <p className="txt20-int">Exporter</p>
              </div>
            </div>
          </div>
          <div className="box-int">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  TabIndicatorProps={{ style: { background: "#F7D070" } }}
                >
                  <Tab
                    label={<p className="txttabs-int">Liste de produits</p>}
                    {...a11yProps(0)}
                  />
                  <Tab
                    label={<p className="txttabs-int01">Les avis</p>}
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <Listevender value={value}      selectedCheckboxes={selectedCheckboxes}     handleCheckboxChange={handleCheckboxChange}onData={handleDataFromChild} setnextpage={()=>{setnextpage(false)}} id={props.user?.id}/>
              <Avis value={value} id={props.user?.id} />
            </Box>
          </div>
       
        </div>
      ) : (
        <div className="box2-int">
          <div
            className="rowbox-int"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setnextpage(true);
              setproduit({titre:"",prix:"",qte:"",categorieId:"1",idprod:"",op:false})
            }}
          >
            <ArrowCircleLeft size="25" color="#9E9E9E" />
            <div>
              <p className="txtbox-int">Retourner</p>
            </div>
          </div>
          {produit.op? <Ajouter titre="Modifier produit" prod={produit} />
                 :  <Ajouter titre="Faire une suggestion" id={props.user?.id}/>
          }
    
        
        </div>
      )}
    </>
  );
};

export default Inventaire;
