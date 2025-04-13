import { useState } from "react"
import InputField from "./InputField";
import SocialLogin from "./SocialLogin"
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import showToast from "../utils/toast";

const SignUpForm = () => {
    // navigate
    const navigate = useNavigate();
    // set form values
    const [form, setForm] = useState({ username: "", email: "", password: "" }); 
    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
            console.log('Signed up as: ', userCredential.user.email);
            showToast('success', 'Signed up successfully!');
            navigate("/");      // navigate to login
        })
        .catch((error) => {
            console.log('Signup Error: ', error.message);
            showToast("error", `Please try again.`);
        });
    }
    return (
        <div className="login-container">
        <h2 className="form-title">Sign Up with</h2>
        <SocialLogin />
        <p className="seperator"><span>Or</span></p>
        <form className="login-form" onSubmit={handleSignUp}>
            <InputField type="text" placeholder="Username" icon="person" name="username" onChange={handleChange} />
            <InputField type="email" placeholder="Email Address" icon="mail" name="email" onChange={handleChange} />
            <InputField type="password" placeholder="Password" icon="lock" name="password" onChange={handleChange} />

            <button className="login-button">Sign Up</button>
        </form>

        <p className="signup-text">Already have an account?<Link to="/">Login</Link></p>
        </div>
    )
}

export default SignUpForm