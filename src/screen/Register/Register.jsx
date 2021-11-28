import React, { Fragment, useState } from "react";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import style from "./Register.module.css";
import style from "./NewRegister.module.css";
import aroww from "../../Assets/img/aroww.png";
import { RegisterUser } from "../../core/services/api/RegisterStudent.api";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const history = useHistory();

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    birthDate: "",
    nationalId: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(2, "کاراکتر کم!")
      .max(30, "کاراکتر زیاد!")
      .required("مورد نیاز"),
    email: Yup.string().email("فرمت نادرست ایمیل").required("مورد نیاز"),
    password: Yup.string().min(8, "کاراکتر کم!").required("مورد نیاز"),
    phoneNumber: Yup.number().required("مورد نیاز"),
    birthDate: Yup.date().required("مورد نیاز"),
    nationalId: Yup.string()
      .max(10, "کاراکتر زیاد!")
      .min(10, "کاراکتر کم!")
      .required("مورد نیاز"),
  });
  const toastsuccess = () => {
    toast.success("با موفقیت ویرایش یافت", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onSubmit = async (value) => {
    const userObj = {
      fullName: value.fullName,
      email: value.email,
      password: value.password,
      phoneNumber: value.phoneNumber,
      birthDate: value.birthDate,
      nationalId: value.nationalId,
    };
    // console.log("values", value);
    const res = await RegisterUser(userObj);
    if (res) {
      toastsuccess();
      history.push("/login");
    }
  };

  const difftoast = () => {
    toast.success("Successfull", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const unsuccess = () => {
    toast.warn("UNSuccessfull", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const [startDate, setStartDate] = useState(null);
  const registerModel = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "نام و نام خانوادگی",
    },
    { id: 2, name: "email", type: "email", placeholder: "ایمیل" },
    { id: 3, name: "password", type: "password", placeholder: "کلمه عبور" },
    { id: 4, name: "phoneNumber", type: "number", placeholder: "شماره تلفن" },
    { id: 5, name: "birthDate", placeholder: "تاریخ تولد" },
    { id: 6, name: "nationalId", type: "number", placeholder: "کد ملی" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values, setFieldValue }) => {
        return (
          <Form className="d-flex align-items-center justify-content-center">
            <div
              className={`${style.loginHolder} container d-flex align-items-center justify-content-center`}
            >
              <div className={`${style.RLlogin} row w-100`}>
                <div
                  className={`col-lg-6 col-12 d-flex align-items-center justify-content-center`}
                >
                  <div
                    className={`${style.rightholder} d-flex align-items-center justify-content-center mt-2`}
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
                      <div className={`${style.register}`}>
                        {registerModel.map((field) =>
                          field.id === 5 ? (
                            <DatePicker
                              key={field.id}
                              className={style.datepicker}
                              dateFormat="yyyy/MM/dd"
                              selected={values.birthDate}
                              onChange={(date) =>
                                setFieldValue("birthDate", date)
                              }
                              placeholderText="تاریخ تولد"
                              style-border-bottom={"1px solid #ccc"}
                            />
                          ) : (
                            <div className={style.group} key={field.id}>
                              <Field
                                name={field.name}
                                type={field.type}
                                className="form-control"
                                placeholder={field.placeholder}
                              />

                              <ErrorMessage
                                className={`${style["error-message-field"]}`}
                                component="span"
                                name={field.name}
                              />
                            </div>
                          )
                        )}

                        <button type="submit" className="btn btn-primary">
                          ثبت نام
                        </button>
                        <ToastContainer draggable={false} transition={Zoom} />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${style.left} col-lg-6 col-12 d-flex align-items-center justify-content-center mt-3`}
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
            <ToastContainer
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Form>
        );
      }}
    </Formik>
  );
};
export default Register;
