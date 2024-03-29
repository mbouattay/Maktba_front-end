import React, { useState, useEffect } from "react";
import "./Profile.css";
import {
  LogoutCurve,
  Profile,
  Heart,
  Notification,
  Box,
  MedalStar,
} from "iconsax-react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profilee = (props) => {
  const clientData = useSelector(
    (state) => state.IdentiteClient.identiteClient
  );
  
  const [name, setname] = useState("page1");
  const [bnt1, setbnt1] = useState("bnt-pro");
  const [bnt2, setbnt2] = useState("bnt-pro2");
  const [bnt3, setbnt3] = useState("bnt-pro2");
  const [bnt4, setbnt4] = useState("bnt-pro2");
  const [bnt5, setbnt5] = useState("bnt-pro2");
  const [bnt6, setbnt6] = useState("bnt-pro2");
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/Profile/Monidentite");
  }, []);
  const Pagee = (name) => {
    if (name == "page1") {
      setbnt1("bnt-pro");
      setbnt2("bnt-pro2");
      setbnt3("bnt-pro2");
      setbnt4("bnt-pro2");
      setbnt5("bnt-pro2");
      setbnt6("bnt-pro2");
      setname("page1") ;    
      navigate("/Profile/Monidentite");
    }
    if (name == "page2") {
      setbnt1("bnt-pro2");
      setbnt2("bnt-pro");
      setbnt3("bnt-pro2");
      setbnt4("bnt-pro2");
      setbnt5("bnt-pro2");
      setbnt6("bnt-pro2");
      setname("page2") ;   
      navigate("/Profile/Favoris");
    }
    if (name == "page3") {
      setbnt1("bnt-pro2");
      setbnt2("bnt-pro2");
      setbnt3("bnt-pro");
      setbnt4("bnt-pro2");
      setbnt5("bnt-pro2");
      setbnt6("bnt-pro2");
      setname("page3") ;   
      navigate("/Profile/Commandes");
    }
    if (name == "page4") {
      setbnt1("bnt-pro2");
      setbnt2("bnt-pro2");
      setbnt3("bnt-pro2");
      setbnt4("bnt-pro");
      setbnt5("bnt-pro2");
      setbnt6("bnt-pro2");
      setname("page4") ;   
      navigate("/Profile/Avis");
    }
    if (name == "page6") {
      setbnt1("bnt-pro2");
      setbnt2("bnt-pro2");
      setbnt3("bnt-pro2");
      setbnt4("bnt-pro2");
      setbnt5("bnt-pro2");
      setbnt6("bnt-pro");
      setname("page6") ;   
      navigate("/Profile/MesPoints");
    }
  };
  const Logout = () => {
    localStorage.removeItem("persist:root");
    navigate("/login");
    navigate(0);
  };


  return (
    <>
      <div className="Profile">
        <div className="col1-profile">
          <div>
            <p className="txt-profile1">Bonjour, {clientData?.fullname===undefined?props.user?.fullname:clientData?.fullname}</p>
          </div>
          <div className="row2-profile">
            <div>
              <div className="carts">
                <div>
                  <button
                    className={bnt1}
                    onClick={() => {
                      Pagee("page1");
                    }}
                  >
                    <div className="row1-profile">
                      <Profile size="20" />
                      <div className="txt0-icon">Profile</div>
                    </div>
                  </button>
                </div>
                <div>
                  <button
                    className={bnt2}
                    onClick={() => {
                      Pagee("page2");
                    }}
                  >
                    <div className="row1-profile">
                      <Heart size="20" />
                      <div className="txt-icon">Favoris</div>
                    </div>
                  </button>
                </div>
                <div>
                  <button
                    className={bnt3}
                    onClick={() => {
                      Pagee("page3");
                    }}
                  >
                    <div className="row1-profile">
                      <Box size="20" />
                      <div className="txt-icon">Commandes</div>
                    </div>
                  </button>
                </div>
                <div>
                  <button
                    className={bnt4}
                    onClick={() => {
                      Pagee("page4");
                    }}
                  >
                    <div className="row1-profile">
                      <Notification size="20" />
                      <div className="txt-icon">Mes avis</div>
                    </div>
                  </button>
                </div>
                <div>
                  <button
                    className={bnt6}
                    onClick={() => {
                      Pagee("page6");
                    }}
                  >
                    <div className="row1-profile">
                      <MedalStar size="20" />
                      <div className="txt-icon">Mes points</div>
                    </div>
                  </button>
                </div>
                <div>
                  <button className={bnt5} onClick={Logout}>
                    <div className="row1-profile">
                      <LogoutCurve size="20" />
                      <div className="txt-icon">Déconnection</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <Outlet  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profilee;
