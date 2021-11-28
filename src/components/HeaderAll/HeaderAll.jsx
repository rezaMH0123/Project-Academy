import React, { Fragment } from "react";
import style from "../HeaderAll/HeaderAll.module.css";
import { Route, Link } from "react-router-dom";
import Pimg from "../Profileimg/Profileimg";
import Biticon from "../../Assets/img/bit-to-bit-icon.png";
const HeaderAll = (props) => {
  return (
    <Fragment>
      <div className={style.hedholder}>
        <div className={`${style.top}`}>
          <div className={style.Biticon}>
            <img src={Biticon} />
          </div>
          <ul>
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="#">خدمات</Link>
            </li>
            <li>
              <Link to={props.link}>{props.name}</Link>
            </li>
            <li>
              <Link to="#">مالی</Link>
            </li>
            <li>
              <a href="#fotter">تماس با ما</a>
            </li>
          </ul>
        </div>
        <div className={`${style.bottom}`}>{props.children}</div>
      </div>
    </Fragment>
  );
};

export default HeaderAll;
