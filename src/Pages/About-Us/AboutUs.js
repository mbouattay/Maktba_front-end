import * as React from "react";
import { useEffect } from "react";

import "./AboutUs.css";
import { Link } from 'react-router-dom';
import img2_pro from "../../assets/about3.jpg";
import img3_pro from "../../assets/about4.jpg";
import P from "../../assets/point.png";
import img4_pro from "../../assets/about5.jpg";
import { Grid } from "@mui/material";
import Cart_cln from "../../components/cart-client/cart-client";
import Imgt from "../../assets/tni.png";
import Cart_contact from "../../components/cart-contact/cart_contact";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Boxabout from "../../components/box-about/Boxabout";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
        <div className="abt">
    
             <div className="about">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <div className="box-about">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item>
                {" "}
                <p className="txt1-about">À propos de nous </p>{" "}
              </Grid>
              <Grid item>
                {" "}
                <p className="txt2-about">
                  Notre plateforme facilite la vente, l'échange et le don de
                  fournitures scolaires, livres et jouets éducatifs pour tous.
                </p>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item>
          <div className="box-about2">
            <Grid container direction="row" spacing={10}>
              <Grid item>
                <Grid container direction="column" spacing={4}>
                  <Grid item>
                    <div className="txt3-about">
                      {" "}
                      Avantages d'utiliser “Maktaba”
                    </div>
                  </Grid>
                  <Grid item>
                    <p className="txt4-about">
                      <ul>
                        <li>
                          {" "}
                          Accès simplifié à des fournitures scolaires, des
                          livres et des jouets éducatifs abordables et de haute
                          qualité.
                        </li>
                        <li>
                          Plateforme en ligne pratique pour les particuliers et
                          les professionnels pour vendre, échanger ou donner
                          leurs articles.
                        </li>
                        <li>
                          Option écologique pour réduire les déchets en
                          prolongeant la durée de vie des produits grâce à la
                          réutilisation et au don.
                        </li>
                      </ul>
                    </p>
                  </Grid>

                  <Grid item>
                    <img src={img3_pro} className="img-about2" />
                  </Grid>

                  <Grid item>
                    <div className="txt5-about">
                      {" "}
                      Notre engagement envers la durabilité
                    </div>
                  </Grid>

                  <Grid item>
                    <p className="txt6-about">
                      <ul>
                        <li>
                          {" "}
                          Encourager la réutilisation des fournitures scolaires,
                          des livres et des jouets éducatifs pour réduire les
                          déchets et l'empreinte carbone.
                        </li>
                        <li>
                          Partenariat avec des organisations qui promeuvent
                          l'éducation et la durabilité pour soutenir notre
                          mission.
                        </li>
                        <li>
                          Chercher constamment des moyens d'améliorer et de
                          réduire notre impact sur l'environnement.
                        </li>
                      </ul>
                    </p>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="column" spacing={10}>
                  <Grid item>
                    {" "}
                    <img src={img4_pro} className="img-about3" />{" "}
                  </Grid>
                  <Grid item>
                    {" "}
                    <p className="txt7-about">
                      {" "}
                      Comment fonctionne “Maktaba” :
                    </p>
                    <Grid item>
                      <p className="txt8-about">
                        Notre plateforme aide les fournisseurs à optimiser leurs
                        activités et permet aux acheteurs de rationaliser la
                        gestion marketing et logistique. Grâce à la gestion des
                        données en temps réel et à l'information alimentée par
                        l'IA, la prise de décision est simplifiée sur un marché
                        dynamique, améliorant ainsi la gestion des données pour
                        toutes les parties prenantes.
                        <br /> <br />
                        Maktaba encourage l'engagement communautaire en
                        fournissant aux individus des outils pour lancer et
                        gérer leurs propres initiatives culturelles, sociales ou
                        économiques grâce aux bibliothèques numériques. Chaque
                        bibliothèque devient un projet, permettant à chacun de
                        gérer ses propres initiatives.
                      </p>{" "}
                    </Grid>
                    <Grid item>
                      {" "}
                      <img src={img2_pro} className="img1-about4" />{" "}
                    </Grid>
                    <img className="img-aboutp" src={P} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <br />
        <br />
        <Cart_cln qst='Que disent les gens à notre propos?'/>

        <Grid item>
         
          <p className="txt12-about">Notre Partenariats et collaborations</p>
        </Grid>
        <Grid item >
            <div style={{width:"1000px"}} > 
            <Swiper
              freeMode={true}
              grabCursor={true}
              spaceBetween={-1200}
              modules={[FreeMode]}
              className="mySwiper"
               style={{width:"1500px"}} 
            >
              <SwiperSlide> <div  className="swiper-img-about"><img src={Imgt} className="back"/></div></SwiperSlide>
              <SwiperSlide> <div  className="swiper-img-about"><img src={Imgt} className="back"/></div></SwiperSlide>
              <SwiperSlide> <div  className="swiper-img-about"><img src={Imgt} className="back"/></div></SwiperSlide>
              <SwiperSlide> <div  className="swiper-img-about"><img src={Imgt} className="back"/></div></SwiperSlide>
              <SwiperSlide> <div  className="swiper-img-about"><img src={Imgt} className="back"/></div></SwiperSlide>
              <SwiperSlide> <div  className="swiper-img-about"><img src={Imgt} className="back"/></div></SwiperSlide>
              <SwiperSlide> <div  className="swiper-img-about"><img src={Imgt} className="back"/></div></SwiperSlide>

            </Swiper>
            </div>
               
        </Grid>


        <Grid item>
          <p className="txt13-about">Coordonnées et assistance </p> <br />{" "}
          <br />
          <Cart_contact />
          <br /> <br />
          <Link to="/Contact">
          <button className="bntn-about">
            <div className="textbntContactez-nous">Contactez-nous</div>
          </button>
          </Link>
        </Grid>

        <Grid item>
        <Boxabout/>
        </Grid>
      </Grid>
    </div>
  
        </div>
  );
};

export default AboutUs;
