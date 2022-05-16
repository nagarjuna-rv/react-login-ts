import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
    isAuth: boolean;
}
const ProtectedRoute = ({isAuth,...routeProps}:Props) => {
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;