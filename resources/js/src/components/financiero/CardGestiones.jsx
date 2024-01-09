import { Badge, Button, Card, Center, Group, Text } from "@mantine/core";
import { IconUserCheck } from "@tabler/icons-react";
import classes from "./CardModule/CardGestiones.module.css";

export const CardGestiones = () => {
    return (
        <Card withBorder radius="md">
            <Group justify="space-between" mt="md">
                <div>
                    <Text fw={500}>Gestión de Tecnologías de la Información</Text>
                    <Text fz="xs" c="dimmed">
                        HAP
                    </Text>
                </div>
                <Badge variant="outline">GTIC</Badge>
            </Group>

            <Card.Section withBorder inheritPadding p="md" mt="md">
                <Text fz="xs" fw={700} tt="uppercase" c="dimmed" mb="xs">
                    Dirección
                </Text>

                <Group gap={8} mb={-8}>
                    <Center>
                        <IconUserCheck
                            size="1.05rem"
                            className={classes.icon}
                            stroke={1.5}
                        />
                        <Text size="xs">Franklin Francis</Text>
                    </Center>
                </Group>
            </Card.Section>

            <Card.Section withBorder inheritPadding p="md" mt="sm">
                <Group gap={30}>
                    <div>
                        <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                            $12.456.050.00
                        </Text>
                        <Text
                            fz="sm"
                            c="dimmed"
                            fw={500}
                            style={{ lineHeight: 1 }}
                            mt={3}
                        >
                            Presupuesto
                        </Text>
                    </div>

                    <Button radius="xl" style={{ flex: 1 }}>
                        Rent now
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
};
