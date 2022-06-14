import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";

const Basicdetail = ({ formdata, setformdata }) => {
  const [y, sety] = useState("");
  const [selected, setSelected] = useState("");
  const [m, setm] = useState("");
  const [days, setdays] = useState([]);
  const [months, setmonth] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const year = [];

  let years = new Date().getFullYear();
  for (let i = 0; i <= 101; i += 1) {
    year.push(years - i);
  }

  const populatedays = (month) => {
    let dayNum;
    if (
      month === "January" ||
      month === "March" ||
      month === "May" ||
      month === "July" ||
      month === "August" ||
      month === "October" ||
      month === "December"
    ) {
      dayNum = 31;
    } else if (
      month === "April" ||
      month === "June" ||
      month === "September" ||
      month === "November"
    ) {
      dayNum = 30;
    } else {
      //Check for a leap year
      if (new Date(y, 1, 29).getMonth() === 1) {
        console.log("leap year");
        dayNum = 29;
      } else {
        dayNum = 28;
      }
    }
    days = [];

    for (let i = 1; i <= dayNum; i += 1) {
      days.push(i);
    }
  };
  populatedays(m);

  return (
    <>
      <div className=" container w-100 h-100 g-3">
        <div className="row flex">
          <div className="col-md-4 col-sm-12 h-100">
            <label htmlFor="inputEmail4" className="form-label">
              FName
            </label>
            <input
              type="text"
              value={formdata.fname}
              onChange={(e) =>
                setformdata({ ...formdata, fname: e.target.value })
              }
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <label htmlFor="inputPassword3" className="form-label">
              MName
            </label>
            <input
              type="text"
              value={formdata.mname}
              onChange={(e) =>
                setformdata({ ...formdata, mname: e.target.value })
              }
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <label htmlFor="inputPassword5" className="form-label">
              LName
            </label>
            <input
              type="text"
              value={formdata.lname}
              onChange={(e) =>
                setformdata({ ...formdata, lname: e.target.value })
              }
              className="form-control"
              id="inputPassword6"
            />
          </div>
        </div>
        <div className="row py-3">
          <div className="col-xl-6 col-sm-12">
            <div className="form-check">
              <label className="form-check-label" htmlFor="gridCheck">
                Nationlity
              </label>
              <ReactFlagsSelect
                 selected={formdata.country}
                onSelect={(code) => {
                  setformdata({ ...formdata, country: code });
                  setSelected(code);
                }}
              />
            </div>
          </div>

          <div className="d-lg-flex d-md-flex d-sm-block align-items-center justify-content-around">
            <label htmlFor="inputAddress" className="col-me-4 form-label">
              Gender
            </label>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                onChange={(e) =>
                  setformdata({
                    ...formdata,
                    gender: e.target.value,
                  })
                }
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="male"
                checked={formdata.gender === "male" ? true : false}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check col-ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={(e) =>
                  setformdata({
                    ...formdata,
                    gender: e.target.value,
                  })
                }
                value="female"
                checked={formdata.gender === "female" ? true : false}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) =>
                  setformdata({
                    ...formdata,
                    gender: e.target.value,
                  })
                }
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="other"
                checked={formdata.gender === "other" ? true : false}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Other
              </label>
            </div>
          </div>
        </div>

        <div className="row container pt-3 ">
                        <p>DOB</p>
                            <div className="col-lg-4 col-md-4 col-sm-12 p-2">
                            <select
                                className="form-select form-select-md mb-3 "
                                aria-label="Default select example"
                                value={formdata.dob.day}
                                onChange={(e) => {
                                  setformdata({
                                    ...formdata,
                                    dob: {
                                      ...formdata.dob,
                                      day: e.target.value,
                                    },
                                  });
                                }}
                              >
                                {days.map((value) => {
                                  return (
                                    <option key={value} value={value}>
                                      {value}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                             <div className="col-lg-4 col-md-4 col-sm-12 p-2">
                             <select
                                className="form-select form-select-md mb-3  "
                                aria-label="Default select example"
                                value={formdata.dob.month}
                                onChange={(e) => {
                                  setformdata({
                                    ...formdata,
                                    dob: {
                                      ...formdata.dob,
                                      month: e.target.value,
                                    },
                                  });
                                  setm(e.target.value);
                                  populatedays(m);
                                }}
                              >
                                {months.map((value) => {
                                  return (
                                    <option key={value} value={value}>
                                      {value}
                                    </option>
                                  );
                                })}
                              </select>
                              </div>
                             <div className="col-lg-4 col-md-4 col-sm-12 p-2">
                             <select
                                className="form-select form-select-md mb-3 "
                                aria-label="Default select example"
                                value={formdata.dob.year}
                                onChange={(e) => {
                                  setformdata({
                                    ...formdata,
                                    dob: {
                                      ...formdata.dob,
                                      year: e.target.value,
                                    },
                                  });
                                  sety(e.target.value);
                                  populatedays(m);
                                }}
                              >
                                {year.map((value) => {
                                  return <option key={value}>{value}</option>;
                                })}
                              </select>
                               </div>
                        </div>
        <div className="row g-1 align-items-center">
          <div className="col-auto">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
          </div>
          <div className="col-auto">
            <input
              type="email"
              value={formdata.email.emailaddress}
              onChange={(e) =>
                setformdata({
                  ...formdata,
                  email: { ...formdata.email, emailaddress: e.target.value },
                })
              }
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="row g-1 align-items-center">
            <div className="col-auto">
              <label htmlFor="" className="form-label">
                Password
              </label>
            </div>
            <div className="col-auto">
              <input
                type="password"
                value={formdata.password}
                onChange={(e) =>
                  setformdata({ ...formdata, password: e.target.value })
                }
                className="form-control"
                id="exampleInputEmaill1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basicdetail;
