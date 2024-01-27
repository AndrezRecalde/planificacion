import { useState } from "react";
import { SegmentedControl } from "@mantine/core";
import { LinksGroup } from "./NavbarLinksGroup";
import { lPlanificacion } from "./navlinks/navLinks";
import classes from "./NavbarModule/AppNavplan.module.css";


export const AppNavplan = () => {
    const [section, setSection] = useState("gestion");

    const links = lPlanificacion[section].map((item) => (
        <LinksGroup {...item} key={item.label} />
    ));

    return (
        <nav className={classes.navbar}>
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
