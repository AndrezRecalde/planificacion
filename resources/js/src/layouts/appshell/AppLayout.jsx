import { useState } from "react";
import { AppHeader, AppNavbar, AppNavplan } from "../../layouts";
import { AppShell, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "../../assets/styles/layout/NavbarModule/AppNavbar.module.css";

export const AppLayout = ({ children }) => {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    /* Cambiarlo por el state */
    const [role, setRole] = useState("DIR_PLANIFICACION");

    const Scroll = <ScrollArea scrollbarSize={6}></ScrollArea>;

    return (
        <AppShell
            layout="alt"
            padding="md"
            header={{ height: 60 }}
            navbar={{
                width: 310,
                breakpoint: "sm",
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
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
                {/* <AppShell.Section>
                    <div className={classes.header}>
                        <Group>
                            <div style={{ flex: 1 }}>
                                <TextSection fw={700} fz={12}>
                                    Gestión de Tecnologías de la Información
                                </TextSection>
                            </div>
                            <Badge radius="md" color="indigo.7">
                                GTIC
                            </Badge>
                        </Group>
                    </div>
                </AppShell.Section> */}
                <AppShell.Section grow className={classes.links} component={ScrollArea}>
                    {role !== "DIR_PLANIFICACION" ? (
                        <AppNavbar
                            role="DIR_PLANIFICACION"
                            toggleMobile={toggleMobile}
                        />
                    ) : (
                        <AppNavplan toggleMobile={toggleMobile} />
                    )}
                </AppShell.Section>
                {/* <AppShell.Section>
                    <AppNavfooter />
                </AppShell.Section> */}
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
};
