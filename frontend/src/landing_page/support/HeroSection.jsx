import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'
function HeroSection() {
  return (
    <section className="container-fluid " id="hero">
      <div className="p-5 " id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="">Track tickets</a>
      </div>

      <div className="row mx-5 mb-5">
        <div className="col wrapper mb-5">
          <h5>Search for an answer or browse help topics to create a ticket</h5>
          <input
            type="text"
            className="form mb-5"
            placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..."
          />
          <br />

          <div className="">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins </a>
            <br />
            <a href="#">Kite user manual</a>
          </div>
        </div>
        <div className="col ">
          <h5>Featured</h5>
          <ol>
            <li className="mb-3">
              <a href="#">
                Quantity Freeze Limits for Indices from May 02, 2025
              </a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default HeroSection