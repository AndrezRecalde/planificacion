import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthPage } from "../pages";
import { useAuthStore } from "../hooks";
import { AppLayout } from "../layouts";
import { PublicRoutes } from "./public/PublicRoutes";
import { RoutesNotFound } from "./not-found/RoutesNotFound";
import { ROLES } from "../helpers";
import {
    AuthGuard,
    GestionesPages,
    PlanificacionPages,
    PrivatePages,
    PrivateRoutes,
} from "./private";

export const AppRouter = () => {
    const { checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    const AuthRoutes = () => (
        <PublicRoutes>
            <Routes>
                <Route path="auth/login/*" element={<AuthPage />} />
                <Route
                    path="/*"
                    element={<Navigate replace to="/auth/login" />}
                />
            </Routes>
        </PublicRoutes>
    );

    return (
        <RoutesNotFound>
            <Route path="/*" element={<AuthRoutes />} />

            <Route element={<AppLayout />}>
                <Route
                    path="/gestion/*"
                    element={
                        <PrivateRoutes requiredRole={ROLES.DIR_GESTION}>
                            <GestionesPages />
                        </PrivateRoutes>
                    }
                />

                <Route
                    path="/gpla/*"
                    element={
                        <PrivateRoutes requiredRole={ROLES.DIR_PLANIFICACION}>
                            <PlanificacionPages />
                        </PrivateRoutes>
                    }
                />

                <Route
                    path="/space/*"
                    element={
                        <AuthGuard>
                            <PrivatePages />
                        </AuthGuard>
                    }
                />
            </Route>
        </RoutesNotFound>
    );
};
