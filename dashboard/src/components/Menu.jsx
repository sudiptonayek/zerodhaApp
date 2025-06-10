import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import axios from "axios";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

function Menu() {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
 

  

  

    useEffect(() => {
      axios
        .get("https://zerodhaapp-ajjs.onrender.com/api/client/profile", {
          withCredentials: true,
        })
        .then((res) => setUser(res.data))
        .catch(() => setUser(null));
    }, []);

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://zerodhaapp-ajjs.onrender.com/api/client/logout",
        {},
        { withCredentials: true }
      );
      window.location.replace("https://zerodhaapp-frontend-ljoz.onrender.com/signin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const menuClass = "menu";
  const selectedMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="img/logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick(0)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectMenu === 0 ? selectedMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              onClick={() => handleMenuClick(1)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectMenu === 1 ? selectedMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              onClick={() => handleMenuClick(2)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectMenu === 2 ? selectedMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              onClick={() => handleMenuClick(3)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectMenu === 3 ? selectedMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              onClick={() => handleMenuClick(4)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectMenu === 4 ? selectedMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              onClick={() => handleMenuClick(5)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectMenu === 5 ? selectedMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div
          className="profile"
          onMouseEnter={() => setIsProfileOpen(true)}
          onMouseLeave={() => setIsProfileOpen(false)}
        >
          <div className="avatar ">
            {user && user.username ? (
              user.username.charAt(0).toUpperCase()
            ) : (
              <AccountBoxIcon style={{ fontSize: "2rem" }} />
            )}
          </div>

          <p className="username text-truncate fs-4">
            {user ? user.username : "User"}
          </p>
          {isProfileOpen && (
            <div className="dropdown-menu dropdown-menu-end show shadow-lg border-0 mt-2 p-4">
              {/* Profile info */}
              <div className="d-flex align-items-center mb-3">
                <div className=" profile-pic rounded-circle d-flex align-items-center justify-content-center fw-bold me-3 flex-shrink-0 shadow-sm">
                  {user && user.username ? (
                    user.username.charAt(0).toUpperCase()
                  ) : (
                    <AccountBoxIcon
                      style={{ fontSize: "2rem", color: "#fff" }}
                    />
                  )}
                </div>

                <div className="profile-details">
                  <span className="username">
                     username : {user ? user.username : "USERID"}
                  </span>
                  <span className="email">
                    email : {user ? user.email : "user@email.com"}
                  </span>

                  {/* Logout button */}
                  <span
                    style={{ cursor: "pointer", color: "#dc3545" }}
                    className=" w-100 d-flex align-items-center justify-content-center  p-4  mb-2  "
                    onClick={handleLogout}
                  >
                    <LogoutIcon style={{ fontSize: "small" }} />
                    Log out
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
