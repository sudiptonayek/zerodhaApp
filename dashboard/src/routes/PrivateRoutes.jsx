import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import React from "react";
import isAuthenticated from "../util/auth";

function PrivateRoutes({ children }) {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await isAuthenticated();
      setIsAuth(!!res);
    };
    checkAuth();
  }, []);

  if (isAuth === null) {
    return (
      <div>
        
        <BeatLoader color="#36D7B7" loading size={15} />
      </div>
    );
  }

  return isAuth ? children : <Navigate to="/signin" replace />;
}

export default PrivateRoutes;
