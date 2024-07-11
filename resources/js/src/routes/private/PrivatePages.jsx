import { Route, Routes } from "react-router-dom";
import {
    ChangePwdPage,
    ProfilePage,
    ProgramasPage,
    ProveedorPage,
    ProyectosPage,
    ReformasPage,
    DashGestionesPage,
    TransaccionPage,
    InstrumentosPage,
    ActividadesPage,
    ObjetivosEstrategicosPage,
    ProgramasPlanPage,
    ConsolidadosPage,
    ViewTablerosPage,
    KanbanActividadesPage,
    WorkspacesPage,
} from "../../pages";
import { AppLayout } from "../../layouts";

export const PrivatePages = () => {
    return (
        <AppLayout>
            <Routes>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/change-password" element={<ChangePwdPage />} />
                {/* Financiero */}
                <Route
                    path="/financiero/transacciones"
                    element={<TransaccionPage />}
                />
                <Route path="/financiero/reformas" element={<ReformasPage />} />
                {/* Gestiones */}
                <Route path="/stats/gestion" element={<DashGestionesPage />} />
                <Route path="/proyectos" element={<ProyectosPage />} />
                <Route path="/proveedores" element={<ProveedorPage />} />
                <Route path="/programas" element={<ProgramasPage />} />
                <Route path="/actividades" element={<ActividadesPage />} />

                <Route path="/workspaces" element={<WorkspacesPage />} />

                <Route path="/tableros" element={<ViewTablerosPage />} />
                <Route path="/tablero/5555" element={<KanbanActividadesPage />} />

                {/* TODO: PARAMETRO */}


                {/* Planificacion */}
                <Route path="/gpla/instrumentos" element={<InstrumentosPage />} />
                <Route path="/gpla/objetivos" element={<ObjetivosEstrategicosPage />} />
                <Route path="/gpla/programas" element={<ProgramasPlanPage />} />
                <Route path="/gpla/consolidados" element={<ConsolidadosPage />} />




            </Routes>
        </AppLayout>
    );
};
