import { Navigate, useLocation } from "react-router-dom";
import { ErrorAccessDenied } from "../../../pages";

export const PrivateRoutes = ({
  redirectPath = "/auth/login",
  children,
  requiredRole
}) => {
  let location = useLocation();
  const token = localStorage.getItem("auth_token");
  const user = JSON.parse(localStorage.getItem("service_user"));
  console.log(user)

  // Verifica si el usuario y sus roles existen
  if (!user || !user.roles) {
    return <Navigate to={redirectPath} state={{ from: location }} />;
  }

  // Verifica si el usuario tiene el rol requerido
  const hasRequiredRole = user.roles.some(role => role.name === requiredRole);
  console.log(hasRequiredRole)

  const userHasRequiredRole = token && hasRequiredRole;

  if (!token) {
    return <Navigate to={redirectPath} state={{ from: location }} />;
  }

  if (token && !userHasRequiredRole) {
    return <ErrorAccessDenied />;
  }

  return children;
};
