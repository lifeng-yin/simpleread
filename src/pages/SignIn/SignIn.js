import React from 'react';
import SignUpForm from "../../components/signin/SignUpForm/SignUpForm.js";
import {create} from "../../utilities/database.js";
import {useNavigate} from "react-router"
import './SignIn.scss';

const SignIn = () => {
    const navigate = useNavigate()
    
    return <div>
        <h3>Create a new account</h3>
        <SignUpForm 
                onSubmit={(e, form, setForm) => {
                    e.preventDefault();
                    create(form, "/user/add")
                    setForm({ name: "", position: "", level: "" });
                    navigate("/simpleread/");}
                }
                onChange={(e, updateForm, field) => {
                    let obj = {}
                    obj[field] = e.target.value
                    updateForm(obj)
                }}
            />
</div>};

export default SignIn;
