import React, { useEffect, useState } from "react";
import "./Transformer_points.css";
import { useDispatch, useSelector } from "react-redux";
import { AllbonDachateByuser } from "../../../../../Store/Service/AllbonDachateByuser";
import { getIdentiteClientt } from "../../../../../Store/Service/identiteClient";
import Pagination from "@mui/material/Pagination";

const Transformer_points = (props) => {
  const client = useSelector(
    (state) => state.IdentiteClient.identiteClient
  );
  props.setpoint(client.point)
  
  const bonDachates = useSelector(
    (state) => state.AllbonDachateByuser.bondachates
  );
  
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(AllbonDachateByuser(client.id))
      dispatch(getIdentiteClientt(client.id))
  },[client?.point])

  const items =5;
  const [current,setCurrent]=useState(1)
  const NbPage=Math.ceil(bonDachates?.length/items);
  const startIndex=(current -1)*items;
  const endIndex=startIndex+items;
  const DataPerPage=bonDachates?.slice(startIndex,endIndex)
  function handlePagination (event,page) {
    setCurrent(page)
  }
  return (
    <div className="points">
      <div className="row-points">
        <div>
          <p className="txt-points">Mes points: {client.point} pts</p>
        </div>
        <button
          className="bnt-points"
          onClick={() => {
            props.onClick();
          }}
        >
          Transformer mes points
        </button>
      </div>

      <table>
        <tr>
          <th>Date</th>
          <th>Partenaire</th>
          <th>Solde</th>
          <th>Code</th>
          <th>Statut</th>
        </tr>

        {DataPerPage?.map((obj, index) => (
          <tr>
            <td className="tdwidth1-points">
              <p>{obj.createdAt}</p>
            </td>
            <td className="tdwidth1-points">
              <p>{obj.partenaire?.user?.fullname}</p>
            </td>
            <td className="tdwidth1-points">
              <p>{obj.solde} DT</p>
            </td>

            <td className="tdwidth1-points">
              <p>{obj.code}</p>
            </td>

            <td className="tdwidth1-points">
              {obj.etat === "Non validé" ? (
                <button className="bn010-points">Non validé</button>
              ) : (
                <button className="bn0101-points">{obj.etat}</button>
              )}
            </td>
          </tr>
        ))}
      </table>
      <div className='page-c'>  

<Pagination
              count={NbPage}
              shape="rounded"
              className="pagination-shop"
              page={current}
              onChange={handlePagination}
    />
    
    </div>
    </div>
  );
};

export default Transformer_points;
