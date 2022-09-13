import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useFetch } from "../../utilities/database.js";
import TokenContext from "../../components/signin/TokenContext/TokenContext.js";
import AddReviewForm from "../../components/reviews/AddReviewForm/AddReviewForm.js";
import "./AddReview.scss";

export default function Create() {
  const { token, user } = useContext(TokenContext);
  const navigate = useNavigate();
  let secureFetch;
  useFetch().then((e) => {
    secureFetch = e;
  });

  return (
    <div>
      {token ? (
        <AddReviewForm
          onSubmit={(e, form, setForm) => {
            e.preventDefault();
            secureFetch("/review/add", {
              ...form,
              ...{ username: user.username },
            });
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
