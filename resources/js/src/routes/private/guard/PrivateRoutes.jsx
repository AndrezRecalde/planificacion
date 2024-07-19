import { Navigate, useLocation } from "react-router-dom";
import { ErrorAccessDenied } from "../../../pages";
import { useMemo } from "react";

export const PrivateRoutes = ({
    redirectPath = "/auth/login",
    children,
    requiredRole,
}) => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("service_user"));
    const token = localStorage.getItem("auth_token");

    // Verifica si el usuario y sus roles existen
    if (!user || !user.roles) {
        return <Navigate to={redirectPath} state={{ from: location }} />;
    }

    // Verifica si el usuario tiene el rol requerido
    const hasRequiredRole = useMemo(
        () => user.roles.some((role) => role.name === requiredRole),
        [user, requiredRole]
    );

    if (!token) {
        return <Navigate to={redirectPath} state={{ from: location }} />;
    }

    if (token && !hasRequiredRole) {
        return <ErrorAccessDenied />;
    }

    return children;
};
