import React, { useContext } from 'react';
import "./PrivateRoute.css"
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location=useLocation();

    console.log(location)

    if(loading){
        return <div className="spinner-border text-dark spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={{from :location}} replace></Navigate>
};

export default PrivateRoute;