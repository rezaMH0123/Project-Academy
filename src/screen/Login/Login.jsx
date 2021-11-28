import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
// import style from "./Login.module.css";
import style from "./NewLogin.module.css";
import aroww from "../../Assets/img/aroww.png";
import { LoginUser } from "../../core/services/api/LoginStudent.api";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { Route, Switch, NavLink, Link, Redirect } from "react-router-dom";
import { getItem } from "../../core/services/storage/storage";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//reza
const Login = () => {
  const history = useHistory();
  const initialValues = { email: "", password: "" };

  const onSubmit = async (values) => {
    const user = await LoginUser(values);
    if (user && getItem("user").role === "student") {
      difftoast();
      history.push({
        pathname: "/"
      });
    } else {
      unsuccess();
    }
  };

  const validate = (values) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errors = {};
    if (!values.email) {
      errors.email = "فیلد را پر کنید";
    } else if (!re.test(String(values.email).toLowerCase())) {
      errors.email = "ایمیل نادرست است";
    }
    if (!values.password) {
      errors.password = "فیلد را پر کنید";
    } else if (values.password.length < 8) {
      errors.password = "باید بیشتر از 8 کارکتر وارد کنید";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  const difftoast = () => {
    toast.success("Login Successfull", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_CENTER
    });
  };
  const unsuccess = () => {
    toast.warn("UNSuccessfull", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_RIGHT
    });
  };

  return (
    <Formik>
      <form onSubmit={formik.handleSubmit}>
        <div
          className={`${style.loginHolder} container d-flex align-items-center justify-content-center`}
        >
          <div className={`${style.RLlogin} row w-100`}>
            <div
              className={`${style.right} col col-lg-6 col-12 d-flex align-items-center justify-content-center`}
            >
              <div
                className={`${style.rightholder} d-flex align-items-center justify-content-center mt-4`}
              >
                <div className={`${style.form}`}>
                  <div className={`${style.button1} m-auto mb-4 `}>
                    <NavLink className={`${style.navlink1}`} to="/register">
                      <span className={`${style.sabtnam}`}>ثبت نام</span>
                    </NavLink>
                    <NavLink className={`${style.navlink2}`} to="/login">
                      <span className={`${style.vorod}`}>ورود</span>
                    </NavLink>
                  </div>

                  <div className={style.login}>
                    <div className={style.group}>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="ایمیل"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      ></input>
                    </div>
                    {formik.errors.email ? (
                      <div id={style.input_error}>{formik.errors.email}</div>
                    ) : null}

                    <div className={style.group}>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="کلمه عبور"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      ></input>
                    </div>
                    {formik.errors.password ? (
                      <div id={style.input_error}>{formik.errors.password}</div>
                    ) : null}

                    <div className={style.gcheck}>
                      <input type="checkbox" className="check-box" />
                      <label className="form-check-label">
                        <NavLink to="/forgetpassword">
                          کلمه عبور را فراموش کرده ام
                        </NavLink>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary m-auto mt-3"
                    >
                      ورود
                    </button>
                    <ToastContainer draggable={false} transition={Zoom} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${style.left} col col-lg-6 col-12 d-flex align-items-center justify-content-center`}
            >
              <div className={`${style.leftholder}`}>
                <img src={aroww} alt="aroww" />
                <h3> به ما بپیوندید</h3>
                <h4> طعم شیرین آموزش</h4>
                <p> شروع کنید، تمرین کنید، حرفه ای شوید و کسب درآمد کنید</p>
                <button type="button" className="btn btn-primary">
                  درباره ما
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Formik>
  );
};
export default Login;
