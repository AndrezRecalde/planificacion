import { Grid, Card, Text } from "@mantine/core";


export const MilestoneList = ({ classes }) => {
    return (
        <Grid>
            <Grid.Col span={{ base: 6, md: 2 }}>
                <Card withBorder shadow="sm" radius="sm">
                    <Card.Section
                        withBorder
                        inheritPadding
                        py="xs"
                        style={{ backgroundColor: "#ec5353" }}
                    >
                        <Text ta="center" fz={15}>
                            Febrero
                        </Text>
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py="xs">
                        <Text ta="center" fz={25} fw={700}>
                            29
                        </Text>
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py="xs">
                        <Text ta="center" fz={15}>
                            Jueves
                        </Text>
                    </Card.Section>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 10 }}>
                <div className={classes.body}>
                    <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                        Hito
                    </Text>
                    <Text className={classes.title} mt="xs" mb="md">
                        Solicitud de pago de anticipo al proveedor
                    </Text>
                </div>
            </Grid.Col>
        </Grid>
    );
};
