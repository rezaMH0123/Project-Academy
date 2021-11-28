import "./App.css";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Login from "../screen/Login/Login";
import Register from "../screen/Register/Register";
import Errorr from "../screen/Error/Error";
import ForgetPassword from "../screen/ForgetPassword/ForgetPassword";
import Landing from "../screen/Landing/Landing";
import HeaderAll from "../components/HeaderAll/HeaderAll";
import FooterAll from "../components/FooterAll/FooterAll";
import Course from "../screen/Course/Course";
import UserPanel from "../screen/UserPanel/UserPanel";
import Blogs from "../screen/Blogs/Blogs";
import Courses from "../screen/Courses/Courses";
import NewUserPanel from "../screen/NewUserPanel/NewUserPanel";
import BlogDetails from "../screen/BlogDetails/BlogDetails";
import "aos/dist/aos.css";
import { Switch, Route, Redirect } from "react-router-dom";
export const context = React.createContext();

function App() {
  const [animate, setanimate] = useState(true);
  console.log("app run");
  const setAnimateToFalse = () => {
    setanimate(false);
    // console.log("landing animate false");
  };
  return (
    <context.Provider value={{ animate, setAnimateToFalse }}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/404" component={Errorr} />
        <Route path="/HeaderAll" component={HeaderAll} />
        <Route path="/FooterAll" component={FooterAll} />
        <Route path="/Header" component={Header} />
        <Route path="/profile" component={UserPanel} />
        <Route path="/NP" component={NewUserPanel} />
        <Route path="/ForgetPassword" component={ForgetPassword} />
        <Route path="/Course/:id" component={Course} />
        <Route path="/Blogs" component={Blogs} />
        <Route path="/Courses" component={Courses} />
        <Route path="/BlogDetails/:id" component={BlogDetails} />
        <Redirect to="/404" />
      </Switch>
    </context.Provider>
  );
}

export default App;
