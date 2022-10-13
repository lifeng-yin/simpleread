import React from "react";
import logolarge from "../../logos/SIMPLEREAD_LOGO.png";
import { BsBook, BsListStars } from "react-icons/bs";
import "./Home.scss";

import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  console.log(document.getElementById("popup"));

  return (
    <>
      <img
        alt="logo"
        className="center"
        src={logolarge}
        style={{ width: "15%" }}
      ></img>
      <h1
        className="title"
        style={{ color: "#506491", fontWeight: "900", marginTop: "-2%" }}
      >
        SimpleRead
      </h1>
      <h1 style={{ color: "#a48dad" }}>Book reviewing made simple</h1>

      <button
        className="center"
        style={{ marginTop: "2%" }}
        onClick={() => {
          navigate("/add");
        }}
      >
        {"Review A Book "}
        <BsBook />
      </button>

      <button
        className="center"
        style={{ marginTop: "20px" }}
        onClick={() => {
          navigate("/explore");
        }}
      >
        {"Read Some Reviews "}
        <BsListStars />
      </button>
    </>
  );
};

export default Home;
