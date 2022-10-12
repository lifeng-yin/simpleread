import React, { useContext } from "react";
import "./AccountButton.scss";
import TokenContext from "../../signin/TokenContext/TokenContext.js";
import CustomLink from "../CustomLink/CustomLink";

const AccountButton = (onClick = () => {}) => {
  const { user } = useContext(TokenContext);

  return (
    <div className="AccountButton" data-testid="AccountButton">
      {user?.username ? (
        <button className="sign-in__page-button--signed-in">
          {user?.username}
        </button>
      ) : (
        <CustomLink to="/signin" onClick={onClick}>
          <button className="sign-in__page-button">Sign in</button>
        </CustomLink>
      )}
    </div>
  );
};

export default AccountButton;
