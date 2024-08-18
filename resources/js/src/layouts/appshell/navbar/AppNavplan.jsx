import { useState } from "react";
import { Badge, Group, SegmentedControl } from "@mantine/core";
import { LinksGroup } from "./NavbarLinksGroup";
//import { lPlanificacion } from "./navlinks/navLinks";
import classes from "../../../assets/styles/layout/NavbarModule/AppNavplan.module.css";
import { routes } from "./navlinks/routes";
import { Logo, TextSection } from "../../../components";

export const AppNavplan = ({ toggleMobile }) => {
    const [section, setSection] = useState("gestion");

    /* const links = lPlanificacion[section].map((item) => (
        <LinksGroup {...item} key={item.label} toggleMobile={toggleMobile} />
    )); */

    const linksFiltered = routes.filter(
        (route) => route.role === "DIR_PLANIFICACION"
    );
    const links = linksFiltered.map((route) =>
        route[section].map((item) => (
            <LinksGroup
                {...item}
                key={item.label}
                toggleMobile={toggleMobile}
            />
        ))
    );

    return (
        <nav className={classes.navbar}>
            <div className={classes.header}>
                <Logo height={100} width={200} />
                <Group mt={20}>
                    <div style={{ flex: 1 }}>
                        <TextSection fw={600} fz={12}>
                            Gestión de Planificación
                        </TextSection>
                    </div>
                    <Badge radius="md" color="indigo.7">
                        GPLA
                    </Badge>
                </Group>
                <Badge color="cyan.5" variant="light">
                    DIR_PLANIFICACION
                </Badge>
            </div>
            <div>
                <SegmentedControl
                    mt={10}
                    value={section}
                    onChange={(value) => setSection(value)}
                    transitionTimingFunction="ease"
                    fullWidth
                    data={[
                        { label: "Gestión", value: "gestion" },
                        { label: "Administrar", value: "administrar" },
                    ]}
                />
            </div>

            <div className={classes.navbarMain}>{links}</div>
        </nav>
    );
};
