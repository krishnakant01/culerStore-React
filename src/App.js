import "./style.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { Boots } from "./pages/Boots";
import { FootballKits } from "./pages/FootballKits";

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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
