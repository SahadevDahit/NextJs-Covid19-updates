import React, { useState, useEffect, useMemo } from "react";
import Basicdetail from "./signup/basic-details";
import Verify from "./signup/verify-email-phone";
import PhoneVerify from "./signup/phone-verification";
import Finalstep from "./signup/final-step";
import axios from "axios";

const Signup = () => {
  const [page, setpage] = useState(0);
  const [formdata, setformdata] = useState({
    fname: "",
    mname: "",
    lname: "",
    country: "",
    gender: "",
    dob: {
      day: "",
      month: "",
      year: "",
    },
    email: {
      emailaddress: "",
      emailstatus: false,
    },
    password: "",
    phone: {
      phoneno: "",
      phonenostatus: false,
    },
    otp: "",
  });

  const skip = () => {
    setpage((page = page + 2));
  };
  const signupcomponent = [
    <Basicdetail formdata={formdata} setformdata={setformdata} />,
    <Verify page={page} formdata={formdata} setformdata={setformdata} />,
    <PhoneVerify formdata={formdata} setformdata={setformdata} skip={skip} />,
    <Verify page={page} formdata={formdata} setformdata={setformdata} />,
    <Finalstep formdata={formdata} setformdata={setformdata} />,
  ];

  const next = () => {
    if (page == 0) {
      if (
        formdata.fname !== "" &&
        (formdata.lname !== "" &&
          formdata.country !== "" &&
          formdata.gender !== "" &&
          formdata.emailaddress !== "" &&
          formdata.password !== "" &&
          formdata.password.length > 5)
      ) {
        axios
          .post("https://covid19-updatess.herokuapp.com/checkuser", { formdata: formdata })
          .then((res) => {
            axios
              .post("https://covid19-updatess.herokuapp.com/sendmail", { email: `${formdata.email.emailaddress}` })
              .then((response) => {
                setformdata({ ...formdata, otp: response.data });
                setpage(page + 1);
              })
            .catch((error) => console.log(error.message));
          })
          .catch((error) => {
            alert("user already exist");
          });
      } else {
        alert(
          "Please fill the form or password must be at greater than 5 character"
        );
      }
    } else if (page === 1) {
      if (formdata.email.emailstatus === true) {
        setpage(page + 1);
      } else {
        alert("Please enter a valid otp sent to your email");
      }
    } else if (page === 2) {
      axios
        .post("https://covid19-updatess.herokuapp.com/sendotp", {
          phone: `${formdata.phone.phoneno}`,
        })
        .then((response) => {
          setformdata({ ...formdata, otp: response.data });
          setpage(page + 1);
        })
        .catch((error) => console.log(error.message));
    } else if (page == 3) {
      if (formdata.phone.phonenostatus == false) {
        alert("Please enter a valid otp sent to your phone");
      } else {
        setpage(page + 1);
      }
    } else if (page === signupcomponent.length - 1) {
      axios
        .post("https://covid19-updatess.herokuapp.com/createuser", { formdata: formdata })
        .then((response) => {
          alert("Sucessfully created");
          setpage(0);
        })
        .catch((error) => {
          alert("user already exist");
          setpage(0);
        });
    } else {
      setpage(page + 1);
    }
  };
  const prev = () => {
    if (page === signupcomponent.length - 1) {
      setpage((page = page - 2));
    } else {
      setpage((page = page - 1));
    }
  };

  return (
    <>
      <div className="w-100 h-100">
        <div className="container w-100">{signupcomponent[page]}</div>

        <div className="pt-3 w-100 h-100 d-flex justify-content-around align-items-center ">
          <div className="back">
            <button
              className="btn btn-primary"
              disabled={page === 0}
              onClick={prev}
            >
              Back
            </button>
          </div>
          <div className="next">
            <button className="btn btn-primary" disabled={false} onClick={next}>
              {page == signupcomponent.length - 1
                ? "Finish"
                : page == 1
                ? "Verify"
                : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
