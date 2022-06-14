import React, { useState, useEffect } from "react";

const Healthvaccinenews = ({ healthnewsdata, vaccinenewsdata, styles }) => {
  
  return (
    <>
      {/* Masonary */}
      <div className="container mt-5" id={styles.card}>
        {healthnewsdata.news.map((record, index) => {
          return (
            <div key={record.news_id}>
              <div className="box" id={styles.box}>
                <img src={record.urlToImage} alt="" />
                <h3>{record.title}</h3>
                <p>{record.content}</p>
                <a href={record.link} target="_blank">
                  For More
                </a>
              </div>
            </div>
          );
        })}
        {vaccinenewsdata.news.map((record, index) => {
          return (
           <div key={record.news_id}>
              <div  className="box" id={styles.box}>
              <img src={record.urlToImage} alt="" />
              <h3>{record.title}</h3>
              <p>{record.content}</p>
              <a href={record.link} target="_blank">
                For More
              </a>
            </div>
           </div>
          );
        })}
      </div>
    </>
  );
};

export default Healthvaccinenews;
