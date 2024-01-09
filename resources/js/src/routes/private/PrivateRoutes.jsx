import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({
    token,
    redirectPath = "/auth/login",
    children,
}) => {
    return !token ? (
        <Navigate to={redirectPath} replace />
    ) : (
        children
    );
};
