import React from 'react'
import'./Boxabout.css'
import { OutlinedInput } from "@mui/material";
import { Grid } from "@mui/material";
import P from "../../assets/point.png";
const Boxabout = () => {
  return (
    <div className="box3-about">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={8}
            >
              <Grid item>
                {" "}
                <p className="txt14-about">
                  Rejoignez notre newsletter pour des offres exclusives et des
                  nouveautés.
                </p>{" "}
              </Grid>

              <Grid item>
                <Grid container direction="row" spacing={2}>
                  <Grid item>
                    {" "}
                    <OutlinedInput
                      className="inpu-about"
                      placeholder="Email"
                    />{" "}
                  </Grid>

                  <Grid item>
                    {" "}
                    <button className="bnt2-about">
                      {" "}
                      <p className="txt-bntabout">Abonnement</p>
                    </button>{" "}
                  </Grid>
                </Grid>
              </Grid>
              <img className="img-aboutp2" src={P} />
            </Grid>
          </div>
  )
}

export default Boxabout
