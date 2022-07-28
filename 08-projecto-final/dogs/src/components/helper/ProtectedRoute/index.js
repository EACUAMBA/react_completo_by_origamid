import React from 'react';
import {UserContext} from "../../../UserContext";
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const userContext = React.useContext(UserContext)
    return userContext.login === true ? children : <Navigate to={'/login'}/>;
};

export default ProtectedRoute;
