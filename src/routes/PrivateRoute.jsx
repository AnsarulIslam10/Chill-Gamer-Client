import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Loading from '../pages/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;