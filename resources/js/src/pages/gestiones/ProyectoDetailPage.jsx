import { Container, Group, Tabs, rem } from "@mantine/core";
import {
    ActivitiesProyecto,
    BtnDetailProyecto,
    DocumentalProyecto,
    FilesProyecto,
    MilestonesProyecto,
    OverviewProyecto,
    TitlePage,
} from "../../components";
import {
    IconList,
    IconCalendarEvent,
    IconFiles,
    IconMessage2Share,
    IconBrandDenodo,
} from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";

export const ProyectoDetailPage = () => {
    const navigate = useNavigate();
    const { tabValue } = useParams();
    const iconStyle = { width: rem(12), height: rem(12) };

    return (
        <Container size="xl">
            <Group justify="space-between">
                <TitlePage
                    title="Fortalecimiento de la seguridad informatica"
                    order={6}
                    size="h6"
                />
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
