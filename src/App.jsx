import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Use "Routes" instead of "Switch"
import Login from "./components/login/Login.jsx";
import SignupForm from "./components/signup/Signup.jsx";
import LandingPage from './components/landingpage/LandingPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

function Home() { 
  return <h2>Home</h2>;
}

export default App;
