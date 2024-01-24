import { Button, Container, Grid } from "@mantine/core";
import {
    ProveedorList,
    TitlePage,
    TextSection,
} from "../../../components";
import { IconPlus } from "@tabler/icons-react";

export const ProveedorPage = () => {
    return (
        <Container size="xl">
            <TitlePage order={2} ta="left" title="Proveedores" />
            <TextSection title="GTIC tiene 30 proveedores registrados" tt="" />
            <Grid grow mb="xl">
                <Button
                    variant="light"
                    mt="md"
                    size="md"
                    radius="md"
                    leftSection={<IconPlus size="1.2rem" />}
                >
                    Agregar
                </Button>
            </Grid>

            <ProveedorList />
        </Container>
    );
};
