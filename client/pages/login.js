import React, { useState } from "react";
import Signin from "../components/signin";
import Signup from "../components/signup";
import styles from "../styles/login.module.css";
const Login = () => {
  const [signin, setsignin] = useState(true);
  let signi = () => {
    setsignin(true);
  };
  let signu = () => {
    setsignin(false);
  };
  return (
    <div
      className="container  h-100 d-flex align-items-center justify-content-center "
      id={styles.login}
    >
      <div className="container shadow-lg p-3 mb-3  mx-3 bg-white rounded h-90 w-100 ">
        <div className="row shadow-lg p-3 mb-1 bg-white rounded">
          <div className="col  ">
            <button
              className="btnn shadow-lg  mb-1 bg-white rounded"
              onClick={signi}
            >
              <h3>SIGN IN</h3>
            </button>
          </div>
          <div className="col ">
            <button
              className="btnn shadow-lg  mb-1 bg-white rounded"
              onClick={signu}
            >
              <h3>SIGN UP</h3>
            </button>
          </div>
        </div>
        <div className="row w-100 h-100 two">
          <div className="col  w-100 h-100 colone">
            {signin === true ? <Signin /> : <Signup />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
