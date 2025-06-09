
import React,{useState} from 'react'
import './SignUp.css'
import { Formik,Form, useFormik } from "formik";
import userSchema from '../../Validations/UserValidation';
import axios from 'axios';
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";



function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

const formik=useFormik({
  initialValues: {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  },
  validationSchema: userSchema,
  onSubmit:async (values,{resetForm}) => {
   await axios
      .post("https://zerodhaapp-ajjs.onrender.com/api/client/signup", values)
      .then((res) => {
        console.log(res.data);
        resetForm();
        Swal.fire({
          title: "User Created Successfully",
          icon: "success",
          draggable: true,
        });
        navigate("/signin");
        
      })
      .catch((err) => {
         Swal.fire("Error", err.response.data.message, "error");
      });
  },
})



  return (
    <div className="container mx-auto my-5">
      <div className="row justify-content-center align-items-center text-center">
        <h1 className="fw-bold">Open a free demat & trading account online</h1>
        <p>
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </p>

        <div className="col-12 col-md-6">
          <img
            src="media/img/signup.png"
            alt="signup"
            className="img-fluid w-100 mx-auto my-5 mt-5 p-5"
          />
        </div>
        <div className="col-12 col-md-6">
          <h2>Sign up now</h2>
          <p>Or track your existing application</p>

          <form onSubmit={formik.handleSubmit} className="form">
            <div className="">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                fullWidth
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </div>

            <br />
            <div>
              <TextField
                id="outlined-basic"
                label="username"
                type="text"
                variant="outlined"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
              />
              {formik.touched.username && formik.errors.username ? (
                <div style={{ color: "red" }}>{formik.errors.username}</div>
              ) : null}
            </div>

            <br />
            <div style={{ position: "relative" }}>
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
                InputProps={{
                  endAdornment: (
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </span>
                  ),
                }}
              />
              {formik.touched.password && formik.errors.password && (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              )}
            </div>

            <br />

            <div style={{ position: "relative" }}>
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <span
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {showConfirmPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </span>
                  ),
                }}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div style={{ color: "red" }}>
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>

            <br />
            <button type="submit" className="singup-btn">
              Sign Up
            </button>
          </form>
          <p>
            By proceeding, you agree to the Zerodha{" "}
            <Link to={"#"} style={{ cursor: "pointer" }}>
              terms
            </Link>
            &
            <Link to={"#"} style={{ cursor: "pointer" }}>
              {" "}
              privacy policy
            </Link>
          </p>
          <p>
            Already have an account?{" "}
            <Link to={"/signin"} style={{ cursor: "pointer" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp
