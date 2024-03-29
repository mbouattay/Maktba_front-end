import React, { useEffect, useState } from "react";
import "./Avis.css";
import { OutlinedInput } from "@mui/material";
import { More, ArrowCircleRight2, Edit, Trash } from "iconsax-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getAllAvisClient } from "../../../Store/Service/getAllAvisClient";
import { Link } from "react-router-dom";
import { supprimerAvis } from "../../../Store/Service/supprimerAvis";
import { toast } from "react-toastify";
import { ModifierAvis } from "../../../Store/Service/ModifierAvis";
import Pagination from "@mui/material/Pagination";

const Avis = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [op, setop] = React.useState(false);
  const [op2, setop2] = React.useState(false);
  const [idp ,setIdp] = useState()
  const [idavis ,setidavis] = useState()
  const [Nbstars ,setNbstars]=useState()
  const [commanter,setCommanter]=useState()
  const [refresh ,setrefresh] = useState()
  const Avis = useSelector((state) => state.AvisClient.AvisClient);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAvisClient(props?.user?.id));
  }, [refresh]);
  const changeAvis=()=>{
    const data={
      nbStart:Nbstars,
      commenter:commanter
    }
    ModifierAvis(idavis,data).then((response)=>{
      if(response.success===true){
        toast.success("votre avis Modifier avec success",{autoClose: 1000})
        setrefresh(true)
    }
      
    })
    setrefresh(false)
    setop(false);
    setAnchorEl(null);
  }
  const handleClick = (event,idp,idavis,nbStars,commanter) => {
    setAnchorEl(event.currentTarget);
    setIdp(idp)
    setidavis(idavis)
    setNbstars(nbStars)
    setCommanter(commanter)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClicke = () => {
    setop(true);
  };
  const handleClos = () => {
    setop(false);
    setAnchorEl(null);
  };
  const handleClos2 = () => {
    setop2(false);
    setAnchorEl(null);
  };

  const supprimerOneAvis=()=>{
    supprimerAvis(idavis).then((response)=>{
      if(response.success===true){
        toast.success("votre avis supprimer avec success",{autoClose: 1000})
        setrefresh(true)
    }
    })
    setrefresh(false)
    setop2(false);
    setAnchorEl(null);
    

  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    width: "544px",
    height: "563px",
    boxShadow:
      "2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)",
    borderRadius: "8px",
    p: 4,
  };
  const stylee = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    width: "544px",
    height: "284px",
    boxShadow:
      "2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)",
    borderRadius: "8px",
    p: 4,
  };
  const items =4;
  const [current,setCurrent]=useState(1)
  const NbPage=Math.ceil(Avis?.length/items);
  const startIndex=(current -1)*items;
  const endIndex=startIndex+items;
  const DataPerPage=Avis?.slice(startIndex,endIndex)
  function handlePagination (event,page) {
    setCurrent(page)
  }     

  return (
    <div className="avis">
      <div className="col1-avis">
        <div>
          <p className="txt1-avis">Mes avis</p>
        </div>
        <div>
          <OutlinedInput
            className="input-avis"
            placeholder="Rechercher l ID de commande, larticle"
          />
        </div>
        <div>
          <table>
            <tr>
              <th>
                <div style={{ marginLeft: "-6%" }}>Articles</div>
              </th>
              <th>Date</th>
              <th>Score</th>
              <th>
                <div style={{ marginLeft: "10%" }}>Commentaire</div>
              </th>
            </tr>

            {DataPerPage?.map((obj) => (
              <tr className="tr-avis">
                <td>
                  <div className="row-avis">
                <img src={"http://127.0.0.1:8080/uploads/"+obj.produitlabrairie?.imagelibrairies?.[0]?.name_Image} className="img1-avis" />
                  <div style={{marginTop:"4%"}}>{obj.produitlabrairie?.titre}</div>
                  </div></td>
                <td><div>{obj.createdAt}</div></td>
                <td>
                <div className="obj-nbStart">
                <Rating
                    name="read-only"
                    value={obj.nbStart}
                    readOnly
                    size="small"
                    className="stars"
                  />
                  </div>
           
                </td>
                <td className="tabcom-avis">
                 <div className="divcommtxt-avis"> <p className="commtxt-avis"> {obj.commenter} </p></div>
                </td>
                <br />
                <br />
                <td>
                  <div className="more-avis">
                    <More
                      size="22"
                      color="#222222"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(e)=>handleClick(e,obj?.produitlabrairie?.id,obj.id,obj.nbStart,obj.commenter)}
                    />
                  </div>
                </td>
              </tr>
            ))}

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
              <MenuItem className="menuitem-avis" onClick={handleClose}>
                <ArrowCircleRight2 size="22" color="#222222" />
                <span>
                   <Link to={"/Detailproduit/"+idp} className="txtmenu-avis">Aller au produit</Link>
                </span>
              </MenuItem>
              <MenuItem className="menuitem-avis" onClick={handleClicke}>
                <Edit size="22" color="#222222" />
                <span>
                  <p className="txtmenu-avis">Modifier</p>
                </span>
              </MenuItem>
              <MenuItem
                className="menuitem-avis"
                onClick={() => {
                  setop2(true);
                }}
              >
                <Trash size="22" color="#222222" />
                <span>
                  <p className="txtmenu-avis">Supprimer</p>
                </span>
              </MenuItem>
            </Menu>
          </table>
        </div>
      </div>
      <Modal
        open={op}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClos}
      >
        <Box sx={style}>
          <div className="container-modal">
            <div className="flex-end">
              {" "}
              <div>
                {" "}
                <i class="fa fa-close" onClick={handleClos}></i>
              </div>
            </div>

            <div>
              <h2 style={{ textAlign: "center" }}>Modifier votre avis</h2>
            </div>
            <div className="boxavis-pro">
              <div>
                <Rating
                  className="reting1"
                  value={Nbstars}
                  style={{ fontSize: "4.5em" }}
                  onChange={(e)=>setNbstars(e.target.value)}
                />
              </div>
              <div>
                <p className="txtmodalavis-pro2"> Commentaire:</p>
              </div>
              <div>
                
               
                  <OutlinedInput
                   className="txtmodalavis-pro"
                    placeholder= {commanter}
                    onChange={(e)=>{setCommanter(e.target.value)}}
                  />
           
              </div>
              <div className="minirow-page4">
                <button onClick={handleClos} className="bnt3-page">
                  <p className="txtbnt3-page">Annuler</p>
                </button>
                <button className="bnt4-page" onClick={changeAvis}>
                  <p className="txtbnt4-page">Confirmer</p>
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={op2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClos}
      >
        <Box sx={stylee}>
          <div className="container-modal">
            <div className="flex-end">
              {" "}
              <div>
                {" "}
                <i class="fa fa-close" onClick={handleClos2}></i>
              </div>
            </div>
            <br />
            <div>
              <p className="txtmodal2-page4">
                Etes-vous sûr de vouloir supprimer cette avis?
              </p>
            </div>

            <div className="minirow2-page4">
              <button onClick={handleClos2} className="bnt3-page">
                <p className="txtbnt3-page4">Annuler</p>
              </button>
              <button className="bnt40-page4" onClick={supprimerOneAvis}>
                <p className="txtbnt40-page">Supprimer</p>
              </button>
            </div>
          </div>
        </Box>
      </Modal>
      <div className="pagination1-avis">
<br/>
<Pagination
       count={NbPage}
       shape="rounded"
       className="pagination-avis"
       page={current}
       onChange={handlePagination}
     />

</div>
    </div>
  );
};

export default Avis;
