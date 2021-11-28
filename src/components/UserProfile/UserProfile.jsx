import { Formik, useFormik } from "formik";
import React, { useState, useEffect } from "react";
import style from "./UserProfile.css";
import { UpdateUserProfile } from "../../core/services/api/UpdateProfileUser.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { panelGetId } from "../../core/services/api/panel.stuBYid.api";
import { result } from "lodash";

const UserProfile = (props) => {
  const { userinfo, id } = props;
  // const res = await panelGetId(id);

  const initialValues = {
    name: userinfo.name,
    email: userinfo.email,
    nationalId: userinfo.nationalId,
    phoneNumber: userinfo.phoneNumber,
    birthDate: userinfo.birthDate,
  };
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

  const onSubmit = async (values) => {
    values.id = id;
    const res = await UpdateUserProfile(values);
    const usres = await panelGetId(id);
    userinfo.name = usres.result.fullName;
    userinfo.nationalId = usres.result.nationalId;
    userinfo.email = usres.result.email;
    userinfo.phoneNumber = usres.result.phoneNumber;
    userinfo.birthDate = usres.result.birthDate;
    console.log(userinfo);
    toastsuccess();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  useEffect(() => {}, []);

  return (
    <Formik>
      <div className="container">
        <form className=" form" onSubmit={formik.handleSubmit}>
          <div className="row m-2">
            <div className="col-lg-6">
              <label className="mb-2" htmlFor="name">
                نام:
              </label>
              <input
                name="name"
                id="name"
                type="text"
                className="form-control height"
                placeholder="نام"
                aria-label="First name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="col-lg-6">
              <label className="mb-2" htmlFor="nationalId">
                کد ملی:
              </label>
              <input
                name="nationalId"
                id="nationalId"
                type="text"
                className="form-control height"
                placeholder="کد ملی"
                aria-label="First name"
                onChange={formik.handleChange}
                value={formik.values.nationalId}
              />
            </div>
          </div>

          <div className="row m-2">
            <div className="col-lg-6">
              <label className="mb-2" htmlFor="phoneNumber">
                تلفن همراه:
              </label>
              <input
                name="phoneNumber"
                id="phoneNumber"
                type="text"
                className="form-control height"
                placeholder="شماره موبایل"
                aria-label="First name"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
            </div>
            <div className="col-lg-6">
              <label className="mb-2" htmlFor="birthDate">
                تاریخ تولد :
              </label>
              <input
                name="birthDate"
                id="birthDate"
                type="text"
                className="form-control height"
                placeholder="تاریخ تولد"
                aria-label="First name"
                onChange={formik.handleChange}
                value={formik.values.birthDate}
              />
            </div>
          </div>

          <div className="row m-2 d-flex justify-content-center">
            <div className="col-lg-6">
              <label className="mb-2" htmlFor="email">
                ایمیل:
              </label>
              <input
                name="email"
                id="email"
                type="text"
                className="form-control height"
                placeholder="ایمیل"
                aria-label="First name"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
          </div>
          <input
            type="submit"
            value="ویرایش"
            className="virayesh btn btn-dark rounded-pill btn-lg d-block "
          />
          <ToastContainer
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>
    </Formik>
  );
};

export default UserProfile;
