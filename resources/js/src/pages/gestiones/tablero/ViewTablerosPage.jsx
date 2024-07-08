import {
    Card,
    Group,
    Container,
    SimpleGrid,
    Badge,
    Divider,
    Select,
} from "@mantine/core";
import { TextSection, TitlePage } from "../../../components";
import { IconBrandDatabricks } from "@tabler/icons-react";

import classes from "../../../assets/styles/gestiones/tablero/CardTablero.module.css";

export const ViewTablerosPage = () => {
    return (
        <Container size="xl">
            <Group justify="space-between">
                <div>
                    <TitlePage order={2} ta="left">
                        Tableros
                    </TitlePage>
                    <TextSection tt="">
                        Espacio de trabajo de Gestión de Tecnologías de la
                        Información
                    </TextSection>
                </div>
                <div>
                    <Select
                        placeholder="2024 - 2026"
                        data={[
                            "2024 - 2026",
                            "2026 - 2030",
                            "2030 - 2034",
                            "2034 - 2038",
                        ]}
                    />
                </div>
            </Group>
            <Divider my="md" />
            <SimpleGrid cols={{ base: 1, xs: 1, sm: 3, md: 3, lg: 3 }}>
                <Card
                    withBorder
                    radius="md"
                    p={0}
                    className={classes.card}
                    onClick={() => console.log("clic")}
                >
                    <Group wrap="nowrap" gap={0}>
                        <IconBrandDatabricks size={80} stroke={1.5} />
                        <div className={classes.body}>
                            <Badge w="fit-content" variant="light">
                                technology
                            </Badge>
                            <TextSection
                                className={classes.title}
                                fw={700}
                                fz={14}
                            >
                                Plan Operativo Anual del 2024
                            </TextSection>
                            <TextSection fw={500} fz={12}>
                                GTIC-2024-05
                            </TextSection>

                            <Group wrap="nowrap" gap="xs">
                                <Group gap="xs" wrap="nowrap">
                                    <TextSection
                                        fw={500}
                                        fz={12}
                                        tt="capitalize"
                                    >
                                        Dir: Franklin Francis
                                    </TextSection>
                                </Group>
                                <TextSection fw={500} fz={12}>
                                    •
                                </TextSection>
                                <TextSection fw={500} fz={12} tt="capitalize">
                                    Feb 6th
                                </TextSection>
                            </Group>
                        </div>
                    </Group>
                </Card>
            </SimpleGrid>
        </Container>
    );
};
