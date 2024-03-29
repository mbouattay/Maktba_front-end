import React, { useEffect, useState } from "react";
import { InputAdornment, OutlinedInput, debounce } from "@mui/material";
import { AddCircle, ArrowCircleLeft } from "iconsax-react";
import "./categorie.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { SearchNormal1 } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { getNbProduitlibBycategorie } from "../../../Store/Service/nbProduitLibByCategoorie";
import Ajouter from "../../ajoutprod-vender/Ajouter";
import Cardlisteprod from "../../card-produit/cardlisteprod/cardlisteprod";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllProduitCataloge } from "../../../Store/Service/allProduitCataloge";
import { getOneProdCataloge } from "../../../Store/Service/OneProdCataloge";
import { Addprod } from "../../../Store/Service/addProd";
import { toast } from "react-toastify";

const data = [
  { id: "#0123456", nom: "COMPAS AVEC CRAYON 2506 INV" },
  { id: "#0123456", nom: "COMPAS AVEC CRAYON 2506 INV" },
  { id: "#0123456", nom: "COMPAS AVEC CRAYON 2506 INV" },
  { id: "#0123456", nom: "COMPAS AVEC CRAYON 2506 INV" },
  { id: "#0123456", nom: "COMPAS AVEC CRAYON 2506 INV" },
  { id: "#0123456", nom: "COMPAS AVEC CRAYON 2506 INV" },
  { id: "#0123456", nom: "COMPAS AVEC CRAYON 2506 INV" },
  { id: "#0123456", nom: "COMPAS AVEC CRAYON 2506 INV" },
  { id: "#0123456", nom: "COMPAS AVEC CRAYON 2506 INV" },
  { id: "#0123456", nom: "COMPAS AVEC CRAYON 2506 INV" },
  { id: "#0123456", nom: "COMPAS AVEC CRAYON 2506 INV" },
  { id: "#0123456", nom: "COMPAS AVEC CRAYON 2506 INV" },
];
const Categorie = (props) => {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List>
        <ListItem>
          <div className="col5487-lst">
            <div
              className="rowbox-int"
              style={{ cursor: "pointer" }}
              onClick={toggleDrawer(anchor, false)}
            >
              <ArrowCircleLeft size="25" color="#9E9E9E" />
              <div>
                <p className="txtbox-int">Retourner</p>
              </div>
            </div>

            <div>
              <p className="txtliste-lit">{Oneproduit.titre}</p>
            </div>
            <div>
              <p className="txtliste-lit2">#{Oneproduit.id}</p>
            </div>
            <div>
              <Swiper spaceBetween={50} slidesPerView={3}>
                <img src={"http://127.0.0.1:8080/uploads/"+Oneproduit.imageCataloges?.[0].name_Image} className="imglist-lst2" />
              </Swiper>
            </div>
            <div>
              <p className="txtliste-lit">Description:</p>
            </div>
            <div>
              <p className="txtliste-lit3">
               {Oneproduit.description}
              </p>
            </div>

            <div>

            <OutlinedInput
                className="input-listecat"
                placeholder={"Ajoute Prix produit"}
                onChange={handleInputChange("prix")}
                value={prod.prix}
              />
            </div>
            <div>

<OutlinedInput
    className="input-listecat"
    placeholder={"Ajoute Qte produit"}
    onChange={handleInputChange("qte")}
    value={prod.qte}
  />
</div>
<div className="center-cat">
<button className="bnt02-ajout" onClick={addProduit}>
            <p className="txtbnt02-ajout">Ajoute Produit</p>
          </button>

            </div>
          </div>
        </ListItem>
      </List>
    </Box>
  );

  const dispatch=useDispatch();
  const produit = useSelector(
    (state) => state.prodCataloge.produCataloge
  );
  const Oneproduit = useSelector(
    (state) => state.OneProdCataloge.Oneprod
  );
  const filtered = produit.filter(item => item.etat === 'visible');

  const delayedDispatch = debounce(() => {
    dispatch(getAllProduitCataloge());
  }, 500); 
  
  useEffect(() => {
    delayedDispatch();
  
   
  }, []);

  const theme = useTheme();
  const [state, setState] = React.useState({
    right: false,
  });
  const [nextpage, setnextpage] = useState(true);
  const [prod, setprod] = useState({prix:"",qte:""});


  const produitbycategorie = useSelector(
    (state) => state.NbproduitLib.Nbproduit
  );
  useEffect(() => {
    dispatch(getNbProduitlibBycategorie(props.user?.id));
  }, []);
  const items = 8;
  const [current, setCurrent] = useState(1);
  const NbPage = Math.ceil(produitbycategorie.length / items);
  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items;
  const DataPerPage = produitbycategorie.slice(startIndex, endIndex);
  function handlePagination(event, page) {
    setCurrent(page);
  }

  const toggleDrawer = (anchor, open,id) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    dispatch(getOneProdCataloge(id))
  
  };
  const handleInputChange = (field) => {
    return (e) => {
      setprod((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
  };


  const addProduit=()=>{
    if(prod.prix.length!==0 &&prod.qte.length!==0 &&!isNaN(prod.prix) &&!isNaN(prod.qte))
    {
      const data={
        titre:Oneproduit.titre,
        description:Oneproduit.description,
        image:Oneproduit.imageCataloges,
        prix:prod.prix,
        qte:prod.qte,
        categorieId:Oneproduit.categorieId,
        SouscategorieId:Oneproduit.SouscategorieId,
        labrairieId:props.user?.id
  
      }
      Addprod(data).then((response)=>{
        if(response.success===true){
          toast.success("produit bien ajoute", { autoClose: 1000 })
          setprod({prix:"",qte:""})
  
         setState({ ...state, ["right"]: false })
        }
      })
    }else{ toast.error("remplir votre chomp OR verify  votre chomp  Svp !!", { autoClose: 1000 })}

  }

return (
    <>
      {nextpage ? (
        <div className="pages-container1">
          <div className="header-page-categorie">
            <div>
              {" "}
              <h1 className="title-page-categorie">Liste de produits</h1>
            </div>
            <button
              className="btn-suggestion"
              onClick={() => {
                setnextpage(false);
              }}
            >
              Faire une suggestion
            </button>
          </div>
          <div className="box1-categorie">
            <div className="header-box1">
              <OutlinedInput
                className="search-inpute2"
                placeholder={"Rechercher l'ID de commande, l'article"}
                endAdornment={
                  <InputAdornment position="end">
                    <SearchNormal1 size="19" color="#B1B1B1" />
                  </InputAdornment>
                }
              />
              <div className="pagination-VenderCategorie">
                <div className="rowlisteprod">
                  <select className="select-1-0">
                    <option value={10}> Catégories</option>
                  </select>

                  <select className="select-1-0">
                    <option value={10}>Sous-catégories</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="grid-container">
            {produit?.map((obj) => (
              <div class="grid-item" onClick={toggleDrawer("right", true,obj.id)}>
                <Cardlisteprod id={obj.id} titre={obj.titre} img={obj.imageCataloges?.[0]?.name_Image}/>
              </div>
            ))}

            <div>
              <React.Fragment>
                <Drawer anchor={"right"} open={state["right"]} width="150">
                  {list("right")}
                </Drawer>
              </React.Fragment>
            </div>
          </div>
          <div className="page-listev">
            <Pagination
              count={NbPage}
              shape="rounded"
              className="pagination-shop"
              page={current}
              onChange={handlePagination}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="box2-int">
            <div
              className="rowbox-int"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setnextpage(true);
              }}
            >
              <ArrowCircleLeft size="25" color="#9E9E9E" />
              <div>
                <p className="txtbox-int">Retourner</p>
              </div>
            </div>

            <Ajouter titre="Faire une suggestion" id={props.user?.id} />
          </div>
        </>
      )}
    </>
  );
};
export default Categorie;
