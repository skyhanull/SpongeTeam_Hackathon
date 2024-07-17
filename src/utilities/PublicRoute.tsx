// src/utilities/PublicRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ authenticated, children }) => {
  return !authenticated ? children : <Navigate to="/dashboard" />;
};

export default PublicRoute;
