import React, { Fragment, useState, useEffect } from "react";
import style from "./BlogDetails.module.css";
import HeaderAll from "../../components/HeaderAll/HeaderAll";
import FooterAll from "../../components/FooterAll/FooterAll";
import Lodding3 from "../../Assets/LodingSvg/0.gif";
import { useParams } from "react-router-dom";
import { NewsDetails } from "../../core/services/api/BlogDetails.api";

import python from "../../Assets/img/python.jpg";

const BlogDetails = () => {
  const [newsDetails, setnewsDetails] = useState([]);
  const [loding, setloding] = useState(true);
  const params = useParams();

  const getnewsDetails = async () => {
    try {
      const res = await NewsDetails(params.id);
      console.log(params);
      setnewsDetails(res.result);
      console.log(res.result);
    } catch (error) {
      console.log(error);
    } finally {
      setloding(false);
    }
  };
  useEffect(() => {
    getnewsDetails();
  }, []);

  return (
    <Fragment>
      <div className="allditaleblog">
        <header className="Bheader">
          <HeaderAll name="دوره ها" link="/courses">
            <div className="bottom">
              <h2 className="d-flex justify-content-center">اخبار و مقالات</h2>
            </div>
          </HeaderAll>
        </header>
        <div className="container">
          {loding ? (
            <div id="lodingHolder">
              <img className="courseLoding" src={Lodding3} />
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-7 col-sm-12 bg-light mt-5 border">
                <div className="row">
                  <div id="ax">
                    <img
                      className="mt-2 w-100 h-100"
                      id="ax"
                      src={newsDetails.image}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col mt-4">
                    <h1 className={style.titr}>{newsDetails.title}</h1>
                  </div>
                </div>

                <div className="row">
                  <div className="tozih col mt-5">
                    <p>{newsDetails.text}</p>
                  </div>
                </div>
                <div className="container border">
                  <div className="comment">
                    <form>
                      <div className="row d-flex justify-content-center">
                        <div class="col-lg-6 form-group m-2">
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
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
                            class="form-control"
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
                  <h4 className="zban_h5 d-flex justify-content-center">
                    اخبار و مقالات
                  </h4>

                  <div className="row p-0 m-0 h-25 d-inline-block w-100">
                    <div className="col-12 h-100 d-inline-block">
                      <div className="cours_p d-flex justify-content-center ">
                        <p> معرفی بهترین کتاب برنامه نویسی </p>
                      </div>
                    </div>
                  </div>
                  <div className="row p-0 m-0 h-25 d-inline-block w-100">
                    <div className="col-12 h-100 d-inline-block">
                      <div className="cours_p d-flex justify-content-center ">
                        <p> آموزش برنامه نویسی اندروید</p>
                      </div>
                    </div>
                  </div>
                  <div className="row p-0 m-0 h-25 d-inline-block w-100">
                    <div className="col-12 h-100 d-inline-block">
                      <div className="cours_p d-flex justify-content-center ">
                        <p>آموزش برنامه نویسی پایتون</p>
                      </div>
                    </div>
                  </div>
                  <div className="row p-0 m-0 h-25 d-inline-block w-100">
                    <div className="col-12 h-100 d-inline-block">
                      <div className="cours_p d-flex justify-content-center ">
                        <p>آموزش برنامه نویسی جاوا</p>
                      </div>
                    </div>
                  </div>
                  <div className="row p-0 m-0 h-25 d-inline-block w-100">
                    <div className="col-12 h-100 d-inline-block">
                      <div className="cours_p cours_p col-md-12 ">
                        <p>آموزش برنامه نویسی سی شارپ </p>
                      </div>
                    </div>
                  </div>

                  <div className="row p-0 m-0 h-25 d-inline-block w-100">
                    <div className="col-12 h-100 d-inline-block">
                      <div className="cours_p cours_p col-md-12 ">
                        <p>اخبار آموزش</p>
                      </div>
                    </div>
                  </div>
                  <div className="row p-0 m-0 h-25 d-inline-block w-100">
                    <div className="col-12 h-100 d-inline-block">
                      <div className="cours_p cours_p col-md-12 ">
                        <p>اخبار ویژه </p>
                      </div>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          )}
        </div>
      </div>
      <FooterAll>
        <FooterAll />
      </FooterAll>
    </Fragment>
  );
};

export default BlogDetails;
