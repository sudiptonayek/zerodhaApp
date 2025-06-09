

import React from 'react'
import "./Awards.css"

function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="media/img/largestBroker.svg" alt="" className="img-fluid" />
        </div>
        <div className="col-6">
          <h1>Largest Stock Broker In India</h1>
          <p>
            2+ milion Zerodha Client contributed to over 15% of all retail order
            volumes in India daily by trding an investing in:
          </p>
          <div className="row list-item">
            <div className="col-6 ">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct Mutual fands</li>
                <li>Bonds & Govt. Securities</li>
              </ul>

            </div>
          </div>
          <img src="media/img/pressLogos.png" alt="" className="img" />
        </div>
      </div>
    </div>
  );
}

export default Awards