import InputField from "./components/InputField"
import SocialLogin from "./components/SocialLogin"

const App = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Login with</h2>
      <SocialLogin />
      <p className="seperator"><span>Or</span></p>
      <form className="login-form">
        <InputField type="email" placeholder="Email Address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />
        <a className="forgot-pass-link" href="#">Forgot Password</a>

        <button className="login-button">Log In</button>
      </form>

      <p className="signup-text">Don&apos;t have an account?<a href="#">Sign Up</a></p>
    </div>
  )
}

export default App