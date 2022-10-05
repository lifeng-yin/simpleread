import React from "react";
import logolarge from "./logos/SIMPLEREAD_LOGO.png";
import Hamburger from "./components/navbar/Hamburger/Hamburger.js";
import CustomLink from "./components/navbar/CustomLink/CustomLink.js";
import AccountButton from "./components/navbar/AccountButton/AccountButton";

const Navbar = () => {
  return (
    <nav>
      <ul id="logo">
        <CustomLink to="/">
          <img
            src={logolarge}
            alt="logo"
            style={{ width: "100%", minWidth: "70px", listStyleType: "none" }}
          ></img>
        </CustomLink>
      </ul>

      <ul className="desktop nav__links">
        <CustomLink to="/explore">Explore</CustomLink>

        <p className="navspacer">{" | "}</p>

        <CustomLink to="/add">Add Review</CustomLink>

        <p className="navspacer">{" | "}</p>

        <CustomLink to="/about">About</CustomLink>

        <p className="navspacer">{" | "}</p>

        <AccountButton />
      </ul>

      <Hamburger />
    </nav>
  );
};

export default Navbar;
