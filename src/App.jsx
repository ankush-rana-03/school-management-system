import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Unauthorized from './pages/Unauthorized';
import AdminDashboard from './pages/AdminPage';
import TeacherDashboard from './pages/TeacherPage';
import ParentDashboard from'./pages/ParentPage';

const isLoggedIn = () => {
      const token = localStorage.getItem('token');
      return !!token;
};

const getUserRole = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      return user?.role;
};

// Protected Route with Role Access
const ProtectedRoute = ({ children, allowedRoles }) => {
      if (!isLoggedIn()) {
            return <Navigate to="/login" />;
      }

      const role = getUserRole();
      if (allowedRoles && !allowedRoles.includes(role)) {
            return <Navigate to="/unauthorized" />;
      }

      return children;
};

function App() {
      return (
            <Router>
                  <MyNavbar />
                  <Routes>
                        {/* Public Routes */}
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
                        <Route path="/unauthorized" element={<Unauthorized />} />

                        {/* Protected Route Example */}
                        <Route
                          path="/admin"
                            element={
                                <ProtectedRoute allowedRoles={['admin']}>
                                      <AdminDashboard />
                                          </ProtectedRoute>
                                            }
                                            />
                                            <Route
                                              path="/teacher"
                                                element={
                                                    <ProtectedRoute allowedRoles={['teacher']}>
                                                          <TeacherDashboard />
                                                              </ProtectedRoute>
                                                                }
                                                                />
                                                                <Route
                                                                  path="/parent"
                                                                    element={
                                                                        <ProtectedRoute allowedRoles={['parent']}>
                                                                              <ParentDashboard />
                                                                                  </ProtectedRoute>
                                                                                    }
                                                                                    />
                  </Routes>
            </Router>
      );
}

export default App;