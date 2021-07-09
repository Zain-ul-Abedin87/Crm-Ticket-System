import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import Login from "../Components/Login";
import ResetPassword from "../Components/ResetPassword";
import "./EnteryPage.css";
const EnteryPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setfrmLoad] = useState("login");
  

  const handelChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };
  const handelOnSubmit = (e) => {
    e.preventDefault();
    
    console.log("clicked");
    if (!email || !password) {
      return alert("please Fill Up All feilds");
    }
    setEmail('');
    setPassword('');
  };
  const handelOnResetSubmit= (e)=>{
    e.preventDefault()
    if (!email) {
      return alert("please Fill ");
    }
    console.log("reset now Clicked")
  }
  const formSwitcher = (formType)=>{
    // formType.preventDefault()
      setfrmLoad(formType)
  }
  return (
    <div className="entery-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === "login" && (
          <Login
            handelChange={handelChange}
            handelOnSubmit={handelOnSubmit}
            email={email}
            password={password}
            formSwitcher={formSwitcher}
          />
        )}
        {frmLoad === "reset" && (
          <ResetPassword
            handelChange={handelChange}
            handelOnResetSubmit={handelOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </Jumbotron>
    </div>
  );
};

export default EnteryPage;
