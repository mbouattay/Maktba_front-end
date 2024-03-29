import React, { useEffect,useState } from "react";
import "./Page2.css";

import { SearchNormal1 } from "iconsax-react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import Box_FavoirsProduit_Card from "./../../box-favorisProduit-card/box-favorisProduit-card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduitFavorie } from "../../../Store/Service/AllProduitFavorieByclient";
const Page2 = (props) => {
  const dispatch = useDispatch();
  const [dataFromChild, setDataFromChild] = useState([]);
  const produiFavorieClient = useSelector((state) => state.produiFavorie.produiFavorieClient);
  const [refresh, setrefresh] = useState(0);
  const refreshPage = ()=>{
    setrefresh(refresh+1)
  }
  console.log(refresh)
  useEffect(() => {
    dispatch(getAllProduitFavorie(props.user?.id));
  },[refresh]);

  return (
    <div className="favorie">
      <div className="col1-favo">
        <div>
          <p className="txt1-favo">Favoris</p>
        </div>
        <div>
          <OutlinedInput
            className="input-pro"
            placeholder={"Rechercher..."}
            endAdornment={
              <InputAdornment position="end">
                <SearchNormal1 size="19" color="#B1B1B1" />
              </InputAdornment>
            }
          />
        </div>

        <div className="row-favo">
          <div>
            <p className="txt2-favo">Article</p>
          </div>
          <div>
            <p className="txt2-favo">Total HT</p>
          </div>
        </div>
        <div>
          <div className="lin-favo" />
        </div>
        <div>
          <div className="scroll-container">
            {produiFavorieClient.map((produit) => (
              <Box_FavoirsProduit_Card
             
                idclient={props.user.id}
                titre={produit.produitlabrairie?.titre}
                idp={produit?.id}
                prix={produit.produitlabrairie?.prix}
                nbstart={produit.produitlabrairie?.avisProduitlibraires?.[0]?.max_nb}
                totalavis={produit.produitlabrairie?.avisProduitlibraires?.[0]?.total_avis}
                namelibriarie={produit.produitlabrairie?.labrairie?.nameLibrairie}
                idl={produit.produitlabrairie?.labrairie?.id}
                imgl={produit.produitlabrairie?.labrairie?.imageStore}
                imgp={produit.produitlabrairie?.imagelibrairies?.[0]?.name_Image}
                refresh={refreshPage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
