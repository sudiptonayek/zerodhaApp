import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row flex-column-reverse flex-md-row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div className="mt-3">
            <a href="#" className="text-decoration-none">
              See pricing <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="col-md-6 pricing-section d-flex flex-wrap justify-content-center gap-3">
          <div className="card text-center p-3" style={{ width: "150px" }}>
            <img
              src="media/img/pricing0.svg"
              alt="Free account"
              className="img-fluid mb-2"
            />
            <p>Free account opening</p>
          </div>
          <div className="card text-center p-3" style={{ width: "150px" }}>
            <img
              src="media/img/pricing0.svg"
              alt="Free delivery"
              className="img-fluid mb-2"
            />
            <p>
              Free equity delivery <br /> and direct mutual funds
            </p>
          </div>
          <div className="card text-center p-3" style={{ width: "150px" }}>
            <img
              src="media/img/other-trades.svg"
              alt="Intraday"
              className="img-fluid mb-2"
            />
            <p>
              Intraday and <br /> F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
