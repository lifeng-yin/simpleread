import React, { useContext } from "react";
import { create, useForm } from "../../../utilities/database.js";
import Field from "../../signin/Field/Field.js";
import PropTypes from "prop-types";
import TokenContext from "../../signin/TokenContext/TokenContext.js";
import "../../signin/SignInForm/SignInForm.scss";

const AddReviewForm = (props) => {
  const [form, setForm, updateForm] = useForm({
    bookname: "",
    review: "",
    rating: 0,
  });
  const { user } = useContext(TokenContext);

  return (
    <form
      className="AddReviewForm"
      data-testid="AddReviewForm"
      onSubmit={(e) => props.onSubmit(e, form, setForm)}
    >
      <h3>Create New Record</h3>
      <Field
        name="Bookname"
        label="Book name"
        form={form}
        onChange={props.onChange}
        updateForm={updateForm}
      />
      <Field
        name="Review"
        form={form}
        onChange={props.onChange}
        updateForm={updateForm}
      />
      <Field
        name="Rating"
        form={form}
        onChange={props.onChange}
        updateForm={updateForm}
        type="range"
        extra={{
          max: "5",
          min: "0",
          step: "0.5",
        }}
      >
        <p className="rating-value">{form.rating}</p>
      </Field>

      <div className="form-group cta">
        <input
          type="submit"
          value="Submit Review"
          className="btn btn-primary"
          disabled={user ? false : true}
        />
      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

AddReviewForm.defaultProps = {
  onSubmit: (e, form, setForm) => create(form, "/user"),
  onChange: (e, updateForm, field) => {
    let obj = {};
    obj[field] = e.target.value;
    updateForm(obj);
  },
};

export default AddReviewForm;
