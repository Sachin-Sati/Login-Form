import { useState } from "react"
import InputField from "./InputField";
import SocialLogin from "./SocialLogin"
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
    // set form values
    const [form, setForm] = useState({ email: "", password: "" }); 
    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
        console.log('Logged in as: ', userCredential.user.email);
        })
        .catch((error) => {
        console.log('Login Error: ', error.message);
        });
    }
    return (
        <div className="login-container">
        <h2 className="form-title">Login with</h2>
        <SocialLogin />
        <p className="seperator"><span>Or</span></p>
        <form className="login-form" onSubmit={handleLogin}>
            <InputField type="email" placeholder="Email Address" icon="mail" name="email" onChange={handleChange} />
            <InputField type="password" placeholder="Password" icon="lock" name="password" onChange={handleChange} />
            <a className="forgot-pass-link" href="#">Forgot Password</a>

            <button className="login-button">Log In</button>
        </form>

        <p className="signup-text">Don&apos;t have an account?<a href="/signup">Sign Up</a></p>
        </div>
    )
}

export default LoginForm