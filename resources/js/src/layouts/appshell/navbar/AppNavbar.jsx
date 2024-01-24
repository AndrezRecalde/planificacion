import { Group, Badge } from "@mantine/core";
import { TextSection } from "../../../components";
import { LinksGroup } from "./NavbarLinksGroup";
import {
    lCoprasPublicas,
    lFinanciero,
    lGestiones,
    lMaximaAutoridad,
    lPlanificacion,
} from "./navlinks/navLinks";
import classes from "./NavbarModule/AppNavbar.module.css";
import { AppNavfooter } from "./AppNavfooter";

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
        <nav className={classes.navbar}>
            <div className={classes.linksInner}>{links}</div>
            <AppNavfooter />


        </nav>
    );
};
