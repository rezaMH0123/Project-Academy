import React from "react";
import { Fragment } from "react";
import pyton from "../../Assets/img/5.JPG";
import HTML from "../../Assets/img/7.PNG";
import Golang from "../../Assets/img/8.JPG";
import style from "./List_dore.css";
const List_dore = () => {
  return (
    <Fragment>
      <div className="medore">
        <div className="container">
          <div className="singel_row mt-5 row justify-content-around">
            <div className="singel_dore mt-5 me-1 p-0 col-4 border border-2 border-muted">
              <div className="sd_img ">
                <img src={pyton} />
              </div>
              <div className="row m-0 h-50 d-inline-block w-100">
                <div className="row m-0 h-50 d-inline-block w-100">
                  <h5 className="mt-md-4">دوره جامع مهندسی پایتون </h5>
                  <p id="list_dore_p" className="text-muted">
                    <span className="text-dark">مدرس:</span>دکتر بحر
                  </p>
                </div>
                <div className="row p-0 m-0 h-25 d-inline-block w-100">
                  <div className="col-5 h-100 d-inline-block">
                    <p
                      id="list_dore_p"
                      className="d-flex justify-content-center "
                    >
                      23 فصل
                    </p>
                  </div>
                  <div className="col-7 h-100 d-inline-block">
                    <p
                      id="list_dore_p"
                      className="d-flex justify-content-center"
                    >
                      4 ساعت و 50دقیقه
                    </p>
                  </div>
                </div>
                <div className="singel_dore_btn row d-block">
                  <button className="singel_dore_btn btn btn-primary btn-bg mt-xl-2 ">
                    یادگیری را شروع کنید
                  </button>
                </div>
              </div>
            </div>

            <div className="singel_dore mt-5 me-1 p-0 col-4 border border-2 border-muted">
              <div className="sd_img">
                <img src={HTML} />
              </div>
              <div className="row m-0 h-50 d-inline-block w-100">
                <div className="row m-0 h-50 d-inline-block w-100">
                  <h5 className="mt-md-4">دوره جامع مهندسی HTML </h5>
                  <p id="list_dore_p" className="text-muted">
                    <span className="modares text-dark">مدرس:</span>دکتر بحر
                  </p>
                </div>
                <div className="row p-0 m-0 h-25 d-inline-block w-100">
                  <div className="col-5 h-100 d-inline-block">
                    <p
                      id="list_dore_p"
                      className="d-flex justify-content-center "
                    >
                      15 فصل
                    </p>
                  </div>
                  <div className="col-7 h-100 d-inline-block">
                    <p
                      id="list_dore_p"
                      className="d-flex justify-content-center"
                    >
                      3ساعت و 50دقیقه
                    </p>
                  </div>
                </div>
                <div className="singel_dore_btn row d-block">
                  <button className="singel_dore_btn btn btn-primary btn-bg mt-xl-2 ">
                    یادگیری را شروع کنید
                  </button>
                </div>
              </div>
            </div>

            <div className="singel_dore mt-5 me-1 p-0 col-4 border border-2 border-muted">
              <div className="sd_img">
                <img src={Golang} />
              </div>
              <div className="row m-0 h-50 d-inline-block w-100">
                <div className="row m-0 h-50 d-inline-block w-100">
                  <h5 className="mt-md-4">دوره جامع مهندسی GOLANG </h5>
                  <p id="list_dore_p" className="text-muted">
                    <span className="text-dark">مدرس:</span>دکتر بحر
                  </p>
                </div>
                <div className="row p-0 m-0 h-25 d-inline-block w-100">
                  <div className="col-5 h-100 d-inline-block">
                    <p
                      id="list_dore_p"
                      className="d-flex justify-content-center "
                    >
                      20 فصل
                    </p>
                  </div>
                  <div className="col-7 h-100 d-inline-block">
                    <p
                      id="list_dore_p"
                      className="d-flex justify-content-center"
                    >
                      8 ساعت و 50دقیقه
                    </p>
                  </div>
                </div>
                <div className="singel_dore_btn row d-block">
                  <button className="singel_dore_btn btn btn-primary btn-bg mt-xl-2 ">
                    یادگیری را شروع کنید
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="showbtn d-flex">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default List_dore;
