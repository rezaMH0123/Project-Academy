import React, { Fragment, useEffect, useState } from "react";
// import style from "./Blogs.css";
import style from "./Blogs2.css";
import HeaderAll from "../../components/HeaderAll/HeaderAll";
import FooterAll from "../../components/FooterAll/FooterAll";
import { SiteBlogs } from "../../core/services/api/Blogs.api";
import { ContactUs } from "../../core/services/api/ContactUs.api";
import _ from "lodash";
import Pagination from "../../components/Pagination/Pagination";
import blog1 from "../../Assets/img/blog1.png";
import blog2 from "../../Assets/img/blog2.JPG";
import blog3 from "../../Assets/img/blog3.png";
import blog4 from "../../Assets/img/blog4.png";
import Lodding3 from "../../Assets/LodingSvg/0.gif";
import blogDetails from "../../screen/BlogDetails/BlogDetails";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setblog] = useState([]);
  const [index, setindex] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const [loding, setloding] = useState(true);
  const [idNews, setidNews] = useState(0);

  // filter
  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  const blogSearch = blogs.filter((blog) => {
    return Object.keys(blog).some((key) =>
      blog[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const pagination = (countt) => {
    const count = Math.ceil(countt / 4);
    if (count === 1) {
      return null;
    } else {
      const arrycount = _.range(1, count + 1);
      setindex(arrycount);
      return arrycount;
    }
  };
  const handelPageChange = async (pge) => {
    setcurrentpage(pge);
  };

  const getPaginationBlog = async () => {
    try {
      setloding(true);
      const res = await SiteBlogs(currentpage);
      // console.log(res.result.newsList);
      if (!(res && res.result)) throw "اطلاعات بر نگشت";

      setblog(res.result.newsList);

      pagination(res.result.count);
    } catch (error) {
      console.log(error);
    } finally {
      setloding(false);
    }
  };
  useEffect(() => {
    getPaginationBlog();
  }, [currentpage]);

  return (
    <div className="kolheader">
      <header className="Bheader">
        <HeaderAll name="دوره ها" link="/courses">
          <div className="bottom">
            <h2 className="d-flex justify-content-center">اخبار و مقالات</h2>
          </div>
        </HeaderAll>
      </header>
      <div className="Bcontent row  d-flex flex-row-reverse">
        <div className="col-lg-4 Bleft">
          <div className="row d-flex align-items-center">
            <div className="filterTop">
              <div className="filterbox">
                <input
                  type="text"
                  value={filter}
                  onChange={searchText}
                  className="filter"
                  placeholder="جستجو..."
                />
              </div>
              <h4 className="mt-2">محبوب ترین ها</h4>
              <a id="a" href="#">
                &raquo; تست نفوذ وب چیست؟
              </a>
              <a id="a" href="#">
                &raquo; بهترین اموزش های سایت
              </a>
            </div>
            <div className="filterBottom">
              <h4 className="mt-2">اخبار ومقالات</h4>
              <a id="a" href="#">
                &raquo; معرفی بهترین کتاب برنامه نویسی{" "}
              </a>
              <a id="a" href="#">
                &raquo; آموزش برنامه نویسی اندروید{" "}
              </a>
              <a id="a" href="#">
                &raquo; آموزش برنامه نویسی پایتون{" "}
              </a>
              <a id="a" href="#">
                &raquo; آموزش برنامه نویسی جاوا{" "}
              </a>
              <a id="a" href="#">
                &raquo; آموزش برنامه نویسی سی شارپ{" "}
              </a>
              <a id="a" href="#">
                &raquo; اخبار آموزش{" "}
              </a>
              <a id="a" href="#">
                &raquo; اخبار ویژه{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-8 Bright">
          {loding ? (
            <div id="lodingHolder" className="d-flex justify-content-center">
              <img className="blogsLoding" src={Lodding3}></img>
            </div>
          ) : (
            <>
              {blogSearch.map((blog) => (
                <div className="row mt-2 d-flex justify-content-start BsingeBlog">
                  <div className="col-5 image mx-md-2 mx-1 h-100 ">
                    <img className="Bimg" src={blog.image} />
                  </div>
                  <div className="col-6 blogmatn mx-md-2 mx-1 h-100  border border-danger">
                    <Link to={"/BlogDetails/" + blog._id}>
                      <h5 className="text-primary ">{blog.title}</h5>
                    </Link>
                    <p id="p1">
                      اردیبهشت 1ام, 1400|راهنمای انتخاب شغل, هوش مصنوعی|0 دیدگاه
                      ها
                    </p>
                    <p className="mt-md-4 mt-md-3">{blog.text}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="showbtn d-flex">
          <Pagination
            pageSize={index}
            currentpage={currentpage}
            onPageChange={handelPageChange}
          />
        </div>
        {/* <div className="row m-xl-5 m-md-3">
          <div className="allBlog col-md-8">
            {loding ? (
              <div id="lodingHolder">
                <img className="blogsLoding" src={Lodding3}></img>
              </div>
            ) : (
              <>
                {blogSearch.map((blog) => (
                  <div
                    className="sibgel_blog mt-3 rounded-3 row w-75"
                    key={blog._id}
                  >
                    <div className="col-6 border p-0">
                      <img
                        className=" rounded-3 w-100 h-100"
                        src={blog.image}
                      />
                    </div>
                    <div className="bog_text col-6">
                      <Link to={"/BlogDetails/" + blog._id}>
                        <h5 className="text-primary ">{blog.title}</h5>
                      </Link>
                      <p id="p1">
                        اردیبهشت 1ام, 1400|راهنمای انتخاب شغل, هوش مصنوعی|0
                        دیدگاه ها
                      </p>
                      <p className="mt-md-4 mt-md-3">{blog.text}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="col-md-4 col-4 side-bar">
            <div className="Bcontainer container h-100">
              <div className="row sb_row1 mt-3 m-auto rounded-3">
                <div className="filterbox">
                  <input
                    type="text"
                    value={filter}
                    onChange={searchText}
                    className="filter"
                    placeholder="جستجو..."
                  />
                </div>
                <h4 className="mt-2">محبوب ترین ها</h4>
                <a id="a" href="#">
                  &raquo; تست نفوذ وب چیست؟{" "}
                </a>
              </div>
              <div className="row sb_row2 mt-3 m-auto rounded-3">
                <h4 className="mt-2">اخبار ومقالات</h4>
                <a id="a" href="#">
                  &raquo; معرفی بهترین کتاب برنامه نویسی{" "}
                </a>
                <a id="a" href="#">
                  &raquo; آموزش برنامه نویسی اندروید{" "}
                </a>
                <a id="a" href="#">
                  &raquo; آموزش برنامه نویسی پایتون{" "}
                </a>
                <a id="a" href="#">
                  &raquo; آموزش برنامه نویسی جاوا{" "}
                </a>
                <a id="a" href="#">
                  &raquo; آموزش برنامه نویسی سی شارپ{" "}
                </a>
                <a id="a" href="#">
                  &raquo; اخبار آموزش{" "}
                </a>
                <a id="a" href="#">
                  &raquo; اخبار ویژه{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="showbtn d-flex">
            <Pagination
              pageSize={index}
              currentpage={currentpage}
              onPageChange={handelPageChange}
            />
          </div>
        </div> */}
      </div>

      <footer className="Bfooter">
        <FooterAll />
      </footer>
    </div>
  );
};

export default Blogs;
