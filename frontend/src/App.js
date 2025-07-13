import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import "./App.css";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches/:username" element={<Matches />} />
      </Routes>
    </Router>
  );
}

export default App;