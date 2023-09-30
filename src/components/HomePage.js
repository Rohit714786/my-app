import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>My React Web Application</h1>
      <div className="cards">
        <Link to="/users">
          <div className="card">
            <h3 className="card-title">UsersModule</h3>
            <p className="card-description">
              View and manage all of the users in your application.
            </p>
          </div>
        </Link>
        <Link to="/photos">
          <div className="card">
            <h3 className="card-title">PhotosModule</h3>
            <p className="card-description">
              View and manage all of the photos in your application.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
