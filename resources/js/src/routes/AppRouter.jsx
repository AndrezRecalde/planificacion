import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../pages";
import { PrivateRoutes } from "./private/PrivateRoutes";
import { PrivatePages } from "./private/PrivatePages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/auth/login" element={<AuthPage />} />

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
