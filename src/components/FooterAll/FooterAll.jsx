import React, { Fragment } from "react";
import style from "./FooterAll.module.css";
import instagram from "../../Assets/img/instagram.png";
import twitter from "../../Assets/img/twitter.png";
import facebook from "../../Assets/img/face.png";
const FooterAll = () => {
  return (
    <Fragment>
      <div id="fotter" className={`${style.ct} `}>
        <div className={`${style.holder} d-flex align-items-center`}>
          <div className={`${style.hchild}`}>
            <div className={`${style.left} d-flex align-items-center`}>
              <div className={`${style.foter_fixer} w-100`}>
                <div className={style.img}>
                  <img src={twitter} alt="twitter" />
                  <img src={facebook} alt="facebook" />
                  <img src={instagram} alt="instagram" />
                </div>
                <p className="ms-md-3">ما را در شبکه های اجتماعی دنبال کنید</p>
              </div>
            </div>
            <div className={`${style.center} d-flex align-items-center`}>
              <div className={`${style.foter_fixer} w-100`}>
                <div className="col  text-center ">
                  <p className={style.mar}>شماره تماس جهت سفارش و فروش</p>
                  <p className={style.pcolor}>5-33256598-011</p>
                  <p>ساری-خیابان 18 دی-مجتمع مازیار</p>
                </div>
              </div>
            </div>
            <div className={`${style.right} d-flex align-items-center`}>
              <div className={`${style.foter_fixer} w-100`}>
                <div className="col text-light">
                  <h1 className="mt-xl-4 me-xl-4">آموزشگاه سپهر</h1>
                  <p className="mt-sm-4 me-xl-4">
                    شروع کنید، تمرین کنید، حرفه ای شوید و کسب در آمد کنید
                  </p>
                  <p className="mt-2 me-xl-4">
                    به ما بپیوندید و به سمت موفقیت گام بردارید
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FooterAll;
