import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ForgotPassword() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // Formik initial values
  const initialValues = {
    email: "",
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
  });

  // Submit handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setMsg("");
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/client/forget-password",
        { email: values.email }
      );
      setMsg(response.data.message);
      resetForm();
    } catch (err) {
      setMsg(err.response?.data?.message || "Error occurred");
    }
    setLoading(false);
    setSubmitting(false);
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="card shadow p-4" style={{ maxWidth: 400, width: "100%" }}>
        <h2 className="text-center mb-4">Forgot Your Password?</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  disabled={loading || isSubmitting}
                  autoFocus
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading || isSubmitting}
              >
                {loading || isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
        {msg && (
          <div
            className={`alert mt-3 ${
              msg.toLowerCase().includes("check") ||
              msg.toLowerCase().includes("sent")
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
  );
}

export default ForgotPassword;
