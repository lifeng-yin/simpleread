import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { create } from "../../utilities/database.js";
import TokenContext from "../../components/signin/TokenContext/TokenContext.js";
import AddReviewForm from "../../components/reviews/AddReviewForm/AddReviewForm.js";
import "./AddReview.scss";

export default function Create() {
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();

  return (
    <div>
      {token ? (
        <AddReviewForm
          onSubmit={(e, form, setForm) => {
            e.preventDefault();
            create(form, "/reviews/add", "include");
            setForm({ bookname: "", review: "", rating: 0 });
            navigate("/simpleread/");
          }}
          onChange={(e, updateForm, field) => {
            let obj = {};
            obj[field] = e.target.value;
            updateForm(obj);
          }}
        />
      ) : (
        <p>have an account nerd</p>
      )}
    </div>
  );
}
