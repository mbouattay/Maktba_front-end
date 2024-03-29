import "./Detail-prod.css";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import React, { useEffect, useReducer, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import Card from "../../components/card-produit/Card";
import { Grid } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { OutlinedInput } from "@mui/material";
import Description from "../../components/description-detail/Description";
import { useDispatch, useSelector } from "react-redux";
import { getProduitDetail } from "../../Store/Service/ProduitDetail";
import { useParams } from "react-router-dom";
import { getAllAvisProduitDeatil } from "../../Store/Service/AllavisProduitDetail";
import { toast } from "react-toastify";
import { AjouteAvis } from './../../Store/Service/AjouteAvis';
import Avatar from '@mui/material/Avatar';
import { getAllProduitByCategorie } from "../../Store/Service/AllproduitlibrairieByCategorie";
import { useNavigate} from 'react-router-dom';


const Detailprod = (props) => {
  const nav=useNavigate()

  const [x, setx] = useState();
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    width: "544px",
    height: "560px",
    boxShadow:
      "2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)",
    borderRadius: "8px",

    p: 4,
  };
  const produitDetail = useSelector(
    (state) => state.ProduitDetailLibrairie.detailProd
  );
  const avisProduitDtail = useSelector(
    (state) => state.AllAvisProduitDeatil.avisDetailProd
  );
  const succesAvis = useSelector(
    (state) => state.AllAvisProduitDeatil.status
  );
  const produit = useSelector((state)=>state.AllProduitlibrairieByCategorie.produitlibBycategorie)
  const produitstate = useSelector((state)=>state.AllProduitlibrairieByCategorie.status)

const items =4;
const [current,setCurrent]=useState(1)
const NbPage=Math.ceil(avisProduitDtail.length/items);
const startIndex=(current -1)*items;
const endIndex=startIndex+items;
const DataPerPage=avisProduitDtail.slice(startIndex,endIndex)
function handlePagination (event,page) {
    setCurrent(page)
  }

const [value, setValue] = useState(0);
  const[avisText,setavisText] = useState("")
  const [imgclick, setimgclick] = useState("");
  const [pls, setpls] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [refresh,setrefresh]=useState()

  useEffect(() => {
    dispatch(getProduitDetail(id));
    dispatch(getAllProduitByCategorie(produitDetail?.categorieId));
  }, [dispatch, id, produitDetail?.categorieId]);

  useEffect(()=>{
    dispatch(getAllAvisProduitDeatil(id));
  },[refresh])


  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/Shop">
      <p className="txtlink1"> Shop</p>
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="Scolaire">
      <p className="txtlink1"> Scolaire </p>
    </Link>,
    <Typography key="3" color="text.primary">
      <p className="txtlink"> {produitDetail.titre}</p>
    </Typography>,
  ];

  const imagesProduit = produitDetail.imagelibrairies;
  const addAvis=()=>{
    if(props.user.auth){
      let data={
        nbStart:value,
        commenter:avisText,
        clientId:props.user?.id,
        produitlabrairieId:Number(id)
      }
      AjouteAvis(data).then((response)=>{
        if(response.success==true){
          toast.success("votre avis bien ajoute",{autoClose: 1000})
        }
        setrefresh(true)

      })
    }else{
      toast.warning("connecté pour ajouter votre avis.",{autoClose: 1000})
    }
    setrefresh(false)
    setOpen(false)
  }

  return (
    <>
      <div className="detail">
        <div>
          <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </div>

        <div>
          <div>
            <div className="row-detail">
              <div className="swiper_container">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "##9E9E9E",
                    "--swiper-pagination-color": "##9E9E9E",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                  onClick={() => {
                    setimgclick("");
                  }}
                >
                  {imagesProduit?.map((obj) => (
                    <SwiperSlide>
                      {imgclick == "" ? (
                        <>
                          <img
                            src={
                              "http://127.0.0.1:8080/uploads/" + obj.name_Image
                            }
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src={"http://127.0.0.1:8080/uploads/" + imgclick}
                          />
                        </>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={7}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper1"
                  onClick={() => {
                    setimgclick("");
                  }}
                >
                  {imagesProduit?.map((obj) => (
                    <>
                      <SwiperSlide>
                        <img
                          src={
                            "http://127.0.0.1:8080/uploads/" + obj.name_Image
                          }
                          onClick={() => {
                            setimgclick(obj.name_Image);
                          }}
                        />
                      </SwiperSlide>
                    </>
                  ))}
                </Swiper>
              </div>
              <div className=" description">
                <Description
                  titre={produitDetail.titre}
                  maxAvis={produitDetail?.avisProduitlibraires?.[0]?.max_nb}
                  totalAvis={produitDetail?.avisProduitlibraires?.[0]?.total_avis}
                  prix={produitDetail.prix}
                  discription={produitDetail.description}
                  idl={produitDetail?.labrairie?.id}
                  noml={produitDetail?.labrairie?.nameLibrairie}
                  imgl={produitDetail?.labrairie?.imageStore}
                  imgp={imagesProduit?.[0]?.name_Image}
                  idp={id}
                  qte={produitDetail?.qte}
                  user={props?.user}
                 prix_en_Solde={produitDetail?.prix_en_Solde}
                />
              </div>
            </div>
          </div>

          <div className="row10-detail">
            <div>
              <div className="col4-detail">
                <div>
                  <p className="txt20-detail">Les avis:</p>
                </div>

                <div>
                  <div className="row6-detail">
                    <div>
                      <div className="col3-deatil">
                        <div>
                          <p className="nbr-deatail">
                            {produitDetail?.avisProduitlibraires?.[0]?.max_nb ===
                            undefined
                              ? 0
                              : produitDetail?.avisProduitlibraires?.[0]
                                  ?.max_nb}{" "}
                          </p>
                        </div>
                        <div className="row6-detail">
                          <Rating
                            name="read-only"
                            value={
                              produitDetail?.avisProduitlibraires?.[0]?.max_nb ===
                              undefined
                                ? 0
                                : produitDetail?.avisProduitlibraires?.[0]?.max_nb
                            }
                            readOnly
                          />
                          <p className="txt12-detail">
                            (
                            {produitDetail?.avisProduitlibraires?.[0]
                              ?.total_avis === undefined
                              ? 0
                              : produitDetail?.avisProduitlibraires?.[0]
                                  ?.total_avis}
                            )
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="coll33-detail">
                      <div className="row6-detail">
                        <div>
                          <p className="">5</p>
                        </div>
                        <div>
                          <div className="progressbar">
                            <div
                              className="indicator"
                              style={{ width: "205px" }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <p className="txt12-detail">(90)</p>
                        </div>
                      </div>

                      <div className="row6-detail">
                        <div>
                          <p className="">5</p>
                        </div>
                        <div>
                          <div className="progressbar">
                            <div className="indicator"></div>
                          </div>
                        </div>
                        <div>
                          <p className="txt12-detail">(90)</p>
                        </div>
                      </div>

                      <div className="row6-detail">
                        <div>
                          <p className="">5</p>
                        </div>
                        <div>
                          <div className="progressbar">
                            <div className="indicator"></div>
                          </div>
                        </div>
                        <div>
                          <p className="txt12-detail">(90)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="txt7-detail" onClick={handleOpen}>
                    Donnez votre avis
                  </p>

                  <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    onClose={handleClose}
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <div className="flex-end">
                          {" "}
                          <div>
                            {" "}
                            <i class="fa fa-close" onClick={handleClose}></i>
                          </div>
                        </div>

                        <p className="txtmodal-detail">Ajouter votre avis</p>
                        <br />
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="col3-deatil">
                          <Rating
                            className="reting1"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                          <p className="txtmodal3">Votre avis</p>
                          <OutlinedInput
                            className="inpu-conn2-modal"
                            placeholder="Message"
                            multiline
                            rows={5}
                            maxRows={80}
                            onChange={(e)=>{setavisText(e.target.value)}}
                          />
                          <div className="row-detail">
                            <button
                              className="bnt-modala1"
                              onClick={handleClose}
                            >
                              <p className="txt-modalbnt1">Annuler</p>
                            </button>
                            <button className="bnt-modala2" onClick={addAvis}>
                              <p className="txt-modalbnt2">Envoyer</p>
                            </button>
                          </div>
                        </div>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>

            <div className="coll3-detail">
              <div>
                <div className="Grob1-detail">
                  <div>
                    <p className="txt20-detail">Les commentaires:</p>
                  </div>
                  <div>
                    <div className="select-detail">
                      <Select
                        className="txt-select-detail"
                        defaultValue="Le plus ancien"
                        style={{
                          width: "145.5px",
                          height: " 39px",
                          borderRadius: "8px",
                        }}
                      >
                        <MenuItem value="Le plus ancien">
                          <em className="txt-select-detail">Le plus récent</em>
                        </MenuItem>
                        <ListSubheader> </ListSubheader>
                        <MenuItem value={1} className="txt-select-detail">
                          Option 1
                        </MenuItem>
                        <ListSubheader></ListSubheader>
                        <MenuItem value={2} className="txt-select-detail">
                          Option 2
                        </MenuItem>
                      </Select>
                    </div>

                    <span></span>
                  </div>
                </div>
              </div>

              {succesAvis=="success" && DataPerPage?.map((obj, key) => (
                <div className="coll4-detail" key={key}>
                  <div className="row6-detail">
                    <div>
                    <Stack direction="row" spacing={2}>
                      <Avatar    style={{ height: "18px", width: "18px" }}  src={"http://127.0.0.1:8080/uploads/" + obj.client?.user?.avatar} />
                      </Stack>
                    </div>
                    <div className="fullnameAvis">{obj.client?.user.fullname} </div>
                  </div>
                  <div className="stars-detail">
                    <div> <Rating name="read-only" value={obj?.nbStart} readOnly /> </div>
                    <div> <p className="txt70-detail">Déposé le {obj?.createdAt}</p></div>

                    </div>
                  <div className="txt60-detail">{obj.commenter}</div>
                </div>
              ))}

              <div className="pagination-detail">
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
        </div>
<div className="espas-detail"></div>
        <div>
          <div className="col303-detail">
            <div className="txt202-detail">Découvrez aussi</div>
            <div>
              <div className="row-row6card"></div>
            </div>
            <Grid item style={{ marginLeft: "10px" }}>
              <div style={{ width: "1000px" }}>
                <Swiper
                  freeMode={true}
                  grabCursor={true}
                  spaceBetween={-1200}
                  modules={[FreeMode]}
                  style={{ width: "1500px" }}
                >
                  {produit.map((obj, key) => (
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
                              etat={obj?.etat}
                              prix_en_Solde={obj?.prix_en_Solde}
                              remise={obj?.remise}
                            />
                           
                      </Grid>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
                    
            </Grid>
          </div>
          <p>{x}</p>
        </div>
      </div>
    </>
  );
};

export default Detailprod;
