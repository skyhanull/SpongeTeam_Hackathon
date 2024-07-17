// src/utilities/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ authenticated, role, requiredRole, children }) => {
  if (!authenticated) {
    return <Navigate to="/login" />;
  }
  if (role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default ProtectedRoute;
