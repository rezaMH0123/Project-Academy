import React, { Fragment, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import style from "./NewUserPanel.css";
import userimg from "../../Assets/img/programmer.png";
import userimg1 from "../../Assets/img/man.png";
import userimg2 from "../../Assets/img/profile.png";
import Singel_dore from "../../components/Singel_dore/Singel_dore";
import UsserMassage from "../../components/UserMassage/UserMassage";
import Lodding3 from "../../Assets/LodingSvg/0.gif";
import userDashboard from "../../Assets/img/userPanelicon/review (1).png";
import userDashboard1 from "../../Assets/img/userPanelicon/review.svg";
import userprofile from "../../Assets/img/userPanelicon/user.svg";
import userlist from "../../Assets/img/userPanelicon/list.svg";
import usermessage from "../../Assets/img/userPanelicon/message.svg";
import telegram from "../../Assets/img/userPanelicon/telegram.svg";
import exit from "../../Assets/img/userPanelicon/exit.svg";
import cup from "../../Assets/img/userPanelicon/cup.svg";
import message2 from "../../Assets/img/userPanelicon/message2.svg";
import gift from "../../Assets/img/userPanelicon/giftbox.svg";
import file from "../../Assets/img/userPanelicon/file.svg";
import shopping from "../../Assets/img/userPanelicon/shopping.svg";
import { getItem } from "../../core/services/storage/storage";
import UserProfile from "../../components/UserProfile/UserProfile";
import { Link, Route, Switch, useParams, Redirect } from "react-router-dom";
import { useState } from "react";
import { panelGetId } from "../../core/services/api/panel.stuBYid.api";
import Modal from "react-bootstrap/Modal";

const NewUserPanel = () => {
  const usr = getItem("user");
  const [activ, setactiv] = useState(1);
  const [termnumber, settermnumber] = useState(null);
  const [loding, setloding] = useState(true);
  const [selectedFile, setSelectedFile] = useState(userimg2);
  const [myitem, setmyitem] = useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const history = useHistory();
  const [userinfo, setuserinfo] = useState({
    name: "",
    nationalId: "",
    phoneNumber: "",
    birthDate: "",
    email: ""
  });

  const imghandler = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setSelectedFile(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  const userByid = async () => {
    const res = await panelGetId(usr._id);
    setuserinfo({
      name: res.result.fullName,
      nationalId: res.result.nationalId,
      phoneNumber: res.result.phoneNumber,
      birthDate: res.result.birthDate,
      email: res.result.email
    });
    try {
      setloding(true);
      const res = await panelGetId(usr._id);
      setmyitem(res.result.terms);
      if (!(res && res.result)) throw "اطلاعات بر نگشت";
      settermnumber(res.result.terms.length);
    } catch (error) {
      console.log(error);
    } finally {
      setloding(false);
    }
  };
  const get_membership_distance = () => {
    const registerDate = usr.registerDate;
    let s = registerDate.split("-");
    let dey = s[2].split(":")[0].split("T")[0];
    let newDate = new Date();
    let date_raw = newDate.getDate();
    let month_raw = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let Membership =
      (parseInt(year) - parseInt(s[0])) * 365 +
      (parseInt(month_raw) - parseInt(s[1])) * 30 +
      (parseInt(date_raw) - parseInt(dey));
    return Membership;
  };
  const items = [
    { id: 1, url: "dashbord", titel: "داشبورد کاربر", img: userDashboard1 },
    { id: 2, url: "profile", titel: "ویرایش پروفایل", img: userprofile },
    { id: 3, url: "list", titel: "خرید های من", img: userlist },
    { id: 4, url: "message", titel: "پیام های من", img: usermessage },
    {
      id: 5,
      url: "https://t.me/RezaMh0123",
      titel: "پشتیبانی تلگرامی",
      img: telegram
    },
    { id: 6, url: "exit", titel: "خروج", img: exit }
  ];
  const checkActiv = (item) => {
    setactiv(item.id);
    if (item.id === 5) {
      console.log(item.url);
      window.location.href = item.url;
    } else {
      history.push("/np/" + item.url);
    }
  };
  const exithandler = () => {
    history.push("/");
    localStorage.clear();
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModalCancel = () => {
    setIsOpen(false);
  };
  const hideModalOk = (item) => {
    setactiv(item.id);
    setIsOpen(false);
    exithandler();
  };

  useEffect(() => {
    userByid();
  }, []);

  return (
    <div className="All container-fluid d-flex align-items-center  justify-content-center">
      {loding ? (
        <div id="lodingHolder">
          <img className="coursesLoding" src={Lodding3}></img>
        </div>
      ) : (
        <div id="row_all" className="row w-100">
          <div id="backlanding" className="col">
            <Link id="a_in_link" to="/">
              بازگشت به خانه
            </Link>
          </div>
          <div className="panel_right col-md-3 col-xl-2 p-3">
            <div className="dashbord ">
              <div className="dashbord_top h-25 d-flex justify-content-center align-items-center">
                <div className="user_img rounded-circle">
                  <img src={selectedFile} />
                </div>
              </div>

              <div className="dashbord_bottom h-75 p-2">
                {items.map((item) => (
                  <div key={item.id}>
                    {item.id === 6 ? (
                      <div onClick={() => showModal()}>
                        <div
                          id={item.id === 1 ? "item1" : ""}
                          className={
                            item.id === activ
                              ? "Uactiv dashbord_item"
                              : "dashbord_item"
                          }
                        >
                          <div className="right w-25 h-100">
                            <img src={item.img} />
                          </div>
                          <div className="left w-75 h-100">{item.titel}</div>
                        </div>
                      </div>
                    ) : (
                      <div onClick={() => checkActiv(item)}>
                        <div
                          id={item.id === 1 ? "item1" : ""}
                          className={
                            item.id === activ
                              ? "Uactiv dashbord_item"
                              : "dashbord_item"
                          }
                        >
                          <div className="right w-25 h-100">
                            <img src={item.img} />
                          </div>
                          <div className="left w-75 h-100">{item.titel}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="panel_left col-md-9 col-xl-10">
            <Switch>
              <Route path="/np/dashbord">
                <div className="dashbord_top row p-4">
                  <h4>خوش آمدید{userinfo.name}</h4>
                </div>
                <div className="dashbord_center row">
                  <div className="dashbord_info container">
                    <div className="row h-50 d-flex justify-content-center align-items-center">
                      <div className="col-md-3 col-12  d_item pt-2 mx-lg-3 mx-md-2">
                        <div className="_1 d_item_top row m-auto">
                          <img src={cup} />
                        </div>
                        <div className="d_item_top row h-50 m-auto ">
                          <div className="">
                            <p className="item_p mt-2">سابقه عضویت</p>
                          </div>
                          <div className="row m-auto">
                            <p className="span_value">
                              {get_membership_distance()} روز
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-12  d_item pt-2  mx-lg-3 mx-md-2">
                        <div className="_2 d_item_top row border border-warning m-auto">
                          <img src={message2} />
                        </div>
                        <div className="d_item_top row h-50 m-auto">
                          <div className="row m-auto">
                            <p className="item_p mt-2">نظرات شما</p>
                          </div>
                          <div className="row m-auto">
                            <p className="span_value">0</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-12  d_item pt-2  mx-lg-3  mx-md-2">
                        <div className="_1 d_item_top row border border-info m-auto">
                          <img src={file} />
                        </div>
                        <div className="d_item_top row h-50 m-auto">
                          <div className="row m-auto">
                            <p className="item_p mt-2">فایل های موجود</p>
                          </div>
                          <div className="row m-auto">
                            <p className="span_value">{termnumber}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row  h-50 d-flex justify-content-center align-items-center">
                      <div className="col-md-3 col-12  d_item d_item_2 pt-2  mx-lg-3 mx-md-2">
                        <div className="_3 d_item_top row  m-auto">
                          <img src={shopping} />
                        </div>
                        <div className="d_item_top row h-50 m-auto">
                          <div className="row m-auto">
                            <p className="item_p mt-2">تعداد خرید شما</p>
                          </div>
                          <div className="row m-auto">
                            <p className="span_value">{termnumber}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7 col-12 d_item d_item_2 pt-2  mx-lg-3  mx-md-2">
                        <div className="_4 d_item_top row m-auto">
                          <img src={gift} />
                        </div>
                        <div className="d_item_top row h-50 m-auto">
                          <div className="row m-auto">
                            <p className="item_p mt-2">
                              کد تخفیف 20% برای خرید بعدی شما
                            </p>
                          </div>
                          <div className="row m-auto">
                            <p className="span_value">کد تخفیف : mh_imany</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashbord_bottom row d-flex justify-content-center align-items-center">
                  <div className="row warning bg-success rounded-3 align-items-center">
                    اطلاعیه اول :همین حالا از ما 20% تخفیف دریافت کن.
                  </div>
                  <div className="row warning bg-danger rounded-3 align-items-center">
                    اطلاعیه دوم : با کلیک کردن اپلیکیشن موبایل مارا دانلود کنید.
                  </div>
                </div>
              </Route>
              <Route path="/np/profile">
                <div className="container h-75">
                  <div className="row h-25">
                    <div className="col-lg-2 h-100 col-md-3 col-4  profile_img">
                      <img className="chengeimg" src={selectedFile} />
                    </div>
                    <div className="col-lg-7 h-100 col-md-7 col-8">
                      <div className="row h-50">
                        <label
                          htmlFor="files"
                          className="btn btn-info updateimg d-flex justify-content-center align-items-center"
                        >
                          ویرایش عکس
                        </label>
                        <input
                          id="files"
                          style={{ visibility: "hidden" }}
                          type="file"
                          accept="image/*"
                          onChange={imghandler}
                        />
                      </div>
                      <div className="row h-50">
                        <button
                          type="button"
                          className="btn btn-danger deleteimg d-flex justify-content-center align-items-center"
                          onClick={() => {
                            setSelectedFile(userimg2);
                          }}
                        >
                          <p>حذف</p>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row h-75 change_prof">
                    <UserProfile userinfo={userinfo} id={usr._id} />
                  </div>
                </div>
              </Route>
              <Route path="/np/list">
                <div className="medore">
                  <div className="container">
                    <div className="singel_row row mt-5 mb-4 justify-content-around">
                      {myitem.map((item) => (
                        <Singel_dore
                          img={item.course.image}
                          courseName={item.course.courseName}
                          _id={item.course._id}
                          key={item._id}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="showbtn d-flex">
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill m-auto p-sm-2"
                    >
                      مشاهده دورا ها
                    </button>
                  </div>
                </div>
              </Route>
              <Route path="/np/message">
                <UsserMassage />
              </Route>
              <Route path="/np/exit"></Route>
              <Redirect exact from="/np" to="/NP/dashbord" />
              <Redirect from="/np/exit" to="/" />
            </Switch>
          </div>
        </div>
      )}
      <Modal show={isOpen} onHide={hideModalCancel}>
        <Modal.Body className="bg bg-warning">
          آیا به خارج شدن از پنل خود اطمینان داری؟
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={hideModalCancel}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={hideModalOk}>
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewUserPanel;
