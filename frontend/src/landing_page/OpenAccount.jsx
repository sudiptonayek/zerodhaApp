import React from 'react'
import "./OpenAccount.css"

function OpenAccount() {
  return (
    <div className="container mt-8">
      <div className="row text-center">
        <h1>Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <div className='btn-div'>
          <button className="btn">Sign up for free</button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount