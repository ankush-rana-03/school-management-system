// Login.jsx
import React from "react";
import Lottie from "lottie-react";
import loginAnimation from "../assets/Login.json";

const Login = () => {
  return (
      <div className="login-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
            <div style={{ width: "400px" }}>
                    <Lottie animationData={loginAnimation} loop={true} />
                          </div>

                                <div className="form-section">
                                        {/* Your login form goes here */}
                                                <h2>Login</h2>
                                                        <form>
                                                                  <input type="email" placeholder="Email" className="form-control mb-3" />
                                                                            <input type="password" placeholder="Password" className="form-control mb-3" />
                                                                                      <button className="btn btn-primary">Login</button>
                                                                                              </form>
                                                                                                    </div>
                                                                                                        </div>
                                                                                                          );
                                                                                                          };

                                                                                                          export default Login;