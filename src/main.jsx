import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Intro from "./pages/Intro.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
