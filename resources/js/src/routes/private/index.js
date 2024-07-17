import { AuthGuard } from "./guard/AuthGuard";
import { PrivateRoutes } from "./guard/PrivateRoutes";

import { GestionesPages } from "./routers/GestionesPages";
import { PlanificacionPages } from "./routers/PlanificacionPages";
import { PrivatePages } from "./routers/PrivatePages";




export {
    AuthGuard,
    PrivateRoutes,

    GestionesPages,
    PlanificacionPages,
    PrivatePages
}
