import { Route, Routes } from "react-router-dom";
import {
    ChangePwdPage,
    ProfilePage,
    ProgramasPage,
    ProveedorPage,
    ProyectoDetailPage,
    ProyectosPage,
    ReformasPage,
    StatsGestionesPage,
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
                <Route path="/stats/gestion" element={<StatsGestionesPage />} />
                <Route path="/proyectos" element={<ProyectosPage />} />
                <Route
                    path="/proyecto/detail/"
                    element={<ProyectoDetailPage />}
                />
                <Route path="/proveedores" element={<ProveedorPage />} />
                <Route path="/programas" element={<ProgramasPage />} />

                {/* TODO: PARAMETRO */}
            </Routes>
        </AppLayout>
    );
};
