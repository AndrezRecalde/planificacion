import { Container, Divider, Grid } from "@mantine/core";
import { LineasEstrategicasTable, LineaspdotTable, TitlePage } from "../../../../components";

export const LineasEstrategicasPage = () => {
    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Lineas Estrategicas
            </TitlePage>
            <Divider my="md" />
            <Grid>
                <Grid.Col span={{ base: 12, sm: 8, md: 8, lg: 8 }}>
                    <LineasEstrategicasTable />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 4, md: 4, lg: 4 }}>
                    <LineaspdotTable />
                </Grid.Col>
            </Grid>
        </Container>
    );
};
