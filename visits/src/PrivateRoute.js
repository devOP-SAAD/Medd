import React from 'react';
import { Navigate, Route } from 'react-router-dom';

function PrivateRoute  ({element, isAuthenticated }) {
 return isAuthenticated ? (
    element ):(
        <Navigate to="/" replace />
    
 );
    };

export default PrivateRoute;
