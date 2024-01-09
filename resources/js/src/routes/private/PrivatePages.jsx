import { Route, Routes } from "react-router-dom";
import {
    ChangePwdPage,
    ProfilePage,
    ProyectoDetailPage,
    ProyectosPage,
    ReformasPage,
    TransaccionPage,
} from "../../pages";
import { AppLayout } from "../../layouts";

export const PrivatePages = () => {
    return (
        <AppLayout>
            <Routes>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/change/password" element={<ChangePwdPage />} />
                {/* Financiero */}
                <Route
                    path="/financiero/transacciones"
                    element={<TransaccionPage />}
                />
                <Route path="/financiero/reformas" element={<ReformasPage />} />
                {/* Gestiones */}
                <Route path="/proyectos" element={<ProyectosPage />} />
                <Route
                    path="/proyecto/detail/"
                    element={<ProyectoDetailPage />}
                />{" "}
                {/* TODO: PARAMETRO */}
            </Routes>
        </AppLayout>
    );
};
