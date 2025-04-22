// src/routes/PrivateRoute.jsx
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  // const { isAuthenticated, userRole } = useSelector((state) => state.auth);

  const user = Cookies.get('user');
  const { token, role: userRole } = JSON.parse(user);
  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (role && userRole !== role) {
    // Redirect to login or a "not authorized" page if the role does not match
    return <Navigate to="/" replace />;
  }

  return <>{children || <Outlet />}</>;
};

export default PrivateRoute;

// function PrivateRoute({ children, role = 'role' }) {
//   return <>{children || <Outlet />}</>;
// }

// export default PrivateRoute;
