import React, { Fragment, useEffect, useContext } from "react";
import AOS from "aos";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
// import { ContactUs } from "../../core/services/api/ContactUs.api";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./Landing.css";
import cumputergirl from "../../Assets/img/27.png";
import servispng from "../../Assets/img/servispng.png";
import grup1 from "../../Assets/img/Group1.png";
import grup2 from "../../Assets/img/Group2.png";
import grup3 from "../../Assets/img/Group3.png";
import grup4 from "../../Assets/img/Grup4.png";
import techer1 from "../../Assets/img/Untitled2.png";
import techer2 from "../../Assets/img/Untitled3.png";
import techer3 from "../../Assets/img/Untitled1.png";
import techer4 from "../../Assets/img/Untitled4.png";
import techer5 from "../../Assets/img/Untitled5.png";
import news1 from "../../Assets/img/news1.png";
import news2 from "../../Assets/img/news2.png";

import instagram from "../../Assets/img/instagram.png";
import twitter from "../../Assets/img/twitter.png";
import facebook from "../../Assets/img/face.png";
import { TextAnimation } from "../../components/Animation/animation";
import { context } from "../../app/App";
const Landing = () => {
  const contextAnimate = useContext(context);
  const initialValues = {
    email: "",
    name: "",
    text: ""
  };
  const firstsee = () => {
    var element = document.getElementsByClassName("hellow");
    element[0].classList.add("clearHellow");
    document.getElementsByClassName("height0")[0].classList.add("all");
    document.getElementsByClassName("bittobit")[0].classList.add("height0");
  };
  useEffect(() => {
    if (contextAnimate.animate === true) {
      setTimeout(() => {
        firstsee();
        contextAnimate.setAnimateToFalse();
      }, 6000);
    } else {
      var element = document.getElementsByClassName("hellow");
      element[0].classList.add("clearHellow");
      document.getElementsByClassName("height0")[0].classList.add("all");
      document.getElementsByClassName("bittobit")[0].classList.add("height0");
    }
  });
  useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 2000 });
    }, 9000);
  }, []);

  return (
    <Formik>
      <Fragment>
        <div className="hellow d-flex justify-content-center align-items-center">
          <div className="bittobit d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col h-100 mx-2 d-flex justify-content-center align-items-center">
                <TextAnimation />
              </div>
            </div>
          </div>
        </div>
        <div className="height0">
          <header className="">
            <Header />
          </header>
          <div className="colector">
            <div className="d1">
              <div className="left">
                <div className="img">
                  <img src={cumputergirl} alt="png" />
                </div>
              </div>
              <div className="right">
                <div className="describe">
                  <p data-aos="zoom-in" className="top">
                    بیایید پر قدرت شروع کنید{" "}
                  </p>
                  <p>
                    در این پژوهشگاه در مراحل آموزش کارهای عملی زیادی انجام
                    خواهید داد. نمونه کارهای شخصی خود را خواهید داشت
                  </p>
                  <p>
                    ما با افراد مستعد و متخصص که علاقه زیادی برای به اشتراک
                    گذاشتن تخصص خود به شما دارند، کار میکنیم. همه این افراد فعال
                    حوزه IT هستند و از جدیدترین فناوری ها اطلاع دارند. ما به شدت
                    خواهان پیشرفت شما هستیم
                  </p>

                  <NavLink to="/register">
                    <div className="sdore">ثبت نام دوره</div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="d2">
              <div className="top">
                <span>خدمات ما</span>
              </div>
              <div className="left">
                <div data-aos="fade-down" className="Consulting">
                  <span className="number">1.</span>
                  <span>مشاوره</span>
                  <p>مشاوره جهت انتخاب بهترین مسیر</p>
                </div>
                <div data-aos="fade-up" className="job">
                  <span className="number">5.</span>
                  <span>فرصت شغلی</span>
                  <p>فراهم کردن فرصت شغلی پس از پایان دوره</p>
                </div>
                <div className="test">
                  <span>3.</span>
                  <span>آزمون</span>
                  <p>آزمون پایان آموزش</p>
                </div>
                <div data-aos="fade-left" className="Education">
                  <span className="number">2.</span>
                  <span>تحصیل</span>
                  <p>فراهم کردن شرایط برای آموزش</p>
                </div>
                <div data-aos="fade-right" className="Evidence">
                  <span className="number">4.</span>
                  <span>مدرک معتبر</span>
                  <p>ارائه مدرک معتبر پس از قبولی در آزمون</p>
                </div>
              </div>
              <div className="right">
                <img src={servispng} />
              </div>
            </div>
            <div className="d3">
              <div className="top">دسته بندی ها</div>
              <div className="d-flex align-items-center justify-content-center bottom">
                <div
                  data-aos="fade-down"
                  className="m-xl-5 m-lg-4 m-md-3 m-sm-2"
                >
                  <NavLink className={style.navlink1} to="/Dastebandi">
                    <img src={grup1} />
                    <p>میدل</p>
                  </NavLink>
                </div>
                <div data-aos="fade-up" className="m-xl-5 m-lg-4 m-md-3 m-sm-2">
                  <NavLink className={style.navlink1} to="/Dastebandi">
                    <img src={grup2} />
                    <p>بک</p>
                  </NavLink>
                </div>
                <div
                  data-aos="fade-down"
                  className="m-xl-5 m-lg-4 m-md-3 m-sm-2"
                >
                  <NavLink className={style.navlink1} to="/Dastebandi">
                    <img src={grup3} />
                    <p>فرانت</p>
                  </NavLink>
                </div>
                <div data-aos="fade-up" className="m-xl-5 m-lg-4 m-md-3 m-sm-2">
                  <NavLink className={style.navlink1} to="/Dastebandi">
                    <img src={grup4} />
                    <p>هوش مصنوعی</p>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="d4 border border-light  ">
              <div className="top">
                <span>دوره ها</span>
              </div>
              <div className="all_dore">
                <div className="row h-75">
                  <div
                    className="col-sm-3 dore-col d-flex justify-content-center align-items-center
                   "
                  >
                    <div className="dore">
                      <h1>html/css</h1>
                      <p>
                        در فارسی به آن زبان نشانه‌ گذاری می‌گویند. دقت کنید که
                        زبان برنامه نویسی نیست، بلکه یک زبان نشان‌ گذاری یا
                        ابرمتن حساب می‌آید
                      </p>
                      <a href="#">
                        <div className="sdore">
                          <Link to="/Courses">جزئیات دوره و خرید</Link>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-sm-3 dore-col d-flex justify-content-center align-items-center
                   "
                  >
                    <div className="dore">
                      <h1>javascript</h1>
                      <p>
                        یکی از محبوبترین زبان‌های برنامه نویسی است. جاوا اسکریپت
                        زبانی سطح بالا، داینامیک، شی‌گرا و تفسیری است که از
                        شیوه‌های مخت لف برنامه نویسی پشتیبانی می‌کند.
                      </p>
                      <a href="#">
                        <div className="sdore">
                          <Link to="/Courses">جزئیات دوره و خرید</Link>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-sm-3 dore-col d-flex justify-content-center align-items-center
                   "
                  >
                    <div className="dore">
                      <h1>python</h1>
                      <p>
                        زبانی با یادگیری آسان محسوب می‌شود و از همین رو بسیاری
                        از برنامه‌نویس‌های تازه‌کار آن را به عنوان اولین زبان
                        برنامه‌ نویسی خود برمی‌گزینند
                      </p>
                      <a href="#">
                        <div className="sdore">
                          <Link to="/Courses">جزئیات دوره و خرید</Link>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-sm-3 dore-col d-flex justify-content-center align-items-center
                   "
                  >
                    <div className="dore">
                      <h1>Golang</h1>
                      <p>
                        یک زبان برنامه‌نویسی ترجمه‌شده و دارای زباله جمع‌کن و
                        همروند است که در شرکت گوگل و توسط رابرت گریسیمر، راب
                        پایک و کن تامپسون
                      </p>
                      <a href="#">
                        <div className="sdore">
                          <Link to="/Courses">جزئیات دوره و خرید</Link>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d5">
              <div className="top mb-5">
                <span>اساتید برتر</span>
                <p>اساتید متخصص ما تا همیشه در کنار شما خواهند ماند</p>
              </div>
              <div className="best_teacher">
                <div className="teacher t1">
                  <img src={techer1} />
                  <span>محسن</span>
                </div>
                <div className="teacher t2">
                  <img src={techer2} />
                  <span>مهدی</span>
                </div>
              </div>
              <div className="best_teacher">
                <div className="teacher t3">
                  <img src={techer3} />
                  حامد نظری
                </div>
                <div className="teacher t4">
                  <img src={techer4} />
                  سالار
                </div>
              </div>
              <div className="best_teacher t">
                <div className="teacher t5">
                  <img src={techer5} />
                  دکتر محمد بحر العلوم
                </div>
              </div>
            </div>
            <div className="d6">
              <div className="top">اخبار و مقالات</div>
              <div className="left">
                <div className="d6leftimg ">
                  <img src={news1} />
                </div>
                <div className="text">
                  <span>3.</span>
                  <h3>شروع دوره های جدید برنامه نویسی</h3>
                  <p>
                    دوره جدید آموزش برنامه نویسی در بهار سال آینده
                    <br /> برگزار خواهد شد.
                  </p>
                </div>
                <div className="text">
                  <span>4.</span>
                  <h3>شروع دوره های جدید برنامه نویسی</h3>
                  <p>
                    دوره جدید آموزش برنامه نویسی در بهار سال آینده
                    <br /> برگزار خواهد شد.
                  </p>
                </div>
              </div>
              <div className="right">
                <div className="text">
                  <span>1.</span>
                  <h3>جدیدترین متد آموزش برنامه نویسی</h3>
                  <p>
                    روشی کارآمد و موثر برای یادگیری زبان های
                    <br />
                    برنامه نویسی با جدیدترین متد
                  </p>
                </div>
                <div className="text">
                  <span>2.</span>
                  <h3>جدیدترین متد آموزش برنامه نویسی</h3>
                  <p>
                    روشی کارآمد و موثر برای یادگیری زبان های
                    <br />
                    برنامه نویسی با جدیدترین متد
                  </p>
                </div>
                <div className="d6rightimg">
                  <img src={news2} />
                </div>
              </div>
            </div>

            <div className="d7">
              <div className="left">
                <form action="#">
                  <input type="text" placeholder="نام" />
                  <input type="email" placeholder="ایمیل*" />
                  <textarea cols="52" rows="2" placeholder="پیام"></textarea>
                  <input type="submit" value="ثبت"></input>
                </form>
              </div>
              <div className="right">
                <div>
                  <p>دوست دارید چه زبانی یاد بگیرید</p>
                  <p>امروز یادگیری را شروع کنید!</p>
                  <p>
                    در خانه یا شرکت کار کنید.صبح یا شب کد بنویسید
                    <br />و یک فریلنسر شوید شما فقط تصمیم بگیرید
                  </p>
                </div>
              </div>
            </div>
          </div>
          <footer id="foter">
            <Footer />
          </footer>
        </div>
      </Fragment>
    </Formik>
  );
};

export default Landing;
