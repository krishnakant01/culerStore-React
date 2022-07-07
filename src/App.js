import "./style.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Boots } from "./pages/Boots";
import { FootballKits } from "./pages/FootballKits";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

import { NavigationBar } from "./components/navigation/NavigationBar";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boots" element={<Boots />} />
        <Route path="/footballkits" element={<FootballKits />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
