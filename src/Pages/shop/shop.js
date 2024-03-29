import React, { useState,useEffect } from "react";
import "./shop.css";
import Pagination from "@mui/material/Pagination";
import { Grid } from "@mui/material";
import Card from "../../components/card-produit/Card";
import Filter from "../../components/filter/Filter";
import Trifilter from "../../components/tri-filter/Trifilter";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduitlibrairie } from "../../Store/Service/AllProduitShope";


const Shop = () => {
  const [dataFromChild, setDataFromChild] = useState([]);
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  const dispatch=useDispatch()
  const produitShope=useSelector(state=> state.AllProduitShope.produitShope)
  const items =8;
  const [current,setCurrent]=useState(1)
  const NbPage=Math.ceil(produitShope.length/items);
  const startIndex=(current -1)*items;
  const endIndex=startIndex+items;
  const DataPerPage=produitShope.slice(startIndex,endIndex)
  function handlePagination (event,page) {
    setCurrent(page)
  }

  
  useEffect(()=>{
    dispatch(getAllProduitlibrairie())
},[])

  return (
    <>
 
      <div className="shop">
        <div className="gr">
          <Grid item>
            <div className="gr1">
              <Grid item>
                
                <div className="txt-shop1">Shop</div>
              </Grid>
            </div>
          </Grid>

          <Grid item>
            <div className="gr3">
              <Grid item>
                <Filter prod={produitShope} onData={handleDataFromChild}/>
              </Grid>

              <Grid item>
                <div className="colls-trifel">
                  <Trifilter total={DataPerPage.length}/>

                  <div className="prod-shop">
                    <Grid
                      container
                      rowSpacing={6}
                      columnSpacing={{ xs: 25, sm: 23, md: 4 }}
                    >
                   {DataPerPage?.[0]?.id!==undefined?
                   <>
                   {dataFromChild.length===0?
      DataPerPage.map((obj) => (
        <>
        {obj.qte!=0?
          <Grid item>
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
          :""

        }
        </>
          ))
                   :

                   dataFromChild.map((obj) => (
                    <>
                    {obj.qte!=0?
                      <Grid item>
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
                      :""

                    }
                    </>
                      ))

                   }
                  
                   </>
                   :<></>

                   }
                     

</Grid>      

          
                    
                
                     
                   
                    
                  </div>
                </div>
                <br />
                <br />
                <br />
                <Grid item>
                  
                <Pagination
                  count={NbPage}
                  shape="rounded"
                  className="pagination-shop"
                  page={current}
                  onChange={handlePagination}
                />



                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
     
    </>
  );
};

export default Shop;