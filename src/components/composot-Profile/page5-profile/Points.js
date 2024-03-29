import React from "react";
import "./Points.css";

import Transformer_points from "./composont-Points/Transformer_points/Transformer_points";
import Transformer_points1 from "./composont-Points/Transformer_points1/Transformer_points1";
import Transformer_points2 from "./composont-Points/Transformer_points2/Transformer_points2";
import Transformer_points3 from "./composont-Points/Transformer_points3/Transformer_points3";
import { addBonDachateapi } from "../../../Store/Service/addBonDachate";
import { useDispatch } from "react-redux";

const Points = (props) => {
  const [change, setchange] = React.useState("Transformer_points");
  const [idp, setidp]=React.useState();
  const [point, setpoint]=React.useState(); 
  const [partnaire, setpartnaire]=React.useState(); 

  const handleData = (data) => {
    setidp(data);
  }
  const dispatch=useDispatch()
  const Changepage = () => {
    switch (change) {
      case "Transformer_points":
        return (
          <Transformer_points
            onClick={() => {
              setchange("Transformer_points1");
            }}
            setpoint={(data)=>{setpoint(data)}}

          />
        );
      case "Transformer_points1":
        return (
          <Transformer_points1
            onRetourner={() => {
              setchange("Transformer_points");
            }}
            onClick={() => {
              setchange("Transformer_points2");
            }}
            handldataipd={handleData}
           setpartnaire={setpartnaire}
          />
        );
      case "Transformer_points2":
        return (
          <Transformer_points2
            onRetourner={() => {
              setchange("Transformer_points1");
            }}
            onClick={(data) => {
              setpoint(data.nbpoint)
              dispatch(addBonDachateapi(data)).then((response)=>{
                if(response.payload.success==true){
                  setchange("Transformer_points3");
                }
              })
            }}
            idp={idp}
            user={props.user}
            point={point}
          />
        );
      case "Transformer_points3":
        return (
          <Transformer_points3
            onRetourner={() => {
              setchange("Transformer_points");
            }}
            onClick={() => {
              setchange("Transformer_points");
            }}
            point={point}
            partnaire={partnaire}

          />
        );
      default:
        break;
    }
  };
  return (
    <div className="poi">
      <Changepage />
    </div>
  );
};

export default Points;
