import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
Chart.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

const Worldrecord = ({ data, coviddata }) => {
  return (
    <>
      <div className="row container py-5 w-100 h-100 d-flex">
        <div className="container  col-md-6  col-sm-12  align-items-center ">
          <h5>
            Case_Fatality_Rate{" "}
            <span className="mx-2">{coviddata.Case_Fatality_Rate}</span>
          </h5>

          <h5>
            Recovery_Proporation{" "}
            <span className="mx-2"> {coviddata.Recovery_Proporation}</span>
          </h5>
          <h5>
            TotalCases <span className="mx-2">{coviddata.TotalCases}</span>
          </h5>
          <h5>
            NewCases <span className="mx-2">{coviddata.NewCases}</span>
          </h5>
          <h5>
            TotalDeaths <span className="mx-2"> {coviddata.TotalDeaths}</span>
          </h5>
          <h5>
            NewDeaths <span className="mx-2"> {coviddata.NewDeaths}</span>
          </h5>
          <h5>
            TotalRecovered{" "}
            <span className="mx-2"> {coviddata.TotalRecovered}</span>
          </h5>
          <h5>
            NewRecovered <span className="mx-2">{coviddata.NewRecovered}</span>
          </h5>
          <h5>
            ActiveCases <span className="mx-2"> {coviddata.ActiveCases}</span>
          </h5>
        </div>

        <div className="container-fluid col-sm-12" style={{ width: "20rem" }}>
          <Pie data={data} width={400} height={400} />
        </div>
      </div>
    </>
  );
};

export default Worldrecord;
