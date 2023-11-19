import { useContext } from "react";
import { Navigate, useLocation} from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Spinner } from "keep-react";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {

    const location = useLocation();
    const  {user,loading} = useContext(AuthContext);

    if(loading)
    {
        return <Spinner color="info" size="lg" />
    }

    if(user)
    {
        return children ;
    }

    return <Navigate to="/login" state={location.pathname} ></Navigate>
};
PrivateRoute.propTypes = {
    children:PropTypes.node,
}

export default PrivateRoute;