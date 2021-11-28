import React, { Fragment } from "react";
import style from "./UserPanel.css";
import HeaderAll from "../../components/HeaderAll/HeaderAll";
import pyton from "../../Assets/img/5.JPG";
import FooterAll from "../../components/FooterAll/FooterAll";
import UserProfile from "../../components/UserProfile/UserProfile";
import Singel_dore from "../../components/Singel_dore/Singel_dore";
import List_dore from "../../components/List_dore/List_dore";
import UsserMassage from "../../components/UserMassage/UserMassage";
import Profile_Navbar from "../../components/Profile_Navbar/Profile_Navbar";

import { Route, Switch, NavLink, Redirect } from "react-router-dom";
const UserPanel = () => {
  return (
    <Fragment>
      <header className="pheader">
        <HeaderAll>
          <Profile_Navbar />
        </HeaderAll>
      </header>

      <div className="pcontent">
        <Switch>
          <Route path="/profile/u_profile">
            <UserProfile />
          </Route>
          <Route path="/profile/u_dore">
            <div className="medore">
              <div className="container">
                <div className="singel_row mt-5 row justify-content-around">
                  <Singel_dore />
                  <Singel_dore />
                  <Singel_dore />
                  <Singel_dore />
                </div>
              </div>
              <div className="showbtn d-flex">
                <button
                  type="button"
                  class="btn btn-primary rounded-pill m-auto p-sm-2"
                >
                  مشاهده دورا ها
                </button>
              </div>
            </div>
          </Route>
          <Route path="/profile/u_list">
            <List_dore />
          </Route>
          <Route path="/profile/u_text">
            <UsserMassage />
          </Route>
          <Redirect from="/profile" to="/profile/u_profile" />
        </Switch>
      </div>

      <footer className="pfooter">
        <FooterAll />
      </footer>
    </Fragment>
  );
};

export default UserPanel;
