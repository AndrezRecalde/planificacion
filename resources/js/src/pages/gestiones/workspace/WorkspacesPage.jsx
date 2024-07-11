import { Container, Divider, Tabs, rem } from "@mantine/core";
import { IconCategory, IconFolders, IconMessageCircle, IconSettings } from "@tabler/icons-react";

import classes from "../../../assets/styles/workspaces/Workspaces.module.css";
import { TextSection } from "../../../components";
import { ProgramasPage } from "../programa/ProgramasPage";
import { ViewTablerosPage } from "../tablero/ViewTablerosPage";

export const WorkspacesPage = () => {
    return (
        <Tabs variant="unstyled" defaultValue="workspace" classNames={classes}>
            <Container size="md">
                <Tabs.List grow>
                    <Tabs.Tab
                        value="workspace"
                        leftSection={
                            <IconCategory
                                style={{ width: rem(20), height: rem(20) }}
                            />
                        }
                    >
                        <TextSection tt="" fz={14} fs="italic">
                            Espacios de trabajo
                        </TextSection>
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="programas"
                        leftSection={
                            <IconFolders
                                style={{ width: rem(20), height: rem(20) }}
                            />
                        }
                    >
                        <TextSection tt="" fz={14} fs="italic">
                            Programas activos
                        </TextSection>
                    </Tabs.Tab>
                </Tabs.List>
            </Container>

            <Tabs.Panel value="workspace">
                <Divider my="lg" />
                <ViewTablerosPage />
            </Tabs.Panel>

            <Tabs.Panel value="programas">
                <Divider my="lg" />
                <ProgramasPage />
            </Tabs.Panel>
        </Tabs>
    );
};
