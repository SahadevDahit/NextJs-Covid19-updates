import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";
const aboutUs = () => {
  return (
    <>
      <div
        className="container-fluid py-5" id={styles.container} >
        <div className="" id={styles.aboutpage}>
          <div className="" id={styles.image}>
           <div className="d-flex justify-content-center">
           <Image
            src="/sd.png"
            alt="Picture of the author"
            width={200}
            height={200}
          
          />
           </div>
          </div>
          <ul className="d-lg-flex d-md-flex d-sm-block justify-content-center">
            <li className="px-2">
              <i className="bi bi-github"></i>{" "}
              <a target="_blank" href="https://github.com/SahadevDahit">
                {" "}
                Github
              </a>
            </li>
            <li className="px-2">
              <i className="bi bi-youtube "></i>{" "}
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UC5eMerNQZ9AYnV5JhtKmFGQ"
              >
                {" "}
                Youtube
              </a>
            </li>
            <li className="px-2">
              <i className="bi bi-linkedin"></i>{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sahadev-dahit-9164b6208"
              >
                {" "}
                LinkedIn
              </a>
            </li>
            <li className="px-2">
              <i className="bi bi-envelope-fill"></i>{" "}
              <a target="_blank" href="mailto:sahadevdahit111@gmail.com">
                {" "}
                Email
              </a>
            </li>
          </ul>

          <div className="p-2" id={styles.details}>
            
            <fieldset className="p-2">
              <legend>
                <h3>Hi!!! Welcome</h3>
                <p>Myself Sahadev Dahit studying BE Computer Engineering.</p>
                <p>
                  This is a simple MERN (MongoDB, ExpressJS, NextJS, NodeJS)
                  stack project about covid 19 using api to fetch covid 19 data.
                  API References:-
                  <a target="_blank" href="http://rapidapi.com">
                    Rapidapi.com
                  </a>
                </p>
              </legend>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutUs;
