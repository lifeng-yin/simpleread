import React, {useContext} from 'react';
import { create, useForm } from "../../../utilities/database.js"
import Field from "../Field/Field.js";
import PropTypes from 'prop-types';
import TokenContext from '../TokenContext/TokenContext.js';
import '../SignInForm/SignInForm.scss';

const SignUpForm = (props) => {
    const [form, setForm, updateForm] = useForm({
        email: "",
        username: "",
        password: ""
    })
    const {user} = useContext(TokenContext)
    
  return (
    <form className="SignUpForm" data-testid="SignUpForm" onSubmit={(e) => props.onSubmit(e, form, setForm)}>
        <h3>Sign Up</h3>
        <Field name="Username" form={form} onChange={props.onChange} updateForm={updateForm}/>
        <Field name="Email" form={form} onChange={props.onChange} updateForm={updateForm} type="email"/>
        <Field name="Password" form={form} onChange={props.onChange} updateForm={updateForm} type="password"/>
        
        <div className="form-group cta">
            <input
            type="submit"
            value="Sign Up"
            className="btn btn-primary"
            disabled={user ? true : false}
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
