import { Route } from "react-router-dom";
import { RoutesNotFound } from "../../not-found/RoutesNotFound";
import {
    CategoriaspdotPage,
    CompetenciaspdotPage,
    ComponentespdotPage,
    ConsolidadosPage,
    EarticulacionPage,
    InstrumentosPage,
    LineasEstrategicasPage,
    MetaspdotPage,
    ObjetivosEstrategicosPage,
    PlanificacionTiposPage,
    ProgramasAdminPage,
    ProgramasPlanPage,
} from "../../../pages";

export const PlanificacionPages = () => {
    return (
        <RoutesNotFound>
            {/* Planificacion */}
            <Route path="instrumentos" element={<InstrumentosPage />} />
            <Route path="objetivos" element={<ObjetivosEstrategicosPage />} />
            <Route path="programas" element={<ProgramasPlanPage />} />
            <Route path="consolidados" element={<ConsolidadosPage />} />

            {/* Planificacion: Administracion */}
            <Route
                path="lineas-estrategicas"
                element={<LineasEstrategicasPage />}
            />
            <Route
                path="competencias-pdot"
                element={<CompetenciaspdotPage />}
            />
            <Route path="componentes-pdot" element={<ComponentespdotPage />} />
            <Route path="categorias-pdot" element={<CategoriaspdotPage />} />
            <Route
                path="estrategias-articulacion"
                element={<EarticulacionPage />}
            />
            <Route path="metas-pdot" element={<MetaspdotPage />} />
            <Route
                path="tipos-planificacion"
                element={<PlanificacionTiposPage />}
            />
            <Route
                path="planificar-programas"
                element={<ProgramasAdminPage />}
            />
        </RoutesNotFound>
    );
};
