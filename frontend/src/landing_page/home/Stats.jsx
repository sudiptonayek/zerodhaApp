import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div className="container my-5">
      <div className="row flex-column-reverse flex-md-row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 p-4">
          <h1>Trust with confidence</h1>

          <span className="sub-heading d-block mt-4">
            Customer-first always
          </span>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <span className="sub-heading d-block mt-3">No spam or gimmicks</span>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <span className="sub-heading d-block mt-3">The Zerodha universe</span>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <span className="sub-heading d-block mt-3">Do better with money</span>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="media/img/ecosystem.png"
            alt="ecosystem"
            className="img-fluid"
          />
          <div className="explore mt-3 d-flex flex-column align-items-center gap-2">
            <a href="#" className="text-decoration-none">
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
            <a href="#" className="text-decoration-none">
              Try Kite Demo <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
