import React from "react";
import "./Table.css"; // keep custom styles if needed

function Table() {
  return (
    <div className="container mt-5">
      <h4 className="mb-3">Charges for account opening</h4>
      <div className="table-responsive mb-5">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <span className="badge bg-success text-white">Free</span>
              </td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>
                <span className="badge bg-success text-white">Free</span>
              </td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="mb-3">Charges for optional value added services</h4>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Service</th>
              <th>Billing Frequency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: ₹249 / ₹2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: ₹100 | SIP: ₹10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: ₹2000 | Historical: ₹2000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
