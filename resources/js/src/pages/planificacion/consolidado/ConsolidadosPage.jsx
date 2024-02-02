import { Container, Grid } from "@mantine/core";
import {
    ConsolidadoProyectos,
    FilterConsolidado,
    OverviewConsolidado,
    TitlePage,
} from "../../../components";
import { ConsolidadosTable } from "../../../components";

export const ConsolidadosPage = () => {
    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Consolidado de Programas
            </TitlePage>
            <Grid mt={20}>
                <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                    <ConsolidadosTable />
                </Grid.Col>
                <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
                    <FilterConsolidado />
                </Grid.Col>
                <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
                    <OverviewConsolidado />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                    <ConsolidadoProyectos />
                </Grid.Col>
            </Grid>
        </Container>
    );
};
