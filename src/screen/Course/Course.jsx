import React, { Fragment, useEffect, useState } from "react";
import style from "./Course.module.css";
import HeaderAll from "../../components/HeaderAll/HeaderAll";
import FooterAll from "../../components/FooterAll/FooterAll";
import Lodding from "../../Assets/LodingSvg/Hourglass.gif";
import Lodding2 from "../../Assets/LodingSvg/l.gif";
import Lodding3 from "../../Assets/LodingSvg/0.gif";
import Lodding4 from "../../Assets/LodingSvg/forever.gif";
import python from "../../Assets/img/python.jpg";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { SingelTerm } from "../../core/services/api/singelCourse.api";
import { AddStudentToTerm } from "../../core/services/api/AddStudentToTerm.api";
import { getItem } from "../../core/services/storage/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Course = () => {
  const [singelTerm, setsingelTerm] = useState([]);
  const [loding, setloding] = useState(true);
  const params = useParams();
  const [isOpen, setIsOpen] = React.useState(false);
  const user = getItem("user");

  const toastsuccess = () => {
    toast.success("با موفقیت به لیست خرید اضافه شد", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };
  const toasterror = () => {
    toast.error("خطا در سرور", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  const clickHandler = async () => {
    if (user) {
      const res = await AddStudentToTerm({ id: user._id, termId: params.id });
      if (res) {
        toastsuccess();
      } else {
        toasterror();
      }
    } else {
      showModal();
    }
  };
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const getsingelitem = async () => {
    try {
      const res = await SingelTerm(params.id);
      setsingelTerm(res.result);
    } catch (error) {
      console.log(error);
    } finally {
      setloding(false);
    }
  };
  useEffect(() => {
    getsingelitem();
  }, []);
  return (
    <Fragment>
      <div className={style.allcourse}>
        <header className={`${style.coursesheader}`}>
          <HeaderAll name="اخبار" link="/blogs">
            <div className={`${style.bottom}`}>
              <h2 className="d-flex justify-content-center">دوره </h2>
            </div>
          </HeaderAll>
        </header>

        <div className={`${style.container} d-flex align-items-center`}>
          {loding ? (
            <div id={style.lodingHolder}>
              <img className={style.courseLoding} src={Lodding3} />
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-7 col-sm-12 bg-light mt-5">
                <div className="row d-flex justify-content-center align-items-center">
                  <div
                    id={style.ax}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img
                      className="mt-2 w-100"
                      id={style.ax}
                      src={singelTerm.course.image}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mt-4">
                    <h4 className={style.h4_cours}>
                      زبان برنامه نویسی
                      {singelTerm && singelTerm.title}
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className={`${style.left} col mt-5`}>
                    <h6>{singelTerm && singelTerm.course.description}</h6>
                  </div>
                </div>
                <div className="container">
                  <div className={style.comment}>
                    <form>
                      <div className="row d-flex justify-content-center">
                        <div className={`form-group col-lg-6 m-2`}>
                          <textarea
                            className="form-control"
                            id={style.exampleFormControlTextarea1}
                            rows="3"
                            placeholder="نظر شما"
                          ></textarea>
                        </div>

                        <div className="col-lg-6 form-group m-2">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="نام شما"
                          ></input>
                        </div>
                        <div className=" col-lg-6 form-group m-2">
                          <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                          ></input>
                        </div>
                      </div>
                      <div className="submit m-2 d-flex justify-content-center">
                        <button
                          type="submit"
                          className="cours_btn btn btn-dark"
                        >
                          فرستادن نظر
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="left col-lg-4 col-sm-12 bg-light mt-5 m-2 border">
                <dl className="row m-4 mt-2 border">
                  <h5 className="zban_h5 d-flex justify-content-center">
                    زبان برنامه نویسی
                    {singelTerm && singelTerm.title}
                  </h5>

                  <div className="row p-0 m-0 h-25 d-inline-block w-100">
                    <div className="col-5 h-100 d-inline-block">
                      <p className="cours_p d-flex justify-content-center ">
                        تعداد دانشجو
                      </p>
                    </div>
                    <div className="col-7 h-100 d-inline-block">
                      <p className="cours_p d-flex justify-content-center">
                        {singelTerm && singelTerm.students.length}
                        نفر
                      </p>
                    </div>
                  </div>
                  <div className="row p-0 m-0 h-25 d-inline-block w-100">
                    <div className="col-5 h-100 d-inline-block">
                      <p className="cours_p d-flex justify-content-center ">
                        مدت زمان دوره
                      </p>
                    </div>
                    <div className="col-7 h-100 d-inline-block">
                      <p className="cours_p d-flex justify-content-center">
                        {singelTerm && singelTerm.capacity}
                        ساعت
                      </p>
                    </div>
                  </div>
                  <div className="row p-0 m-0 h-25 d-inline-block w-100">
                    <div className="col-5 h-100 d-inline-block">
                      <p className="cours_p d-flex justify-content-center ">
                        مدرس
                      </p>
                    </div>
                    <div className="col-7 h-100 d-inline-block">
                      <p className="cours_p d-flex justify-content-center">
                        {singelTerm && singelTerm.teacher.fullName}
                      </p>
                    </div>
                  </div>
                  <div className="row p-0 m-0 h-25 d-inline-block w-100">
                    <div className="col-5 h-100 d-inline-block">
                      <p className="cours_p d-flex justify-content-center ">
                        هزینه دوره
                      </p>
                    </div>
                    <div className="col-7 h-100 d-inline-block">
                      <p className="cours_p d-flex justify-content-center">
                        <del>{singelTerm && singelTerm.cost} ریال</del>
                      </p>
                    </div>
                  </div>
                  <div className="row p-0 m-0 h-25 d-inline-block w-100">
                    <div className="col-5 h-100 d-inline-block">
                      <p className="cours_p cours_p col-md-12 ">
                        این دوره با تخفیف
                      </p>
                    </div>
                    <div className="col-7 h-100 d-inline-block">
                      <p className="cours_p d-flex justify-content-center">
                        {singelTerm &&
                          singelTerm.cost - (singelTerm.cost * 20) / 100}
                        ریال
                      </p>
                    </div>
                  </div>

                  <div className="leftbtn m-2 d-flex justify-content-center">
                    <button
                      type="button"
                      className="cours_btn btn btn-primary btn-lg btn-block"
                      onClick={clickHandler}
                    >
                      افزودن به سبد خرید
                    </button>
                    <ToastContainer
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    />
                  </div>
                </dl>
              </div>
            </div>
          )}
        </div>
      </div>
      <footer className={`${style.footer}`}>
        <FooterAll />
      </footer>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Body className="bg bg-info">لطفا اول ورود کنید</Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>OK</button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Course;
