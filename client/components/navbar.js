import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css"

const navbar = () => {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light container-fluid p-0 bg-light">
  <div className="container-fluid">
<h2>Covid 19 Updates</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-0"style={{color:"white",fontSize:"1.5rem"}} id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/news">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/aboutUs">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/login" >Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/myprofile" >My Profile</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
    
  );
};

export default navbar;
