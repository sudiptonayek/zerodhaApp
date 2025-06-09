import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            src="media/img/education.svg"
            alt="Education"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6">
          <h1>Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" className="d-block mb-3">
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>

          <a href="#">
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
