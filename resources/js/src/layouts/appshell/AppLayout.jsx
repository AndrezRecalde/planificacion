import { AppShell, Badge, Group, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AppHeader, AppNavbar, AppNavfooter, AppNavplan } from "../../layouts";
import { useState } from "react";
import { TextSection } from "../../components";

import classes from "./navbar/NavbarModule/AppNavbar.module.css";


export const AppLayout = ({ children }) => {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    /* Cambiarlo por el state */
    const [role, setRole] = useState("DIR_PLANIFICACION");

    const Scroll = (
        <ScrollArea scrollbarSize={6}>

        </ScrollArea>
    )

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 310,
                breakpoint: "sm",
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <AppHeader
                    mobileOpened={mobileOpened}
                    toggleMobile={toggleMobile}
                    desktopOpened={desktopOpened}
                    toggleDesktop={toggleDesktop}
                />
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <AppShell.Section>
                    <div className={classes.header}>
                        <Group>
                            <div style={{ flex: 1 }}>
                                <TextSection
                                    title="Gestión de Tecnologías de la Información"
                                    fw={700}
                                    fz={12}
                                />
                            </div>
                            <Badge radius="md" color="indigo.7">
                                GTIC
                            </Badge>
                        </Group>
                    </div>
                </AppShell.Section>
                <AppShell.Section
                    className={classes.links}
                    grow
                    component={ScrollArea}
                >
                    {role !== "DIR_PLANIFICACION" ? (
                        <AppNavbar role="DIR_GESTION" />
                    ) : (
                        <AppNavplan />
                    )}
                    {/* TODO: Realizar condicional para que se cargue el Navbar de Planificacion */}
                </AppShell.Section>
                <AppShell.Section>
                    <AppNavfooter />
                </AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
};
