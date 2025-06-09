import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="row">
          <div className="col">
            <Link to="/">
              <img
                src={logo}
                className="footer-logo"
                alt="Logo"
              />
            </Link>
            <p>© Sudipto 2025</p>
            <div className="social-icons">
              <Link to="#">
                <i className="fa-brands fa-square-facebook"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-square-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-square-instagram"></i>
              </Link>
            </div>
            <div className="social-icons">
              <Link to="#">
                <i className="fa-brands fa-youtube"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-telegram"></i>
              </Link>
            </div>
          </div>
          <div className="col footer-link">
            <ul>
              <li className="company">Company</li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Products</Link>
              </li>
              <li>
                <Link to="#">Pricing</Link>
              </li>
              <li>
                <Link to="#">Referral programme</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Zerodha.tech</Link>
              </li>
              <li>
                <Link to="#">Open source</Link>
              </li>
              <li>
                <Link to="#">Press & media</Link>
              </li>
              <li>
                <Link to="#">Zerodha Cares (CSR)</Link>
              </li>
            </ul>
          </div>
          <div className="col footer-link">
            <ul>
              <li className="support">Support</li>
              <li>
                <Link to="#">Contact us</Link>
              </li>
              <li>
                <Link to="#">Support portal</Link>
              </li>
              <li>
                <Link to="#">Z-Connect blog</Link>
              </li>
              <li>
                <Link to="#">List of charges</Link>
              </li>
              <li>
                <Link to="#">Downloads & resources</Link>
              </li>
              <li>
                <Link to="#">Videos</Link>
              </li>
              <li>
                <Link to="#">Market overview</Link>
              </li>
              <li>
                <Link to="#">How to file a complaint?</Link>
              </li>
              <li>
                <Link to="#">Status of your complaints</Link>
              </li>
            </ul>
          </div>
          <div className="col footer-link">
            <ul>
              <li className="account">Account</li>
              <li>
                <Link to="#">Open an account</Link>
              </li>
              <li>
                <Link to="#">Fund transfer</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row footer-disclaimer">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through
            <br /> Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th
            <br /> Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
            4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk
            <br /> Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy
            <br /> redressal of the grievances
          </p>
          <p>
            <Link to="#">Smart Online Dispute Resolution</Link> |{" "}
            <Link to="#">Grievances Redressal Mechanism</Link>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker /<br /> depository participant and receive
            OTP directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL
            <br /> every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the
            <br /> end of the day. Issued in the interest of investors. KYC is
            one time exercise while dealing in securities markets - once KYC is
            done through a SEBI registered intermediary (broker, DP, Mutual Fund
            etc.), you need not undergo the same
            <br /> process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to
            <br /> make payment in case of allotment. In case of non allotment
            the funds will remain in your bank account. As a business we don't
            give stock tips, and have not authorized anyone to trade on behalf
            of
            <br />
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please to
            <Link to="#">create a ticket here</Link> .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
