import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./HomePage";
import Navbar from "./Navbar";
import UsersModule from "./UsersModule";
import PhotosModule from "./PhotosModule";
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
