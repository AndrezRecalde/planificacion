import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthPage } from "../pages";
import { PublicRoutes } from "./public/PublicRoutes";
import { PrivatePages, PrivateRoutes } from "./private";
import { useAuthStore } from "../hooks";


export const AppRouter = () => {
    const { checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    const AuthRoutes = () => (
        <PublicRoutes>
            <Routes>
                <Route path="auth/login/*" element={<AuthPage />} />
                <Route path="/*" element={<Navigate replace to="/auth/login" />} />
            </Routes>
        </PublicRoutes>
    );

    return (
        <Routes>
            <Route
                path="/auth/login/*"
                element={
                    <PublicRoutes>
                        <Routes>
                            <Route path="/*" element={<AuthPage />} />
                        </Routes>
                    </PublicRoutes>
                }
            />

            <Route
                path="/*"
                element={
                    <PrivateRoutes>
                        <PrivatePages />
                    </PrivateRoutes>
                }
            />
        </Routes>
    );
};
