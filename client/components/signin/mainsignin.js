import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const mainsignin = ({ forgot, change }) => {
  const [signindata, setsignindata] = useState({
    emailaddress: "",
    password: "",
  });

  const notify = (e) => {
    e.preventDefault();
    toast("Wow so easy!");
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const signin = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://covid19-updatess.herokuapp.com/signin",
        {
          signindata: signindata,
        },
        config
      )
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          alert("successfully logged in");
        }
      })
      .catch((error) => {
        console.log(error.message);
        alert("Invalid email or password");
      });
  };

  return (
    <div className="p-3 h-75">
      <form className="form ">
        <div className="mb-3 row">
          <div className="col-lg-6 col-md-6 col-sm-12 p-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <input
              onChange={(e) =>
                setsignindata({ ...signindata, emailaddress: e.target.value })
              }
              type="email"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <label htmlFor="exampleInputPassword3" className="form-label">
              Password
            </label>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <input
              onChange={(e) =>
                setsignindata({ ...signindata, password: e.target.value })
              }
              type="password"
              className="form-control"
              id="exampleInputPassword4"
            />
          </div>
        </div>

        <div className="d-flex align-items-center align-content-center justify-content-end">
          <ul className="">
            <li>
              <u>
                {" "}
                <p onClick={forgot}> Forgot Password</p>
              </u>
            </li>
            <li>
              <u>
                {" "}
                <p onClick={change}> Change Password</p>
              </u>
            </li>
          </ul>
        </div>
        <div className="pt-5 d-flex justify-content-center align-items-center justify-content-between">
          <div className="">
            <button
              type="submit"
              onClick={(e) => {
                notify(e);
                signin(e);
              }}
              className="btn btn-primary float-bottom "
            >
              Signin
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default mainsignin;
