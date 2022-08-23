import React from 'react';
import { create, useForm } from "../../../utilities/database.js"
import Field from "../Field/Field.js";
import PropTypes from 'prop-types';
import './SignInForm.scss';

const SignInForm = (props) => {
    const [form, setForm, updateForm] = useForm({
        username: "",
        password: ""
    })
    
  return (
    <form className="SignInForm" data-testid="SignInForm" onSubmit={(e) => props.onSubmit(e, form, setForm)}>
        <Field name="Username" label="Username or email" form={form} onChange={props.onChange} updateForm={updateForm}/>
        <Field name="Password" form={form} onChange={props.onChange} updateForm={updateForm} type="password"/>
        
        <div className="form-group">
            <input
            type="submit"
            value="Sign In"
            className="btn btn-primary"
            />
        </div>
    </form>
);}

SignInForm.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
};

SignInForm.defaultProps = {
    onSubmit: (e, form, setForm) => create(form, "/user"),
    onChange: (e, updateForm, field) => {
        let obj = {}
        obj[field] = e.target.value
        updateForm(obj)
    }
};

export default SignInForm;
