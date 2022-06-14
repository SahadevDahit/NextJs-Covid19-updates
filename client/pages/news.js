import axios from "axios";
import styles from "../styles/news.module.css";
import HealthNews from "../components/News_components/health-vaccinenews";
import Carasoul from "../components/News_components/carasoul";
import Vaccinedata from "../components/News_components/Vaccinedata";

export async function getServerSideProps() {
  let api1 = await axios.request({
    method: "GET",
    url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0",
    headers: {
      "X-RapidAPI-Host":
        "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      "X-RapidAPI-Key": "5072ad6e0emshf9fdfafacff186ap1b7789jsn6b034a27e6f8",
    },
  });

  let api2 = await axios.request({
    method: "GET",
    url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/1",
    headers: {
      "X-RapidAPI-Host":
        "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      "X-RapidAPI-Key": "5072ad6e0emshf9fdfafacff186ap1b7789jsn6b034a27e6f8",
    },
  });
  let api3 = await axios.request({
    method: "GET",
    url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-vaccine-news/0",
    headers: {
      "X-RapidAPI-Host":
        "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      "X-RapidAPI-Key": "5072ad6e0emshf9fdfafacff186ap1b7789jsn6b034a27e6f8",
    },
  });
  let api4 = await axios.request({
    method: "GET",
    url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines",
    headers: {
      "X-RapidAPI-Host":
        "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      "X-RapidAPI-Key": "5072ad6e0emshf9fdfafacff186ap1b7789jsn6b034a27e6f8",
    },
  });
  const newsdata = await api1.data;
  const healthnews = await api2.data;
  const vaccinenews = await api3.data;
  const vaccinedata = await api4.data;
  return {
    props: {
      newsdata: newsdata,
      healthnews: healthnews,
      vaccinenews: vaccinenews,
      vaccinedata: vaccinedata,
    },
  };
}
const News = ({ newsdata, healthnews, vaccinenews, vaccinedata }) => {
  if (
    newsdata.length != 0 &&
    healthnews.length !== 0 &&
    vaccinenews.length !== 0 &&
    vaccinedata.length !== 0
  ) {
    return (
      <div>
        <Carasoul news={newsdata} styles={styles} />
        <HealthNews
          healthnewsdata={healthnews}
          vaccinenewsdata={vaccinenews}
          styles={styles}
        />
        <Vaccinedata vaccinedata={vaccinedata} styles={styles} />
      </div>
    );
  } else
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
};

export default News;
