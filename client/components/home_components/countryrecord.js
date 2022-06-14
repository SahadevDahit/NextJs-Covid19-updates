import React, { useState, useEffect } from "react";
import { Doughnut, Bar, Line} from "react-chartjs-2";
import axios from "axios";

const countryrecord = ({coviddata,styles}) => {
    const [pastdata, setpastdata] = useState(null);
    const [index, setindex] = useState(2);
  
 
  
    const populatecountrydata = async (code) => {
      if (code != null || code != undefined) {
        try {
          const option = {
              method: 'GET',
              url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/${coviddata[code].ThreeLetterSymbol}`,
              headers: {
                "X-RapidAPI-Host":'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
                "X-RapidAPI-Key": "5072ad6e0emshf9fdfafacff186ap1b7789jsn6b034a27e6f8",
              }
          };
          await axios.request(option).then(function(response) {
              setpastdata(response.data);
  
          }).catch(function(error) {
              console.error(error);
          });
  
      } catch (error) {
          console.log(error)
  
      }
      }
    };
   
     useEffect(() => {
      populatecountrydata(2);
     },[])
    
    // Doughnut data
    const doughnutdata = {
      labels: ["TotalCases", "TotalDeaths", "TotalRecovered"],
      datasets: [
        {
          labels: "My First Dataset",
          data: [
            coviddata[index].TotalCases,
            coviddata[index].TotalDeaths,
            coviddata[index].TotalRecovered,
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
    // Bar data
  
    const dataBar = {
      labels: [],
  
      datasets: [
        {
          label: "Covid 19 New Cases",
          data: [],
  
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          fill: false,
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
     
      
    };
  
    pastdata != null &&
      pastdata.map((value, index) => {
        dataBar.labels.push(value.date);
        dataBar.datasets[0].data.push(value.new_cases);
      });
  
    const linedata = {
      labels: [],
  
      datasets: [
        {
          label: "Covid 19 New_Deaths",
          data: [],
  
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
    pastdata != null &&
      pastdata.map((value, index) => {
        linedata.labels.push(value.date);
        linedata.datasets[0].data.push(value.new_deaths);
      });
    return (
        <>
         <div className={styles.countryrecord}>
          {/* e.preventDefault(); router.push(`/${e.target.value}`)} */}
          <div className="w-100 h-100 row d-flex">
            <div className="container-fluid p-5 col-xl-6 col-md-6 col-sm-flex-column ">
              <label htmlFor="">Select Country</label>
              <select
                width="100"
                className="ml-10"
                onChange={(e) => {
                  setindex(e.target.value);
                  populatecountrydata(e.target.value);
                }}
              >
                {coviddata.map((item, index) => {

                  if(index>1){
                    return (
                      <option key={item.id} value={index}>
                      {item.Country}
                    </option>
                    )
                  }
                  
                })}
              </select>

              <h5>
                Continent{" "}
                <span className="mx-2"> {coviddata[index].Continent} </span>
              </h5>
              <h5>
                Infection_Risk{" "}
                <span className="mx-2">{coviddata[index].Infection_Risk}</span>
              </h5>
              <h5>
                Case_Fatality_Rate{" "}
                <span className="mx-2">
                  {coviddata[index].Case_Fatality_Rate}
                </span>
              </h5>
              <h5>
                Test_Percentage
                <span className="mx-2">
                  {" "}
                  {coviddata[index].Test_Percentage}
                </span>
              </h5>
              <h5>
                Recovery_Proporation{" "}
                <span className="mx-2">
                  {" "}
                  {coviddata[index].Recovery_Proporation}
                </span>
              </h5>
              <h5>
                TotalCases{" "}
                <span className="mx-2">{coviddata[index].TotalCases}</span>
              </h5>
              <h5>
                NewCases{" "}
                <span className="mx-2">{coviddata[index].NewCases}</span>
              </h5>
              <h5>
                TotalDeaths{" "}
                <span className="mx-2"> {coviddata[index].TotalDeaths}</span>
              </h5>
              <h5>
                NewDeaths{" "}
                <span className="mx-2"> {coviddata[index].NewDeaths}</span>
              </h5>
              <h5>
                TotalRecovered{" "}
                <span className="mx-2"> {coviddata[index].TotalRecovered}</span>
              </h5>
              <h5>
                NewRecovered{" "}
                <span className="mx-2">{coviddata[index].NewRecovered}</span>
              </h5>
              <h5>
                ActiveCases{" "}
                <span className="mx-2"> {coviddata[index].ActiveCases}</span>
              </h5>
              <h5>
                TotalTests{" "}
                <span className="mx-2">{coviddata[index].TotalTests}</span>
              </h5>
              <h5>
                Population{" "}
                <span className="mx-2"> {coviddata[index].Population}</span>
              </h5>
              <h5>
                one_Caseevery_X_ppl{" "}
                <span className="mx-2">
                  {" "}
                  {coviddata[index].one_Caseevery_X_ppl}
                </span>
              </h5>
              <h5>
                one_Deathevery_X_ppl{" "}
                <span className="mx-2">
                  {coviddata[index].one_Deathevery_X_ppl}
                </span>
              </h5>
              <h5>
                one_Testevery_X_ppl{" "}
                <span className="mx-2">
                  {" "}
                  {coviddata[index].one_Testevery_X_ppl}
                </span>
              </h5>
              <h5>
                Deaths_1M_pop{" "}
                <span className="mx-2"> {coviddata[index].Deaths_1M_pop}</span>
              </h5>
              <h5>
                Serious_Critical{" "}
                <span className="mx-2">
                  {coviddata[index].Serious_Critical}
                </span>
              </h5>
              <h5>
                Tests_1M_Pop{" "}
                <span className="mx-2">{coviddata[index].Tests_1M_Pop}</span>
              </h5>
              <h5>
                TotCases_1M_Pop{" "}
                <span className="mx-2">
                  {" "}
                  {coviddata[index].TotCases_1M_Pop}
                </span>
              </h5>
            </div>

            <div
              className="container-fluid  col-xl-6 col-md-6 col-sm-flex-column "
              style={{ width: "30rem", paddingTop: "10rem" }}
            >
              <Doughnut data={doughnutdata} width={400} height={400} />
            </div>
          </div>
          <div className=" w-100 h-50 px-5 ">
            {pastdata != null ? (
              <Bar
                data={dataBar}
                width={400}
                height={400}
                options={{ maintainAspectRatio: false }}
              />
            ) : (
              "Loading"
            )}
          </div>

          <div className="w-100 h-50 py-5 ">
            <Line
              data={linedata}
              width={400}
              height={400}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>   
        </>
    )
}

export default countryrecord
