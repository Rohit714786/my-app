import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage";
import Navbar from "./components/Navbar";
import UsersModule from "./components/UsersModule";
import PhotosModule from "./components/PhotosModule";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<UsersModule />} />
        <Route path="/photos" element={<PhotosModule />} />
      </Routes>
    </Router>
  );
};

export default App;
