import React, { useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../assets/login.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // remove error on change
  };

  const validate = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      errs.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errs.email = "Enter a valid email";
    }

    if (!formData.password) {
      errs.password = "Password is required";
    } else if (formData.password.length < 6) {
      errs.password = "Minimum 6 characters";
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        alert("Login successful (demo)");
        setSubmitted(false);
      }, 1000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="row shadow-lg rounded-4 bg-white p-3" style={{ width: "90%", maxWidth: "1000px" }}>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <Lottie animationData={loginAnimation} loop={true} style={{ height: "100%", maxHeight: "400px" }} />
        </div>

        <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
          <h3 className="mb-4 text-center fw-bold">Login to Your Account</h3>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email address</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                name="password"
                className={`form-control ${errors.password && "is-invalid"}`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <button
              type="submit"
              className={`btn btn-primary w-100 fw-bold py-2 ${submitted ? "disabled" : ""}`}
              disabled={submitted}
            >
              {submitted ? (
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
              ) : null}
              {submitted ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;