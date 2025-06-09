import React from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="container mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-10">
          <img
            src="media/img/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4"
          />
          <h1 className="mt-4">Invest Everything</h1>
          <p className="mt-2">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button className="btn btn-primary mt-4 px-4 py-2" onClick={() => navigate("/signup")}>
            Sign Up For Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
