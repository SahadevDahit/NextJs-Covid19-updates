import React, { useState } from "react";

const Verifyemail = ({ page, formdata, setformdata }) => {

  return (
    <div style={{ height: "15rem" }}>
      <div className="row g-1 align-items-center">
        <div className="col-auto">
          <label htmlFor="exampleInputEmail1" className="form-label">
            {page == 1
              ? "Enter Verification Code sent to your email"
              : "Enter Veification code sent to your mobile"}
          </label>
          <input
            type="number"
            className="form-control w-26"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(e) => {
              
              page==1? e.target.value == formdata.otp ?  setformdata({ ...formdata,email:{...formdata.email,emailstatus:true}}): setformdata({ ...formdata,email:{...formdata.email,emailstatus:false}}):e.target.value == formdata.otp ?setformdata({ ...formdata,phone:{...formdata.phone,phonenostatus:true}}):     setformdata({ ...formdata,phone:{...formdata.phone,phonenostatus:false}});     
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Verifyemail;
