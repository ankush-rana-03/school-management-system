import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Example user object from login
    const userRole = user?.role;

      if (!userRole) {
          return <Navigate to="/login" />;
            }

              if (!allowedRoles.includes(userRole)) {
                  return <Navigate to="/unauthorized" />;
                    }

                      return <Outlet />;
                      };

                      export default ProtectedRoute;