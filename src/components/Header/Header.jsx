import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { getItem } from "../../core/services/storage/storage";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const usr = getItem("user");

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    console.log(usr);
  }, []);
  return (
    <Fragment>
      <div className={style.ct}>
        <header className={style.heder}>
          <div className={style.top}>
            <ul className={`${style.menu}`}>
              <li>
                <Link to="/">خانه</Link>
              </li>
              <li>
                <Link to="/Courses">آموزش</Link>
              </li>
              <li>
                <Link to="/blogs">اخبار</Link>
              </li>
              <li className={style.corserprofile}>
                {usr ? (
                  <Link to="/np">پروفایل</Link>
                ) : (
                  <span className={style.curser} onClick={showModal}>
                    پروفایل
                  </span>
                )}
              </li>
              <li>
                <a href="#foter">تماس با ما</a>
              </li>

              <li className={`${style.Box}`}>
                <Link to="/register">ورود / ثبت نام</Link>
              </li>
            </ul>
            <div className={`${style.matn}`}>
              <h1>طعم شیرین آموزش</h1>
              <h1>آموزشگاه سپهر</h1>
              <p>شروع کنید،تمرین کنید،حرفه ای شوید و کسب درآمد کنید</p>
            </div>
            <div className={style.collect}>
              <Link to="/Courses">
                <div className={style.Sdore}>ثبت نام دوره</div>
              </Link>
              <Link to="#">
                <div className={style.joz}>جزئیات</div>
              </Link>
            </div>
          </div>
        </header>
      </div>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Body className="bg bg-info">لطفا اول ورود کنید</Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>OK</button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Header;
