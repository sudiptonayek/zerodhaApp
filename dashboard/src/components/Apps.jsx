import React from 'react'
import { Link } from 'react-router-dom'

function Apps() {
  return (
    <div>
      <Link
        to={
          "https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN&pli=1"
        }
      >
        <img
          src="https://www.zerodha.com/static/images/playstore.png"
          alt="Google Play Store"
          style={{ width: "150px", height: "50px" }}
        />
      </Link>
      <Link
        to={
          "https://apps.apple.com/in/app/zerodha-kite/id945969387?mt=8"
        }
      >
        <img
          src="https://www.zerodha.com/static/images/appstore.png"
          alt="App Store"
          style={{ width: "150px", height: "50px" }}
        />
      </Link>
    </div>
  );
}

export default Apps