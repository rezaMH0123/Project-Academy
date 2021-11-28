import React, { Fragment } from "react";
import style from "./Footer.css";
import instagram from "../../Assets/img/instagram.png";
import twitter from "../../Assets/img/twitter.png";
import facebook from "../../Assets/img/face.png";

const Footer = () => {
  return (
    <Fragment>
      <div className="ct">
        <div className="holder ">
          <div className="row h-child">
            <div className="col  text-end ">
              <div className="forcenter">
                <h1>آموزشگاه سپهر</h1>
                <p>شروع کنید، تمرین کنید، حرفه ای شوید</p>
                <p>به ما بپیوندید و به سمت موفقیت گام بردارید</p>
              </div>
            </div>

            <div className="col  text-center">
              <div className="forcenter2">
                <p className="mar">شماره تماس جهت سفارش و فروش</p>
                <p className="pcolor">5-33256598-011</p>
                <p>ساری-خیابان 18 دی-مجتمع مازیار</p>
              </div>
            </div>

            <div className="col text-start">
              <div className="forcenter">
                <div className="img-holder">
                  <img src={twitter} alt="twitter" />
                  <img src={facebook} alt="facebook" />
                  <img src={instagram} alt="instagram" />
                </div>
                <p className="ms-md-3">ما را در شبکه های اجتماعی دنبال کنید</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
