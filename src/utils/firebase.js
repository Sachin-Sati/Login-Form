// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU4mixj9a8PesyIQQX2ZqKUyAnF210nhc",
  authDomain: "sign-in-8eefd.firebaseapp.com",
  projectId: "sign-in-8eefd",
  storageBucket: "sign-in-8eefd.firebasestorage.app",
  messagingSenderId: "362088570506",
  appId: "1:362088570506:web:0c0691b07b47b7f47d9773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export {auth, googleProvider, githubProvider};