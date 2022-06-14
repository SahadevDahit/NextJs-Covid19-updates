import React, { useState } from "react";
import axios from "axios";
const changepassword = ({ prev }) => {
  const [updatedata, setupdatedata] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const update = (e) => {
    e.preventDefault();

    if (
      updatedata.oldpassword === "" ||
      updatedata.newpassword === "" ||
      updatedata.newpassword !== updatedata.confirmpassword ||
      updatedata.confirmpassword.length < 4
    ) {
      alert(
        "New password and confirmpassword mismatch or password length must be at least"
      );
    } else {
      axios
        .post("https://covid19-updatess.herokuapp.com/changepassword", {
          headers: {
            token: localStorage.getItem("token"),
          },
          updatedata: updatedata,
        })
        .then((response) => {
          alert("passwords updated successfully");
        })
        .catch((error) => {
          console.log(error.message);
          alert("Invalid password or error updating password");
        });
    }
  };
  return (
    <div className="p-3 h-75">
      <form className="form ">
        <div className="mb-2 row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Old Password
            </label>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              type="password"
              onChange={(e) =>
                setupdatedata({ ...updatedata, oldpassword: e.target.value })
              }
              required
              className="form-control"
              id="exampleInputPassword2"
            />
          </div>
        </div>
        <div className="mb-2 row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="exampleInputPassword3" className="form-label">
              New Password
            </label>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              type="password"
              onChange={(e) =>
                setupdatedata({ ...updatedata, newpassword: e.target.value })
              }
              required
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </div>
        <div className="mb-2 row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              type="password"
              onChange={(e) =>
                setupdatedata({
                  ...updatedata,
                  confirmpassword: e.target.value,
                })
              }
              required
              className="form-control"
              id="exampleInputPassword5"
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
                onClick={(e) => {
                  update(e);
                }}
                className="btn btn-primary float-bottom "
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default changepassword;
