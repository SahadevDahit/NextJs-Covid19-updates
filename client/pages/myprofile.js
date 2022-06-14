import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import styles from "../styles/myprofile.module.css";
const Myprofile = () => {
  const [defaultimg, setdefaultimg] = useState("/sd.png");
  const[auth,setauth] = useState(false)
  const [profiledata, setprofiledata] = useState({
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
  });
  const [y, sety] = useState("");
  const [selected, setselected] = useState("");
  const [m, setm] = useState("");
  const [loginstate, setloginstate] = useState(false);
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
  const verify = (response) => {
    setprofiledata({
      ...profiledata,
      fname: response.fname,
      mname: response.mname,
      lname: response.lname,
      gender: response.gender,
      dob: {
        ...profiledata.dob,
        day: response.dob.day,
        month: response.dob.month,
        year: response.dob.year,
      },
      country: response.country,
    });
  };

  useEffect(() => {
    axios
      .get("https://covid19-updatess.herokuapp.com/verifyuser",{
        headers:{
          "token":localStorage.getItem("token")
        },
      })
      .then((response) => {
        verify(response.data.profiledata)
        setauth(true)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const year = [];
  const days = [];
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
        dayNum = 29;
      } else {
        dayNum = 28;
      }
    }

    for (let i = 1; i <= dayNum; i += 1) {
      days.push(i);
    }
  };
  populatedays(m);
  const update = (e) => {
    e.preventDefault();

    axios
      .put("https://covid19-updatess.herokuapp.com/updateuser", {
        profiledata: profiledata,
      })
      .then((response) => {
        alert("Sucessfully Updated");

        axios
          .post("https://covid19-updatess.herokuapp.com/getuser", {
            profiledata: profiledata,
          })
          .then((response) => {
            verify(response.data.user);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
        alert("Error updating user");
      });
  };

  const deleteuser = (e) => {
    e.preventDefault();

    axios
      .delete("https://covid19-updatess.herokuapp.com/deleteuser")
      .then((response) => {
        alert("User deleted");
      })
      .catch((err) => {
        console.log(err.message);
        alert("Error deleting user");
      });
  };

  // This function will be triggered when the file field change
  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setprofiledata({...profiledata,img:e.target.files[0]});
  //     setdefaultimg(null);
  //   }
  // };

  // This function will be triggered when the "Remove This Image" button is clicked
  // const removeSelectedImage = () => {
  //   setSelectedImage();
  //   setdefaultimg("/sd.png");
  // };

  return (
    <>
      {auth === false ? (
        <>
          <h1>Please Login First</h1>
        </>
      ) : (
        <>
          <div
            className="w-100 h-100 -fluid py-5  d-grid "
            id={styles.myprofile}
            style={{ placeItems: "center" }}
          >
            <div
              className=" h-100   row shadow-lg ps-5 mb-1 bg-white rounded"
              id={styles.profile}
            >
              <form action="#" method="POST" encType="multipart/form-data">
                <div className="row container-fluid  h-100">
                  <h2 className=" px-5">
                    <b> My profile</b>
                  </h2>
                  <div className="container ">
                    <div
                      className=" mt-3 w-100 d-grid "
                      style={{ placeItems: "center" }}
                    >
                      <div>
                        <Image
                          className="rounded-circle  shadow-lg mx-auto  mb-1 bg-white rounded"
                          src={
                            defaultimg == null
                              ? URL.createObjectURL(profiledata.img)
                              : defaultimg
                          }
                          alt="Picture of the author"
                          width={200}
                          height={200}
                        />

                        {/* <button onClick={removeSelectedImage}>
                      Remove This Image
                    </button> */}
                      </div>

                      {/* <input accept="image/*" type="file" onChange={imageChange} /> */}
                    </div>
                  </div>

                  <div
                    className=" container shadow-lg pe-1 mb-3 bg-white rounded"
                    id={styles.detail}
                  >
                    <div className="row flex">
                      <div
                        className="col-md-4 col-sm-12 h-100"
                        id={styles.name}
                      >
                        <label htmlFor="inputEmail4" className="form-label">
                          FName
                        </label>
                        <input
                          type="text"
                          value={profiledata.fname}
                          onChange={(e) =>
                            setprofiledata({
                              ...profiledata,
                              fname: e.target.value,
                            })
                          }
                          className="form-control"
                          id="inputEmail4"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="inputPassword4" className="form-label">
                          MName
                        </label>
                        <input
                          type="text"
                          value={profiledata.mname}
                          onChange={(e) =>
                            setprofiledata({
                              ...profiledata,
                              mname: e.target.value,
                            })
                          }
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label htmlFor="inputPassword4" className="form-label">
                          LName
                        </label>
                        <input
                          type="text"
                          value={profiledata.lname}
                          onChange={(e) =>
                            setprofiledata({
                              ...profiledata,
                              lname: e.target.value,
                            })
                          }
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                    </div>
                    {/* Country */}
                    <div className="col-xl-6 col-md-8 col-sm-5 pe-2  pt-3">
                      <div className="form-check">
                        <label className="form-check-label" htmlFor="gridCheck">
                          Country
                        </label>
                        <ReactFlagsSelect
                          selected={profiledata.country}
                          onSelect={(code) => {
                            setprofiledata({ ...profiledata, country: code });
                            setselected(code);
                          }}
                        />
                      </div>
                    </div>

                    {/* Gender */}
                    <div className="d-lg-flex d-md-flex d-sm-block   align-items-center justify-content-around">
                      <label
                        htmlFor="inputAddress"
                        className="col-me-4 form-label"
                      >
                        Gender
                      </label>
                      <div className="form-check ">
                        <input
                          className="form-check-input"
                          type="radio"
                          onChange={(e) =>
                            setprofiledata({
                              ...profiledata,
                              gender: e.target.value,
                            })
                          }
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value="male"
                          checked={profiledata.gender === "male" ? true : false}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
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
                            setprofiledata({
                              ...profiledata,
                              gender: e.target.value,
                            })
                          }
                          value="female"
                          checked={
                            profiledata.gender === "female" ? true : false
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Female
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          onChange={(e) =>
                            setprofiledata({
                              ...profiledata,
                              gender: e.target.value,
                            })
                          }
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value="other"
                          checked={
                            profiledata.gender === "other" ? true : false
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Other
                        </label>
                      </div>
                    </div>

                    {/* Date of birth date */}
                    <div className="row container pt-3 w-100">
                      <p>DOB</p>
                      <div className="col-lg-4 col-md-4 col-sm-12 p-2">
                        <select
                          className="form-select form-select-md mb-3 "
                          aria-label="Default select example"
                          value={profiledata.dob.day}
                          onChange={(e) => {
                            setprofiledata({
                              ...profiledata,
                              dob: {
                                ...profiledata.dob,
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
                          value={profiledata.dob.month}
                          onChange={(e) => {
                            setprofiledata({
                              ...profiledata,
                              dob: {
                                ...profiledata.dob,
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
                          value={profiledata.dob.year}
                          onChange={(e) => {
                            setprofiledata({
                              ...profiledata,
                              dob: {
                                ...profiledata.dob,
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

                    {/* button */}

                    <div
                      className="pt-3 w-100  d-flex justify-content-around align-items-center "
                      id={styles.button}
                    >
                      <div className="back p-2">
                        <button
                          className="btn btn-primary"
                          // disabled={page === 0}
                          onClick={(e) => update(e)}
                        >
                          Update
                        </button>
                      </div>
                      <div className="next">
                        <button
                          className="btn btn-primary"
                          onClick={(e) => deleteuser(e)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Myprofile;
