import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection () {
  return (
    <div className="container py-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8 col-md-10 col-12">
          <h1 className="mb-3 fw-bold fs-1">Zerodha Products</h1>
          <p className="mb-2 fs-5">
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className="fs-6">
            Check out our <Link to="#">investment offerings →</Link>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default HeroSection