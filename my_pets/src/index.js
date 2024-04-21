import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HomePage } from "./components/home-page/HomePage.tsx";
import { AnimalRegPage } from "./components/animal-registration/AnimalRegPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animal-registration" element={<AnimalRegPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
