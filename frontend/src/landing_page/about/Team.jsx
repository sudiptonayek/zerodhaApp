import React from 'react'

function Team() {
  return (
    <div className="container-xl mx-auto flex flex-col items-center justify-center h-screen text-center">
      <div className="row">
        <h1 className='text-center'>People</h1>
      </div>
      <div className="row " style={{ lineHeight: "20px" }}>
        <div className="col">
          <img
            src="media/img/nithinKamath.jpg"
            alt=""
            className="img-fluid rounded-circle shadow-2xl mt-5"
            style={{ width: "40%"}}
          />
          <h4 className='mt-3 p-3'>Nithin Kamath</h4>
          <p>Founder, CEO</p>
        </div>
        <div className="col">
          <p className="text-start fs-9 text-muted">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br/>
            hurdles he faced during his decade long stint as a trader. Today<br/>,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="text-start fs-9 text-muted">
            He is a member of the SEBI Secondary Market Advisory Committee<br/>
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-start fs-9 text-muted ">
            Playing basketball is his zen.
          </p>
          <p className="text-start fs-9 text-muted ">
            Connect on Homepage / TradingQnA / Twitter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team