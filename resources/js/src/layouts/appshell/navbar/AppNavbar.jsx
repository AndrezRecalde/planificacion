import { LinksGroup } from "./NavbarLinksGroup";
import {
    lCoprasPublicas,
    lFinanciero,
    lGestiones,
    lMaximaAutoridad,
    lPlanificacion,
} from "./navlinks/navLinks";
import { Badge, Group } from "@mantine/core";
import { Logo, TextSection } from "../../../components";

import classes from "../../../assets/styles/layout/NavbarModule/AppNavbar.module.css";

export const AppNavbar = ({ role, toggleMobile }) => {
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
        <LinksGroup {...item} key={item.label} toggleMobile={toggleMobile} />
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.header}>
                <Logo height={100} width={200} />
                <Group mt={20}>
                    <div style={{ flex: 1 }}>
                        <TextSection fw={600} fz={12}>
                            Gestión de Tecnologías de la Información
                        </TextSection>
                    </div>
                    <Badge radius="md" color="indigo.7">
                        GTIC
                    </Badge>
                </Group>
            </div>
            <div className={classes.linksInner}>{links}</div>

            {/* <AppNavfooter /> */}
        </nav>
    );
};
