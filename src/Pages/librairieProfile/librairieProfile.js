import React, { useEffect,useState } from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./librairieProfile.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Card from "../../components/card-produit/Card";
import Filter from "../../components/filter/Filter";
import Trifilter from "../../components/tri-filter/Trifilter";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getinfolibrairie } from "../../Store/Service/librairieInfo";
import { getAllProduitBylibrairie } from "../../Store/Service/AllProduitBylibrairie";


const LibrairieProfile = () => {

  const {id}=useParams()
  const dispatch = useDispatch();
  const infolib=useSelector(state =>state.infoLibrairie.info)
  const produit=useSelector(state => state.AllProduitBylibrairie.produitlib)
  useEffect(()=>{
    dispatch(getinfolibrairie(id))
    dispatch(getAllProduitBylibrairie(id))
  },[dispatch])
  const items =8;
  const [current,setCurrent]=useState(1)
  const NbPage=Math.ceil(produit.length/items);
  const startIndex=(current -1)*items;
  const endIndex=startIndex+items;
  const DataPerPage=produit.slice(startIndex,endIndex)
  function handlePagination (event,page) {
    setCurrent(page)
  }

  return (
    <>
      <div className="profile">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
          className="Profile_Librairie-info"
          style={{ "margin": "135px 0 0 126px","background":"#F7F7F7"," border-radius": "16px"," height": "294px", "width": "1170px"}}
        >
          <img src={"http://127.0.0.1:8080/uploads/"+infolib.imageStore} className="imageProfile" />
          <Grid
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="profileInfo"
          >
            <h1 className="nomLibrairie">{infolib.nameLibrairie}</h1>
            <p className="addresse">
              {infolib.adresse}
            </p>
            <p className="telephone">+216 {infolib.telephone}</p>
            <p className="email">{infolib.emailLib}</p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
              className="reseaux_sociaux"
            >
              <button>Poser une question</button>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className="facebook"
              >
                <Link to={"https://"+infolib.facebook} className="LinkText">
                  Facebook
                </Link>
                <OpenInNewIcon className="iconLink" />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className="facebook"
              >
                <Link to={"https://"+infolib.instagram}  className="LinkText">
                  Instagram
                </Link>
                <OpenInNewIcon className="iconLink" />
              </Grid>
            </Box>
          </Grid>
        </Box>
        <div className="liste_des_Articles">
          <div className="titre1">
            <h1>Liste des articles</h1>
          </div>
          <Grid container direction="row" style={{ height: "auto" }}>
            <div className="filter">
              <Filter />
            </div>
            <div className="section_Produit">
              <div className="triFilter">
              <Trifilter total={produit.length}/>
              </div>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                className="produitsLab"
              >
                {DataPerPage.map((obj) => (
                  <div className="container">
                    <Card
                       prix={obj.prix}
                       titre={obj.titre}
                       noml={obj?.labrairie?.nameLibrairie}
                       idl={infolib?.id}
                       totalavis={obj?.avisProduitlibraires?.[0]?.total_avis}
                       maxAvis={obj?.avisProduitlibraires?.[0]?.max_nb}
                       idp={obj.id}
                       logoL={obj?.labrairie?.imageStore}
                       imgp={obj.imagelibrairies?.[0]?.name_Image}
                    />
                  </div>
                ))}
              </Grid>
              <div className="Pagination">
              <Pagination
                  count={NbPage}
                  shape="rounded"
                  className="pagination-shop"
                  page={current}
                  onChange={handlePagination}
        />
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default LibrairieProfile;
