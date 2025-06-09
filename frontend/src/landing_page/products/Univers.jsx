import React from "react";
import { Link } from "react-router-dom";
import "./Univers.css";

function Univers() {
  return (
    <div className="container py-5">
      <section className="text-center mb-5">
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p className="fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </section>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Card 1 */}
        <div className="col">
          <div className="card h-100 text-center">
            <img
              src="media/img/zerodhaFundhouse.png"
              alt="Zerodha Fundhouse"
              className="img-fluid"
            />
            <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div className="card h-100 text-center">
            <img
              src="media/img/sensibullLogo.svg"
              alt="Sensibull"
              className="img-fluid"
            />
            <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div className="card h-100 text-center">
            <img
              src="media/img/tijori.svg"
              alt="Tijori"
              className="img-fluid"
            />
            <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col">
          <div className="card h-100 text-center">
            <img
              src="media/img/streakLogo.png"
              alt="Streak"
              className="img-fluid"
            />
            <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col">
          <div className="card h-100 text-center">
            <img
              src="media/img/smallcaseLogo.png"
              alt="Smallcase"
              className="img-fluid"
            />
            <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks and ETFs.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col">
          <div className="card h-100 text-center">
            <img
              src="media/img/dittoLogo.png"
              alt="Ditto"
              className="img-fluid"
            />
            <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <Link to="/signup" className="btn btn-primary w-50 w-md-25">
          Sign Up For Free
        </Link>
      </div>
    </div>
  );
}

export default Univers;
