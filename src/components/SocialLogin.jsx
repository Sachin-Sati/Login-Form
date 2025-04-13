import { signInWithPopup } from "firebase/auth"
import {auth, googleProvider, githubProvider} from "../utils/firebase"

const SocialLogin = () => {
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log('Signed in as:', user.displayName);
      // Proceed with user info or redirect
    })
    .catch((error) => {
      console.error('Google Sign-In Error:', error);
    });
  }
  const handleGitHubSignIn = () => {
    console.log("Redirecting using provider:", githubProvider);
    signInWithPopup(auth, githubProvider)
    .then((result) => {
      const user = result.user;
      console.log('Signed in as:', user.displayName);
      // Proceed with user info or redirect
    })
    .catch((error) => {
      console.error('GitHub Sign-In Error:', error);
    });
  }
  return (
    <div className="social-login">
        <button className="social-button" onClick={handleGoogleSignIn}>
          <img className="social-icon" src="google.svg" alt="google" />
          Google
        </button>
        <button className="social-button" onClick={handleGitHubSignIn}>
          <img className="social-icon" src="github.svg" alt="github" />
          GitHub
        </button>
    </div>
  )
}

export default SocialLogin