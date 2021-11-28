import React from "react";
import { Fragment } from "react";
import pyton from "../../Assets/img/5.JPG";
import style from "./Singel_dore.css";

const Singel_dore = (props) => {
  const { courseName, img, _id } = props;
  return (
    <Fragment>
      <div className="singel_dore_R p-0 col-lg-6">
        <div className="sd_img">
          <img src={img} />
        </div>
        <div className="background m-0 d-inline-block w-100">
          <div className="singelDore row m-0 d-inline-block w-100">
            <h5 id="h5" className="mt-md-4">
              دوره جامع مهندسی {courseName}{" "}
            </h5>
            <p className="text-muted">
              <span className="text-dark">مدرس:</span>دکتر بحر
            </p>
          </div>
          <div className="singelDore row p-0 m-0 h-25 d-inline-block w-100 ">
            <div className="col-5 h-100 d-inline-block">
              <p className="d-flex justify-content-center ">23 فصل</p>
            </div>
            <div className="col-7 h-100 d-inline-block">
              <p className="d-flex justify-content-center">4 ساعت و 50دقیقه</p>
            </div>
          </div>
          <div className="singel_dore_p_btn d-flex justify-content-center align-items-center ">
            <button className="singel_dore_btn_2 btn btn-primary btn-bg mt-xl-2">
              یادگیری را شروع کنید
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Singel_dore;
