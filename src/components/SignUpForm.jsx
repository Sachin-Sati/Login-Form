import { useState } from "react"
import InputField from "./InputField";
import SocialLogin from "./SocialLogin"
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    // navigate
    const navigate = useNavigate();
    // set form values
    const [form, setForm] = useState({ email: "", password: "" }); 
    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
        console.log('Signed in as: ', userCredential.user.email);
        navigate("/");      // navigate to login
        })
        .catch((error) => {
        console.log('Signup Error: ', error.message);
        });
    }
    return (
        <div className="login-container">
        <h2 className="form-title">Sign Up with</h2>
        <SocialLogin />
        <p className="seperator"><span>Or</span></p>
        <form className="login-form" onSubmit={handleSignUp}>
            <InputField type="email" placeholder="Email Address" icon="mail" name="email" onChange={handleChange} />
            <InputField type="password" placeholder="Password" icon="lock" name="password" onChange={handleChange} />

            <button className="login-button">Sign Up</button>
        </form>

        <p className="signup-text">Already have an account?<a href="/">Login</a></p>
        </div>
    )
}

export default SignUpForm