import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Blocks } from "react-loader-spinner";

export default function ResetPassword() {
  const { id, token } = useParams();
  const [msg, setMsg] = useState("");
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://zerodhaapp-ajjs.onrender.com/api/client/reset-password/${id}/${token}`)
      .then(() => {
        setValid(true);
        setLoading(false);
      })
      .catch(() => {
        setMsg("Invalid or expired link");
        setLoading(false);
      });
  }, [id, token]);

  // Yup validation schema
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  // Formik initial values
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setMsg("");
    try {
      const res = await axios.post(
        `https://zerodhaapp-ajjs.onrender.com/api/client/reset-password/${id}/${token}`,
        { password: values.password }
      );
      setMsg(res.data.message);
      setTimeout(() => navigate("/signin"), 2000);
      resetForm();
    } catch (err) {
      setMsg(err.response?.data?.message || "Error occurred");
    }
    setSubmitting(false);
  };

  if (loading) {
    return (
      <div className="d-flex vh-100 align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden"><Blocks visible={true} /></span>
        </div>
      </div>
    );
  }

  return valid ? (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="card shadow p-4" style={{ maxWidth: 400, width: "100%" }}>
        <h3 className="text-center mb-4">🔒 Reset Password</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter new password"
                  autoFocus
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>
              <div className="mb-3">
                <Field
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm new password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Resetting..." : "Reset Password"}
              </button>
            </Form>
          )}
        </Formik>
        {msg && (
          <div
            className={`alert mt-3 ${
              msg.toLowerCase().includes("success")
                ? "alert-success"
                : "alert-danger"
            }`}
            role="alert"
          >
            {msg}
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="d-flex vh-100 align-items-center justify-content-center">
      <div className="card p-4 shadow" style={{ maxWidth: 400, width: "100%" }}>
        <h4 className="mb-3 text-danger">😕 Link Invalid</h4>
        <p>{msg}</p>
        <button
          className="btn btn-outline-primary w-100 mt-2"
          onClick={() => navigate("/forgot-password")}
        >
          Request New Link
        </button>
      </div>
    </div>
  );
}
