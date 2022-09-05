import React, {useContext} from 'react';
import SignUpForm from "../../components/signin/SignUpForm/SignUpForm.js";
import SignInForm from "../../components/signin/SignInForm/SignInForm"
import {create} from "../../utilities/database.js";
import TokenContext from "../../components/signin/TokenContext/TokenContext"
import {useNavigate} from "react-router"
import './SignIn.scss';

const SignIn = () => {
    const navigate = useNavigate()
    const {setToken, setUser} = useContext(TokenContext)
    
    return <div>
        <h3>Create a new account</h3>
        <SignUpForm 
                onSubmit={(e, form, setForm) => {
                    e.preventDefault();
                    create(form, "/user/register", "include").then(res => {
                        if (res.isLoggedIn) {
                            setToken(res?.token)
                            setUser({username: res?.user?.username})
                        }
                    })
                    setForm({ email: "", username: "", password: "" });
                    navigate("/simpleread/");}
                }
                onChange={(e, updateForm, field) => {
                    let obj = {}
                    obj[field] = e.target.value
                    updateForm(obj)
                }}
            />
        <SignInForm 
                onSubmit={(e, form, setForm) => {
                    e.preventDefault();
                    create(form, "/user/login", "include").then(res => {
                        if (res.isLoggedIn) {
                            setToken(res?.token)
                            setUser({username: res?.user?.username})
                        }
                    })
                    setForm({ username: "", password: "" });
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
