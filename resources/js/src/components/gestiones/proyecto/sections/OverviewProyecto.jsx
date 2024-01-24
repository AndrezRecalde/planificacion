import {
    Container,
    Grid,
    SimpleGrid,
} from "@mantine/core";
import {
    ActividadesOverview,
    HeaderOverview,
    ProgressActivities,
    ProgressProyect,
    DetailProyect,
    ActivitiesCenter,
    SupplierStat
} from "../../../../components";

export const OverviewProyecto = () => {
    return (
        <Container size="xl" my="md">
            <Grid>
                <Grid.Col span={{ base: 12, xs: 12 }}>
                    <HeaderOverview />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 6 }}>
                    <SimpleGrid cols={{ base: 1, sm: 2 }} mb="lg">
                        <ProgressProyect />
                        <ProgressActivities />
                    </SimpleGrid>

                    <SupplierStat />
                    <ActividadesOverview />

                    <DetailProyect />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 6 }}>
                    <ActivitiesCenter />
                </Grid.Col>
            </Grid>
        </Container>
    );
};
