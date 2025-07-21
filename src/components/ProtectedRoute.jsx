const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));

        if (!token || !user) return <Navigate to="/login" replace />;

          const role = user.role;

            if (!allowedRoles.includes(role)) return <Navigate to="/unauthorised" replace />;

              return children;
              };
