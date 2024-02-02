import { Container, Tabs, rem } from "@mantine/core";
import { TitlePage } from "../../../../components";

import classes from "./SectionsModule/Segmented.module.css";
import { IconArchive, IconBrandTelegram, IconInbox } from "@tabler/icons-react";

export const DocumentalProyecto = () => {
    return (
        <Container size="xl" my="md">
            <TitlePage order={4} ta="left">
                Archivo documental
            </TitlePage>
            <Tabs
                variant="unstyled"
                defaultValue="entrada"
                orientation=""
                classNames={classes}
            >
                <Tabs.List grow>
                    <Tabs.Tab
                        value="entrada"
                        leftSection={
                            <IconInbox
                                style={{ width: rem(16), height: rem(16) }}
                            />
                        }
                    >
                        Entrada
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="enviados"
                        leftSection={
                            <IconBrandTelegram
                                style={{ width: rem(16), height: rem(16) }}
                            />
                        }
                    >
                        Enviados
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="archivados"
                        leftSection={
                            <IconArchive
                                style={{ width: rem(16), height: rem(16) }}
                            />
                        }
                    >
                        Archivados
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs>
        </Container>
    );
};
