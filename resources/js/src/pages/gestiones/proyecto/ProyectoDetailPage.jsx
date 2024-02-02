import { Container, Group, Tabs, rem } from "@mantine/core";
import {
    ActivitiesProyecto,
    BtnDetailProyecto,
    DocumentalProyecto,
    FilesProyecto,
    MilestonesProyecto,
    OverviewProyecto,
    TitlePage,
} from "../../../components";
import {
    IconList,
    IconCalendarEvent,
    IconFiles,
    IconMessage2Share,
    IconBrandDenodo,
    IconBrandCashapp,
} from "@tabler/icons-react";

export const ProyectoDetailPage = () => {
    const iconStyle = { width: rem(15), height: rem(15) };

    return (
        <Container size="xl">
            <Group justify="space-between">
                <TitlePage order={6} size="h6">
                    Fortalecimiento de la seguridad informatica
                </TitlePage>
                <BtnDetailProyecto />
            </Group>
            <Tabs defaultValue="resumen" color="indigo">
                <Tabs.List grow justify="space-between">
                    <Tabs.Tab
                        value="resumen"
                        leftSection={<IconBrandDenodo style={iconStyle} />}
                    >
                        Resumen
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="actividades"
                        leftSection={<IconList style={iconStyle} />}
                    >
                        Actividades
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="milestones"
                        leftSection={<IconCalendarEvent style={iconStyle} />}
                    >
                        Milestones
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="archivos"
                        leftSection={<IconFiles style={iconStyle} />}
                    >
                        Archivos
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="presupuesto"
                        leftSection={<IconBrandCashapp style={iconStyle} />}
                    >
                        Presupuesto
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="documental"
                        leftSection={<IconMessage2Share style={iconStyle} />}
                    >
                        Documental
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="resumen">
                    <OverviewProyecto />
                </Tabs.Panel>
                <Tabs.Panel value="actividades">
                    <ActivitiesProyecto />
                </Tabs.Panel>
                <Tabs.Panel value="milestones">
                    <MilestonesProyecto />
                </Tabs.Panel>
                <Tabs.Panel value="archivos">
                    <FilesProyecto />
                </Tabs.Panel>
                <Tabs.Panel value="documental">
                    <DocumentalProyecto />
                </Tabs.Panel>
            </Tabs>
        </Container>
    );
};
