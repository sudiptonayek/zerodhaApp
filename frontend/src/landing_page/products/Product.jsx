import React from 'react'
import { Link } from 'react-router-dom';

function Product() {
  return (
    <div className="container py-5">
      {/* Kite Section */}
      <section className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src="media/img/kite.png" alt="Kite" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">Kite</h2>
          <p>
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <div>
              <Link to="#">Try Demo →</Link>
              <br />
              <Link to="https://play.google.com/store/apps/details?id=com.zerodha.kite3">
                <img
                  src="https://zerodha.com/static/images/google-play-badge.svg"
                  alt="Google Play"
                  className="img-fluid mt-2"
                  style={{ maxWidth: "150px" }}
                />
              </Link>
            </div>
            <div>
              <Link to="#">Learn More →</Link>
              <br />
              <Link to="https://apps.apple.com/in/app/kite-zerodha/id1449453802">
                <img
                  src="https://zerodha.com/static/images/appstore-badge.svg"
                  alt="App Store"
                  className="img-fluid mt-2"
                  style={{ maxWidth: "150px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Console Section */}
      <section className="row align-items-center mb-5">
        <div className="col-md-6 order-md-1 order-2">
          <h2 className="fw-bold">Console</h2>
          <p>
            The central dashboard for your Zerodha account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations.
          </p>
          <Link to="#">Learn more →</Link>
        </div>
        <div className="col-md-6 order-md-2 order-1 mb-4 mb-md-0">
          <img
            src="media/img/console.png"
            alt="Console"
            className="img-fluid"
          />
        </div>
      </section>

      {/* Coin Section */}
      <section className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src="media/img/coin.png" alt="Coin" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">Coin</h2>
          <p>
            Buy direct mutual funds online, commission-free, delivered directly
            to your Demat account. Enjoy the investment experience on your
            Android and iOS devices.
          </p>
          <Link to="#">Coin →</Link>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <Link to="https://play.google.com/store/apps/details?id=com.zerodha.coin">
              <img
                src="https://zerodha.com/static/images/google-play-badge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </Link>
            <Link to="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554">
              <img
                src="https://zerodha.com/static/images/appstore-badge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Kite Connect API */}
      <section className="row align-items-center mb-5">
        <div className="col-md-6 order-md-1 order-2">
          <h2 className="fw-bold">Kite Connect API</h2>
          <p>
            Build powerful trading platforms and experiences with our super
            simple HTTP/JSON APIs. If you are a startup, build your investment
            app and showcase it to our clientbase.
          </p>
          <Link to="#">Kite connect →</Link>
        </div>
        <div className="col-md-6 order-md-2 order-1 mb-4 mb-md-0">
          <img
            src="media/img/landing.svg"
            alt="Kite Connect"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>
      </section>

      {/* Varsity Section */}
      <section className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="media/img/varsity.png"
            alt="Varsity"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">Varsity Mobile</h2>
          <p>
            An easy to grasp collection of stock market lessons with in-depth
            coverage and illustrations. Content is broken down into bite-size
            cards to help you learn on the go.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <Link to="https://play.google.com/store/apps/details?id=com.zerodha.varsity">
              <img
                src="https://zerodha.com/static/images/google-play-badge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </Link>
            <Link to="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753">
              <img
                src="https://zerodha.com/static/images/appstore-badge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center mt-5">
        <p className="fs-5">
          Want to know more about our technology stack? Check out the
          <Link to="/"> Zerodha.tech</Link> blog.
        </p>
      </section>
    </div>
  );
}

export default Product