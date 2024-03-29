import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import { Grid } from "@mui/material";
import {
  Headphone,
  TruckFast,
  TicketDiscount,
  ShieldTick,

} from "iconsax-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import img1 from "../../assets/img1-home.png";
import img2 from "../../assets/img2-home.png";
import img3 from "../../assets/img3-home.png";
import img4 from "../../assets/img4-home.png";
import img5 from "../../assets/img5-home.png";
import img6 from "../../assets/img6-home.png";
import img7 from "../../assets/img7-home.png";
import imgp1 from "../../assets/imgp1.png";
import imgp2 from "../../assets/imgp2.png";
import imgp3 from "../../assets/imgp3.png";
import imgp4 from "../../assets/imgp4.png";
import imgp5 from "../../assets/imgp5.png";
import imgp6 from "../../assets/imgp.png";
import imgp7 from "../../assets/imgp8.png";
import Card from "../../components/card-produit/Card";
import { useNavigate} from "react-router-dom";

import Cartclient from "../../components/cartclient-home/Cartclient";
import Cart_client from "../../components/cart-client/cart-client";
import Cart_contact from "../../components/cart-contact/cart_contact";
import Boxabout from "../../components/box-about/Boxabout";
import Cart from "../../components/Cartc-home/Cart";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduitlibrairie } from "../../Store/Service/AllProduitShope";
const Home = () => {
  const navigate = useNavigate();

  const tab = [
    {
      icon: <Headphone size="22" color="#222222" variant="Bold" />,
      desc: "24/7 Support",
    },
    {
      icon: <TruckFast size="22" color="#222222" variant="Bold" />,
      desc: "Livraison express",
    },
    {
      icon: <TicketDiscount size="22" color="#222222" variant="Bold" />,
      desc: "Prix exclusif",
    },
    {
      icon: <ShieldTick size="22.0" color="#222222" variant="Bold" />,
      desc: "Paiement sécurisé",
    },
  ];

  const cat = [
    { img: img1, nom: "Scolaire" },
    { img: img2, nom: "Para-scolaires" },
    { img: img3, nom: "Outils informatiques" },
    { img: img4, nom: "Divers" },
    { img: img5, nom: "Jeux educatifs" },
  ];

  const clients = [
    {
      nom: "Cooper Ekstrom Bothman",
      des: "J'ai été agréablement surprise par la qualité de la peinture Gouache pour les projets scolaires de mon fils.",
      prix:15,
      titre:"bilcar",
      noml:"anoir maktaba", 
      id:7,
      imgp:"image-1684855257453.png"
    },
    {
      nom: "Cooper Ekstrom Bothman",
      des: "J'ai été agréablement surprise par la qualité de la peinture Gouache pour les projets scolaires de mon fils.",
      prix:2,
      titre:"9lam",
      noml:"elRahma",
      id:"7",
      imgp:"image-1684945195823.png"
        },
    {
      nom: "Cooper Ekstrom Bothman",
      des: "J'ai été agréablement surprise par la qualité de la peinture Gouache pour les projets scolaires de mon fils.",
      prix:1,
      titre:"mastra",
      noml:"elRahma",
      imgp:"image-1685222711933.png"
    },
  ];


  const bart=[{img:  <img src={imgp5} />},{img:  <img src={imgp1} />},{img:  <img src={imgp2} />},{img:  <img src={imgp3} />},{img:  <img src={imgp4} />},{img:  <img src={imgp5} />},{img:  <img src={imgp6} />}]
  const dispatch=useDispatch()
  const produitShope=useSelector(state=> state.AllProduitShope.produitShope)
  useEffect(()=>{
    dispatch(getAllProduitlibrairie())
},[])
  return (
    <div>
 
      <div className="group-home ">
    <div>
    <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap="3em"
        >
          <Grid item>
            <div className="home">
              <div className="home-cont">
              <div>
              <Grid container direction="column" spacing={6}>
                  <Grid item>
                    <p className="txt1-home">
                      L'univers de fournitures scolaires
                    </p>
                  </Grid>
                  <Grid item>
                    <p className="txt2-home">
                      Découvrez ce qui peut tenir dans votre trousse !
                    </p>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={6}
                    >
                      <Grid item>
                        <div className="box2-home">
                          {tab.map((obj) => (
                            <div>
                              <div className="col-home">
                                <div className="circule">
                                  <div className="cont-circule">{obj.icon}</div>
                                </div>
                                <p className="txt3-home">{obj.desc}</p>
                                <p className="txt4-home">Contactez-nous</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
               </div>
              </div>
            </div>
          </Grid>
          <div className="brr-home"></div>
          <div className="grp3-home">
            <Grid item>
              <div>
                <div className="col3-hom">
                  <div>
                    <p className="txt5-home">Catégories</p>
                  </div>
                  <div>
                    <div className="row2-hom">
                      {cat.map((obj) => (
                        <div>
                          <div className="col4-hom">
                            <img src={obj.img} className="img-home" />
                            <div>
                              <p className="txt8-home">{obj.nom}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item>
              <div>
                <div className="col3-hom">
                  <div>
                    <p className="txt6-home">Actualités</p>
                  </div>
                  <div>
                    <Grid item style={{ marginLeft: "-165px",gap:"10em" }}>
                      <div style={{ width: "1000px" }}>
                        <Swiper
                          freeMode={true}
                          grabCursor={true}
                          spaceBetween={-900}
                          modules={[FreeMode]}
                          style={{ width: "1500px",gap:"10em" }}
                        >
                          <SwiperSlide>
                            <img src={img6} className="img2-home" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={img7} className="img2-home" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src={img7} className="img2-home" />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item>
              <div>
                <div className="col3-hom">
                  <div>
                    <div>
                      <p className="txt-home">Equipez-vous d'indispensables</p>
                    </div>
                  </div>
                  <Grid item style={{marginLeft:"-103px"}}>
            <div style={{width:"1000px"}} > 
            <Swiper
              freeMode={true}
              grabCursor={true}
              spaceBetween={-1200}
              modules={[FreeMode]}
              
               style={{width:"1500px"}} 
            >
              {produitShope.map((obj,key) => (
                <SwiperSlide>
                <Grid item key={key}> 
                <Card
                     prix={obj?.prix}
                     titre={obj?.titre}
                     noml={obj?.labrairie?.nameLibrairie}
                     idl={obj?.labrairie?.id}
                     totalavis={obj?.avisProduitlibraires?.[0]?.total_avis}
                     maxAvis={obj?.avisProduitlibraires?.[0]?.max_nb}
                     idp={obj?.id}
                     logoL={obj.labrairie?.imageStore}
                     imgp={obj.imagelibrairies?.[0]?.name_Image}
                     etat={obj?.etat}
                     prix_en_Solde={obj?.prix_en_Solde}
                     dateG={obj?.createdAt}
                     remise={obj?.remise}
                     qte={obj?.qte}
                            />
                  
                </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
               
        </Grid>
                 
                </div>
              </div>
            </Grid>
            <Grid item>
              <div>
                <div className="col3-hom">
                  <div>
                    <div>
                      {produitShope?.[0]?.etat === "promition"?

<p className="txt-home">Promotions pour vous!</p>
:""
                      }
                   
                    </div>
                  </div>
                  <Grid item style={{marginLeft:"-103px"}}>
            <div style={{width:"1000px"}} > 
            <Swiper
              freeMode={true}
              grabCursor={true}
              spaceBetween={-1200}
              modules={[FreeMode]}
              
               style={{width:"1500px"}} 
            >
              {produitShope.filter((product) => {
    return product.etat === "promition";
  }).map((obj,key) => (
                <SwiperSlide>
                <Grid item key={key}> 
                <Card
                              prix={obj.prix}
                              titre={obj.titre}
                              noml={obj.labrairie?.nameLibrairie}
                              idl={obj.labrairie?.id}
                              totalavis={obj?.avisProduitlibraires?.[0]?.total_avis}
                              maxAvis={obj?.avisProduitlibraires?.[0]?.max_nb}
                              idp={obj.id}
                              logoL={obj.labrairie?.imageStore}
                              imgp={obj.imagelibrairies?.[0]?.name_Image}
                            />
                </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
               
        </Grid>
                </div>
              </div>
            </Grid>

            <Grid item>
              <div className="bg2-home">
                <div>
                  <p className="txt10-home">Promotions</p>
                </div>
                <div>
                  <p className="txt11-home">Découvrez toutes les promotions</p>
                </div>
                <div>
                  <button className="bnt10-home" onClick={()=>{navigate("/Shop")}}>
                    <p className="txt12-home">Je découvre</p>
                  </button>
                </div>
              </div>
            </Grid>

            <Grid item>
              <div className="col3-hom">
                <div>
                  <div>
                    <p className="txt5-home">
                      Nos clients continuent de parler!
                    </p>
                  </div>
                </div>
                <div className="cart2-home">
                <Swiper
              freeMode={true}
              grabCursor={true}
             
              
               style={{width:"1100px"}} 
            >
                {clients.map((obj,key) => (
                <SwiperSlide>
                <Grid item key={key}> 

                <Cartclient
                  prixprod={obj.prix}
                  noml={obj.noml}
                  nomprod={obj.nom}
                  nomclinet={obj.nom}
                  descriptionclient={obj.des}
                  imgp={obj.imgp}
                />
                </Grid>
                </SwiperSlide>
              ))}
              </Swiper>
                </div>
             
             
              </div>
            </Grid>

            <Grid item>
              <div className="col30-hom">
                <div>
                  <div>
                    <p className="txt5-home">
                      Les marques des non partenaire
                    </p>
                  </div>
                </div>
                <div className="rowimg0-home">
            
                
                  <div style={{width:"1000px"}} > 
                  <Swiper
              freeMode={true}
              grabCursor={true}
              spaceBetween={-1300}
              modules={[FreeMode]}
              
               style={{width:"1500px"}} 
            >
              {bart.map((obj,key) => (
                <SwiperSlide>
                <Grid item key={key}> 
                {obj.img}
                  
           
                </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
          
            </div>
                </div>
              </div>
            </Grid>
            <Grid item>
              <div className="rowimg-home">
                <div className="col3-hom">
                  <div>
                    <p className="txt54-home">
                      Vous êtes intéressé par un partenariat avec notre
                      plateforme?
                    </p>
                  </div>
                  <div>
                    <p className="txt56-home">
                      En savoir plus sur nos opportunités de partenariat.
                    </p>
                  </div>
                  <div>
                    <Link to="/BecomePartner">

                    <button className="bnt6-home"onClick={()=>{navigate("/BecomePartner")}}>
                      <p className="txtbnt3-home">Devenier partenaire</p>
                    </button>
                    </Link>
                 
                  </div>
                </div>
                <div>
                  <img src={imgp7} />
                </div>
              </div>
            </Grid>
            <Cart />
            <div className="brr-home"></div>

            <Grid item>
              <div className="col3-hom">
                <div>
                  <div>
                    <p className="txst5-home">Voyez nos témoignages clients</p>
                  </div>
                </div>
                <Cart_client />
              </div>
            </Grid>

            <Grid item>
              <div className="col3-hom">
                <div>
                  <div>
                    <p className="txst504-home">Coordonnées et assistance</p>
                  </div>
                </div>
                <Cart_contact />
                <div>
                <Link to="/Contact">
                  <button className="bntcartcon-home" onClick={()=>{navigate("/Contact")}}>
                    <p className="txtbntcartcon-home">Contactez-nous</p>
                  </button>
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item>
              <div className="borderfin-home">
                <Boxabout />
              </div>
            </Grid>
          </div>
        </Grid>
    </div>
      </div>
  
    </div>
  );
};

export default Home;
