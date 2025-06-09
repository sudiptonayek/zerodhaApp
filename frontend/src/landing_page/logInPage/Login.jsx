import React, { useState } from "react";
import "./Login.css";
import loginSchema from "../../Validations/LoginValidation";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await axios.post("http://localhost:5000/api/client/signin", values, {
          withCredentials: true,
        });
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.href = "http://localhost:5174";
        });
      } catch (err) {
        const backendMsg = err.response?.data?.message || "Unknown error";
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: backendMsg,
        });
      }
      setLoading(false);
    },
  });

  return (
    <div
      className="login-container mt-5 mb-5 d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="card shadow p-4" style={{ maxWidth: 400, width: "100%" }}>
        <h2 className="mb-4 text-center">Login to Zerodha</h2>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="form-group mb-3">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              fullWidth
              disabled={loading}
              autoFocus
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger mt-1" style={{ fontSize: "0.95em" }}>
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="form-group mb-3">
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              disabled={loading}
              InputProps={{
                endAdornment: (
                  <span
                    onClick={() => setShowPassword((v) => !v)}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </span>
                ),
              }}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger mt-1" style={{ fontSize: "0.95em" }}>
                {formik.errors.password}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
            style={{ fontWeight: 600 }}
          >
            {loading ? <CircularProgress size={22} color="inherit" /> : "Login"}
          </button>
        </form>
        <div className="mt-3 text-center">
          <span>Not registered? </span>
          <Link to={"/signup"}>Sign Up</Link>
        </div>
        <div className="mt-2 text-center">
          <span>Forgot Password? </span>
          <Link to={"/forgot-password"}>Click Here</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
