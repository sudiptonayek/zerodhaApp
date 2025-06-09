import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>Charges</h1>
        <p>List of all charges and taxes</p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="card h-100 text-center p-3">
            <img
              src="media/img/pricing0.svg"
              alt="0"
              className="img-fluid mx-auto"
              style={{ width: "50%" }}
            />
            <h4 className="mt-3">Free equity delivery</h4>
            <p>
              All equity delivery investments (NSE, BSE), <br />
              are absolutely free — ₹ 0 brokerage.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 text-center p-3">
            <img
              src="media/img/other-trades.svg"
              alt="20"
              className="img-fluid mx-auto"
              style={{ width: "50%" }}
            />
            <h4 className="mt-3">Intraday and F&O trades</h4>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per <br />
              executed order on intraday trades across <br />
              equity, currency, and commodity trades. Flat <br />
              ₹20 on all option trades.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 text-center p-3">
            <img
              src="media/img/pricing0.svg"
              alt="0"
              className="img-fluid mx-auto"
              style={{ width: "50%" }}
            />
            <h4 className="mt-3">Free direct MF</h4>
            <p>
              All direct mutual fund investments are <br />
              absolutely free — ₹ 0 commissions & DP <br />
              charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
