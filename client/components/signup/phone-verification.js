import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Phoneverification = ({ skip, formdata, setformdata }) => {
  const [value, setValue] = useState();

  return (
    <div style={{ height: "15rem" }}>
      <div className="row g-1 align-items-center">
        <div className="col-auto">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Phone Number
          </label>
        </div>
        <div className="col-auto">
          <PhoneInput
            country={"us"}
            value={value}
            onChange={(phone) => {
              setformdata({
                ...formdata,
                phone: { ...formdata.phone, phoneno: `+${phone}` },
              });
            }}
          />
        </div>
       <h4>This is trial version soo phone authentication is not available so skip</h4>
        <u>  <p onClick={skip}>Skip</p></u>
       
      </div>
    </div>
  );
};

export default Phoneverification;
