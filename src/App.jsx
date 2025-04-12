import LoginForm from "./components/LoginForm"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUpForm from "./components/SignUpForm"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
      </Routes>
    </Router>
    <ToastContainer />
    </>
  )
}

export default App