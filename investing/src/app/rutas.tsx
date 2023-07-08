"use client";
import "./styles.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import NextInvest from "../routes/NextInvest";
import HowWorks from "../routes/HowWorks";
import SignIn from "../routes/SignIn";


export default function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howWorks" element={<HowWorks />} />
        <Route path="/nextInvest" element={<NextInvest />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
      </Router>
    </div>
  );
}
