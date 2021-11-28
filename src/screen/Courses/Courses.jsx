import React, { Fragment, useEffect, useState } from "react";
import style from "./Courses.module.css";
import HeaderAll from "../../components/HeaderAll/HeaderAll";
import FooterAll from "../../components/FooterAll/FooterAll";
import { TermsUser } from "../../core/services/api/CoursesStudent.api";
import _ from "lodash";
import python from "../../Assets/img/python.jpg";
import html from "../../Assets/img/second.jpg";
import golang from "../../Assets/img/third.jpg";
import Pagination from "../../components/Pagination/Pagination";
import Lodding from "../../Assets/LodingSvg/Hourglass.gif";
import Lodding2 from "../../Assets/LodingSvg/l.gif";
import Lodding3 from "../../Assets/LodingSvg/0.gif";
import Lodding4 from "../../Assets/LodingSvg/forever.gif";
import course from "../../screen/Course/Course";
import axios from "axios";
import { Link } from "react-router-dom";
const Courses = () => {
  const [courses, setcours] = useState([]);
  const [index, setindex] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const [loding, setloding] = useState(true);
  const [idTerm, setidTerm] = useState(0);
  let id;

  // filter

  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  const coursSearch = courses.filter((cours) => {
    return Object.keys(cours).some((key) =>
      cours[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const pagination = (countt) => {
    const count = Math.ceil(countt / 6);
    if (count === 1) {
      return null;
    } else {
      const arrycount = _.range(1, count + 1);
      // console.log(arrycount);
      setindex(arrycount);
      return arrycount;
    }
  };
  const handelPageChange = async (pge) => {
    setcurrentpage(pge);
  };

  const getPaginationCours = async () => {
    try {
      setloding(true);
      const res = await TermsUser(currentpage);
      // console.log(res.result.terms);
      if (!(res && res.result)) throw "اطلاعات بر نگشت";
      setcours(res.result.terms);

      pagination(res.result.count);
    } catch (error) {
      console.log(error);
    } finally {
      setloding(false);
    }
  };
  useEffect(() => {
    getPaginationCours();
  }, [currentpage]);

  return (
    <div className={`${style.coursBodyColor}`}>
      <header className={`${style.coursesheader}`}>
        <HeaderAll name="اخبار" link="/blogs">
          <div className={`${style.bottom}`}>
            <h2 className="d-flex justify-content-center">دوره ها</h2>
          </div>
        </HeaderAll>
      </header>

      <div className={`${style.coursescontent} p-4 `}>
        <div
          className={`${style.courserowcontent} row d-flex justify-content-center`}
        >
          <div className={`${style.corsinput}`}>
            <input
              type="text"
              value={filter}
              onChange={searchText}
              className={`${style.filter}`}
              placeholder="جستجو..."
            />
          </div>
          {loding ? (
            <div id={style.lodingHolder}>
              <img className={style.coursesLoding} src={Lodding3}></img>
            </div>
          ) : (
            <>
              {coursSearch.map((cours) => (
                <div
                  className={`${style.courses} col-lg-3 col-md-4 col-sm-6 p-0 m-5`}
                  key={cours._id}
                >
                  <div className={style.third}>
                    <img src={cours.course.image} />
                  </div>
                  <div className={`${style.bg}  mt-4`}>
                    <div className="row m-0 h-50 d-inline-block w-100">
                      <h5 id={style.corsesH5} className="mt-md-4">
                        دوره برنامه نویسی {cours.title}
                      </h5>
                      <p className="text-muted">
                        <span className="text-dark">مدرس:</span>
                        {cours.teacher.fullName}
                      </p>
                    </div>
                    <div className="row p-0 m-0 h-25 d-inline-block w-100">
                      <div className="col-5 h-100 d-inline-block">
                        <p className="d-flex justify-content-center ">
                          {cours.capacity} فصل
                        </p>
                      </div>
                      <div className="col-7 h-100 d-inline-block">
                        <p className="d-flex justify-content-center">
                          4 ساعت و 50دقیقه
                        </p>
                      </div>
                    </div>
                    <div className={`${style.singel_dore_btn} row d-block`}>
                      <Link
                        className={`m-auto btn btn-primary btn-bg mt-xl-2 m-2 `}
                        to={"/course/" + cours._id}
                      >
                        <div>یادگیری را شروع کنید</div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
          <div className="showbtn d-flex">
            <Pagination
              pageSize={index}
              currentpage={currentpage}
              onPageChange={handelPageChange}
            />
          </div>
        </div>
      </div>
      <footer className={`${style.footer}`}>
        <FooterAll />
      </footer>
    </div>
  );
};

export default Courses;
