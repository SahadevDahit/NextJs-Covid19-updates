import React, { useState, useEffect } from "react";

const Vaccinedata = ({ vaccinedata, styles }) => {
  const [index, setindex] = useState(0);

  return (
    <>
      <div className="container-fluid py-5 px-5 mt-2" id={styles.vaccine}>
   <h1 className="text-center">Vaccine Informations</h1>

        <label htmlFor="" style={{fontSize:"1.5rem",fontStyle:"italic"}}>Select Country</label>
        <select
          className="ml-10"
          style={{ width: "20rem" }}
          onChange={(e) => {
            setindex(e.target.value);
          }}
        >
          {vaccinedata.map((item, index) => {
            return (
                <option value={index} key={index}>
                  {item.trimedName}
                </option>
            );
          })}
        </select>
        <h3>
          Category:-<span className="mx-2"> {vaccinedata[index].category} </span>
        </h3>
        <h3>
          DeveloperResearcher:-
          <span className="mx-2">
            {" "}
            {vaccinedata[index].developerResearcher}{" "}
          </span>
        </h3>
        <h3>
          FDAApproved:-
          <span className="mx-2"> {vaccinedata[index].FDAApproved} </span>
        </h3>
        <h3>
          Funder<span className="mx-2"> {vaccinedata[index].funder} </span>
        </h3>
        <h3>
          Description:-
          <span className="mx-2"> {vaccinedata[index].description} </span>
        </h3>
        <h3>
          NextSteps:-
          <span className="mx-2"> {vaccinedata[index].nextSteps} </span>
        </h3>
        <h3>
          Phase:-<span className="mx-2"> {vaccinedata[index].phase} </span>
        </h3>
      </div>
    </>
  );
};

export default Vaccinedata;
