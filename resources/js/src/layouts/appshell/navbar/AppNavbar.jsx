import { TitleSection } from "../../../components";
import { LinksGroup } from "./NavbarLinksGroup";
import {
    lCoprasPublicas,
    lFinanciero,
    lGestiones,
    lMaximaAutoridad,
    lPlanificacion,
} from "./navlinks/navLinks";
import classes from "./NavbarModule/AppNavbar.module.css";

export const AppNavbar = ({ role }) => {
    const mockdata =
        role === "DIR_GESTION"
            ? lGestiones
            : role === "DIR_PLANIFICACION"
            ? lPlanificacion
            : role === "DIR_CP"
            ? lCoprasPublicas
            : role === "DIR_FINANCIERO"
            ? lFinanciero
            : role === "MAXIMA_AUTORIDAD"
            ? lMaximaAutoridad
            : [];

    const links = mockdata.map((item) => (
        <LinksGroup {...item} key={item.label} />
    ));

    return (
        <div>
            <div className={classes.header}>
                <TitleSection
                    title="Gestión de Tecnologías de la Información"
                    fw={700}
                    fz={12}
                />
            </div>
            <div className={classes.linksInner}>{links}</div>
        </div>
    );
};
