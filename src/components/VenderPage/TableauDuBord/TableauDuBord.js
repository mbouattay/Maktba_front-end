import React, { useEffect, useState } from "react";
import "./TableauDuBord.css";
import Rating from "@mui/material/Rating";
import "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { nb_commande_par_jour } from "../../../Store/Service/nb_commande_par_jour";
import { findCommandeBylibrairie } from "../../../Store/Service/findCommandeBylibrairie";
import { prodplusvendus } from "../../../Store/Service/prodplusvendus";
import moment from "moment";
import { nb_commande } from "../../../Store/Service/nb_commande";
import { ProduitMieuxNote } from "../../../Store/Service/produitMieuxNote";
const TableauDuBord = (props) => {
  const op = ["1", "2", "3", "4", "5", "6", "7"];

  const [selectedValue, setSelectedValue] = useState(1);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const librairieData = useSelector(
    (state) => state.findCommandeBylibrairie.commandeslibrairie
  );
  const produit_mieux_note=useSelector((state)=>state?.ProduitMieuxNote.ProduitMieuxNote)
  const prodplusvende = useSelector((state) => state.prodplusvende.produit);
  const nbcommande = useSelector((state) => state.nb_commande.produit);
  const nbcommandeparjour = useSelector(
    (state) => state.nbcommandeparjoure.produit
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findCommandeBylibrairie(props?.user.id));
    dispatch(prodplusvendus(props?.user.id));
    dispatch(nb_commande_par_jour(props?.user.id));
    dispatch(nb_commande(props?.user.id));
    dispatch(ProduitMieuxNote(props?.user.id))
  }, []);

  const currentDate = moment().format("YYYY-MM-DD");
  const filteredData = librairieData.filter((item) => {
    const parsedDate = moment(item.createdAt, "YYYY-MM-DD");
    const threeDaysAgo = moment().subtract(10, "days");
    return parsedDate.isBetween(threeDaysAgo, currentDate, null, "[]");
  });

  const data = {
    labels: [
      `Compléter  (${nbcommande[0]?.completes})`,
      `en_cours  (${nbcommande[0]?.en_cours})`,
      `rejetees  (${nbcommande[0]?.rejetees})`,
      `nouvelles  (${nbcommande[0]?.nouvelles})`,
    ],
    datasets: [
      {
        data: [
          nbcommande[0]?.completes,
          nbcommande[0]?.en_cours,
          nbcommande[0]?.rejetees,
          nbcommande[0]?.nouvelles,
        ],
        backgroundColor: ["#7BC47F", "#62B0E8", "#E66A6A", "#F9DA8B"],
        cutout: "80%",
      },
    ],
  };
  const dat = {
    labels: [],
    datasets: [
      {
        label: "Nombre de commandes",
        data: [],
        backgroundColor: ["#F7D070"],
        hoverBackgroundColor: ["#F7D070"],
        borderRadius: 8,
        borderWidth: 1,
        barThickness: 40,
      },
    ],
  };
  const filteredData2 = nbcommandeparjour.filter((item) => {
    const parsedDate = moment(item.createdAt, "YYYY-MM-DD");
    const threeDaysAgo = moment().subtract(selectedValue, "days");
    return parsedDate.isBetween(threeDaysAgo, currentDate, null, "[]");
  });
  dat.labels.push(filteredData2.createdAt);
  dat.datasets[0].data.push(filteredData2.nombre_commandes);
  filteredData2.forEach((value) => {
    dat.labels.push(value.createdAt);
    dat.datasets[0].data.push(value.nombre_commandes);
  });
 
  const options = {
    percentageInnerCutout: 0,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
        },
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 50,
        top: 0,
        bottom: 0,
      },
    },
    rotation: 90,
  };
  const optionss = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },
  };

console.log(produit_mieux_note)
  return (
    <div className="Tb">
      <div>
        <p className="txt1-Tb">Salut, {props.user.fullname} 👋</p>
        <p className="txt2-Tb">Consultez votre tableau de bord aujourd'hui</p>
      </div>

      <div className="row1-tb">
        <div className="bloq1-tb">
          <div>
            <p className="txt3-Tb">
              Les plus vendus{" "}
              <span className="txt4-Tb"> (30 derniers jours)</span>
            </p>
          </div>

          <div className="scroll">
            {prodplusvende?.map((obj) => (
              <div className="col1-tb">
                <div className="row2-Tb">
                  <div>
                    <p className="txt5-Tb">
                      X{obj?.produitlabrairies[0]?.total_ventes}
                    </p>
                  </div>
                  <img
                    src={
                      "http://127.0.0.1:8080/uploads/" +
                      obj?.produitlabrairies[0]?.imagelibrairies[0].name_Image
                    }
                    className="img-Tb"
                  />
                  <div>
                    <p className="txt6-Tb">
                      {obj?.produitlabrairies[0]?.titre}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bloq1-tb">
          <div>
            <p className="txt3-Tb">
              Les mieux notés
              <span className="txt4-Tb"> (30 derniers jours)</span>
            </p>
          </div>
          <div className="scroll">
          <div className="col1-tb">
            {
              produit_mieux_note?.map((e)=>(
                <div className="row2-Tb">
                <Rating
                  name="read-only"
                  value={e.avisProduitlibraires?.[0]?.Max_avis}
                  readOnly
                  style={{ fontSize: "16px" }}
                />
                <span className="span-tb">({e.avisProduitlibraires?.[0]?.total_stars})</span>
                <div>
                  <img src={ "http://127.0.0.1:8080/uploads/"+e.imagelibrairies?.[0]?.name_Image} className="img-Tb" />
                </div>
  
                <div>
                  <p className="txt6-Tb">{e.titre}</p>
                </div>
              </div>
              ))
            }
           
          </div>
        </div>
        </div>
        <div className="bloq10-tb">
          <div>
            <p className="txt3-Tb">
              Commandesétats
              <span className="txt4-Tb"> (30 derniers jours)</span>
            </p>
          </div>

          <div className="row3-Tb">
            <div>
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  position: "relative",
                }}
              >
                <Doughnut
                  data={data}
                  options={options}
                  width={200}
                  height={200}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    top: "52%",
                    left: " -29%",
                    textAlign: "center",
                    marginTop: "-28px",
                    lineHeight: "20px",
                  }}
                >
                  <p className="txt-2014">{nbcommande[0]?.total_commandes}</p>
                  <p className="txt-2040">Total</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blq3-Tb">
        <div className="row3-tb">
          <div>
            <p className="txt9-tb">Nombre de commandes</p>
          </div>
          <div>
            <Select
              value={selectedValue}
              onChange={handleSelectChange}
              className="txt-select"
              style={{
                marginTop: "-2%",
                width: "202.57px",
                height: " 40px",
                borderRadius: "8px",
              }}
            >
              {op.map((option) => (
                <MenuItem key={option} value={option} className="txt-select">
                  Les {option} derniers jours
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <Bar data={dat} options={optionss} width={800} height={200} />
      </div>

      <div className="blq4-Tb">
        <div>
          <p className="txt9-tb">Dernières commandes</p>
        </div>
        <table>
          <tr>
            <th>#</th>
            <th>Client</th>
            <th>Montant</th>
            <th>Nbr d’articles</th>
            <th>Date de création</th>
            <th>Mise à jour</th>
          </tr>

          {filteredData?.map((obj, index) => (
            <tr
              className={
                obj?.etatVender === "Nouveau" ? "backnovo-c" : "backnovo-c0"
              }
            >
              <td className="tdwidth">{obj?.id}</td>
              <td className="tdwidth02">
         
                <div className="row-c">
                  <Avatar
                    src={"http://127.0.0.1:8080/uploads/" + obj?.user?.avatar}
                    style={{ borderRadius: "50%" }}
                    className="img1-c"
                  />
                  <div style={{ marginTop: "3%" }}>
                    <p className="txt01-c">{obj?.user?.fullname}</p>
                  </div>
                </div>
              </td>
              <td className="tdwidth1">
                <p className="txt02-c">{obj.total_ttc?.toFixed(2)}</p>
              </td>
              <td className="tdwidth1">
                {obj?.produitlabrairies[0]?.nb_Article}
              </td>
              <td className="tdwidth1">{obj?.createdAt}</td>

              <td className="tdwidth1">
                {obj.etatVender === "Compléter" ? (
                  <>
                    <button className="bnt01-c">
                      <p className="txtbnt01-c">Compléter</p>
                    </button>
                  </>
                ) : (
                  <>
                    {obj.etatVender === "En cours" ? (
                      <button className="bnt02-c">
                        <p className="txtbnt02-c">{obj.etatVender}</p>
                      </button>
                    ) : (
                      <>
                        {obj.etatVender === "Rejeter" ? (
                          <button
                            className="bnt02-c"
                            style={{ background: "#FACDCD" }}
                          >
                            <p className="txtbnt02-c">{obj.etatVender}</p>
                          </button>
                        ) : (
                          <>
                            {obj.etatVender === "Nouveau" ? (
                              <button
                                className="bnt02-c"
                                style={{ background: "#FCEFC7" }}
                              >
                                <p
                                  className="txtbnt02-c"
                                  style={{ color: "#513C06" }}
                                >
                                  {obj.etatVender}
                                </p>
                              </button>
                            ) : (
                              <></>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
export default TableauDuBord;