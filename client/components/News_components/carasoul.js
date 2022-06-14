import React from "react";

const Carasoul = ({ news, styles }) => {
  return (
    <>
      <div
        id=" "
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className=" carousel-indicators " id={styles.carouselbutton}>
          {news.news.map((value, index) => {
            return (
              <div key={value.news_id}>
                {index === 0 ? (
                  <button key={value.news_id}
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                ) : index == 9 ? (
                  <button key={value.news_id}
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="9"
                    aria-label="Slide 0"
                  ></button>
                ) : (
                  <button key={value.news_id}
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to={index}
                    aria-label={`Slide ${index}+1`}
                  ></button>
                )}
              </div>
            );
          })}{" "}
        </div>
        <div className="carousel-inner w-100">
          {news.news.map((value, index) => {
            return (
            
                <div  key={value.news_id} className={index === 0 ?"carousel-item active w-100":"w-100 carousel-item"} data-bs-interval="3000">
                  <img
                    src={value.urlToImage}
                    className="img-fluid d-block w-100 h-100"
                    id={styles.img}
                    alt="..."
                  />
                  <div className="carousel-caption container-fluid p-2 ms-5" id={styles.carasoulitem}>
                    <h5>{value.title}</h5>
                    <p>{value.content}</p>
                    <a href={value.link} id={styles.link} target="_blank">
                      {" "}
                      Explore More{" "}
                    </a>
                  </div>
                </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carasoul;
