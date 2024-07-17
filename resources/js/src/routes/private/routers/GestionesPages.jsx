import { Route } from "react-router-dom";
import { RoutesNotFound } from "../../not-found/RoutesNotFound";
import {
    ActividadesPage,
    DashGestionesPage,
    KanbanActividadesPage,
    ProgramasPage,
    ProveedorPage,
    ProyectosPage,
    ViewTablerosPage,
    WorkspacesPage,
} from "../../../pages";

export const GestionesPages = () => {
    return (
        <RoutesNotFound>
            {/* Gestiones */}
            <Route path="stats/gestion" element={<DashGestionesPage />} />
            <Route path="proyectos" element={<ProyectosPage />} />
            <Route path="proveedores" element={<ProveedorPage />} />
            <Route path="programas" element={<ProgramasPage />} />
            <Route path="actividades" element={<ActividadesPage />} />

            <Route path="workspaces" element={<WorkspacesPage />} />

            <Route path="tableros" element={<ViewTablerosPage />} />
            <Route path="tablero/5555" element={<KanbanActividadesPage />} />
        </RoutesNotFound>
    );
};
