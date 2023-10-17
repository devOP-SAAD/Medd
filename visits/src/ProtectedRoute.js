// ProtectedRoute.js
import React from 'react';
import { Navigate  } from 'react-router-dom';

function ProtectedRoute({ authenticated, children }) {
  if (authenticated) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
