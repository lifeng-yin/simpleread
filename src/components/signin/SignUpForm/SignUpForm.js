import React from 'react';
import { create, useForm } from "../../../utilities/database.js"
import SignUpField from "../SignUpField/SignUpField.js";
import PropTypes from 'prop-types';
import './SignUpForm.scss';

const SignUpForm = (props) => {
    const [form, setForm, updateForm] = useForm({
        email: "",
        username: "",
        password: ""
    })
    
  return (
    <form className="SignUpForm" data-testid="SignUpForm" onSubmit={(e) => props.onSubmit(e, form, setForm)}>
        <SignUpField name="Username" form={form} onChange={props.onChange} updateForm={updateForm}/>
        <SignUpField name="Email" form={form} onChange={props.onChange} updateForm={updateForm} type="email"/>
        <SignUpField name="Password" form={form} onChange={props.onChange} updateForm={updateForm} type="password"/>
        
        <div className="form-group">
            <input
            type="submit"
            value="Sign Up"
            className="btn btn-primary"
            />
        </div>
    </form>
);}

SignUpForm.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
};

SignUpForm.defaultProps = {
    onSubmit: (e, form, setForm) => create(form, "/user"),
    onChange: (e, updateForm, field) => {
        let obj = {}
        obj[field] = e.target.value
        updateForm(obj)
    }
};

export default SignUpForm;
