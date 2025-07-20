import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";

function App() {
  return (
      <Router>
            <MyNavbar />
                  <Routes>
                          <Route
                                    path="/"
                                              element={
                                                          <>
                                                                        <HeroSection />
                                                                                      <FeaturesSection />
                                                                                                    <AboutUs />
                                                                                                                  <Footer />
                                                                                                                              </>
                                                                                                                                        }
                                                                                                                                                />
                                                                                                                                                        <Route path="/login" element={<Login />} />
                                                                                                                                                              </Routes>
                                                                                                                                                                  </Router>
                                                                                                                                                                    );
                                                                                                                                                                    }

                                                                                                                                                                    export default App;