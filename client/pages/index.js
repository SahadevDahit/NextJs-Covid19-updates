import React,{useState} from "react";
import Chart from "chart.js/auto";
import WorldRecord from "../components/home_components/worldrecord";
import CountryRecord from "../components/home_components/countryrecord";
import axios from "axios";
import styles from "../styles/home.module.css";

import {
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
Chart.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

export async function getServerSideProps() {
 const api= await axios.request({
    method: "GET",
    url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/",
    headers: {
      "X-RapidAPI-Host":'process.env.X-RapidApi',
      "X-RapidAPI-Key": "process.enc.key",
    },
  });
  const countrydata=await api.data

  return {
    props: {
      result: countrydata,
    },
  };
}
const Home = ({ result }) => {

  const[state,setstate]=useState(false)
  const data = {
    labels: ["TotalCases", "TotalDeaths", "TotalRecovered"],
    datasets: [
      {
        labels: "My First Dataset",
        data: [
          result[0].TotalCases,
          result[0].TotalDeaths,
          result[0].TotalRecovered,
        ],
        backgroundColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      {state=== true ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <div
          className="container-fluid "
          style={{ backgroundColor: "#efefef" }}
        >
          <h1 className="text-center">COVID 19 WORLDWIDE INFORMATION</h1>
          <h2 className="text-center">
            Let's unite to fight against COVID-19. Stay Safe and Be Kind
          </h2>
          <div className={styles.piechart}>
            {" "}
            <WorldRecord data={data} coviddata={result[0]} />
          </div>

          <CountryRecord coviddata={result} styles={styles} />
        </div>
      )}
    </>
  );
};

export default Home;
