import React, { useState } from "react";
import axios from "axios";
const forgot = ({ prev }) => {
  const [emailaddress, setemailaddress] = useState(null);

  const forgot = (e) => {
    e.preventDefault();
    if (emailaddress !== null) {
      axios
        .post("https://covid19-updatess.herokuapp.com/forgotpassword", {
          email: emailaddress,
        })
        .then((response) => {
          alert("Your password is sucessfully sent to your email address");
        })
        .catch((error) => {
          console.log(error.message);
          alert("Provide valid email or Error occur");
        });
    } else {
      alert("Please Enter your email address");
    }
  };
  return (
    <div className="pt-6 h-75">
      <form className="form mt-5">
        <div className="mb-3 row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Emailaddress
            </label>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              type="email"
              onChange={(e) =>
                setemailaddress({ emailaddress: e.target.value })
              }
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between pt-3">
          <div>
            <div className="">
              <button
                type="button"
                onClick={prev}
                className="btn btn-primary float-bottom "
              >
                Back
              </button>
            </div>
          </div>
          <div>
            <div className="">
              <button
                type="submit"
                onClick={(e) => forgot(e)}
                className="btn btn-primary float-bottom "
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default forgot;
