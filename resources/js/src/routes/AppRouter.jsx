import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../pages";
import { PublicRoutes } from "./public/PublicRoutes";
import { PrivatePages, PrivateRoutes } from "./private";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {
    const { checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

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
                    <PrivateRoutes token={true}>
                        <PrivatePages />
                    </PrivateRoutes>
                }
            />
        </Routes>
    );
};
