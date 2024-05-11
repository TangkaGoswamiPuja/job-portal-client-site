import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Auth";

const Private = ({ children }) => {
    const { user, loading} = useContext(AuthContext);
    const location = useLocation()
    // console.log(location)
    if (loading) {
        return <span className="loading loading-spinner text-primary"></span>

    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default Private;