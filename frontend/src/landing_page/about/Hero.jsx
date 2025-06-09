import React from 'react'

function Hero() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen text-center">
      <div className="row">
        <h1 className="p-5 mb-5">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h1>
        <hr></hr>
      </div>
      <div className="row">
        <div className="col-6 text-muted">
          <p className=" text-start">
            We kick-started operations on the 15th of August, 2010 <br />
            with the goal of breaking all barriers that traders and <br />
            investors face in India in terms of cost, support, and technology.
            We named the company Zerodha, a combination of Zero and
            <br /> "Rodha", the Sanskrit word for barrier.
          </p>
          <p className="text-start ">
            Today, our disruptive pricing models and in-house
            <br /> technology have made us the biggest stock broker in
            <br /> India.
          </p>
          <p className="text-start ">
            Over 1.6+ crore clients place billions of orders every year
            <br /> through our powerful ecosystem of investment
            <br /> platforms, contributing over 15% of all Indian retail
            <br /> trading volumes.
          </p>
        </div>
        <div className="col-6">
          <p className="text-start fs-9 ">
            In addition, we run a number of popular open online
            <br /> educational and community initiatives to empower retail
            <br /> traders and investors.
          </p>
          <p className="text-start fs-9">
            Rainmatter, our fintech fund and incubator, has invested
            <br /> in several fintech startups with the
            <br /> goal of growing the Indian capital markets.
          </p>
          <p className="text-start fs-9">
            And yet, we are always up to something new every day.
            <br /> Catch up on the latest updates on our blog or see what
            <br /> the media is saying about us or learn more about our <br />
            business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero