import LoginForm from "./components/LoginForm"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUpForm from "./components/SignUpForm"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
      </Routes>
    </Router>
  )
}

export default App