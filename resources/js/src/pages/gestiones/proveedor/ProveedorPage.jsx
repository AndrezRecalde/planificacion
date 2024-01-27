import { Container } from "@mantine/core";
import {
    ProveedorList,
    TitlePage,
    TextSection,
    BtnSection,
} from "../../../components";

export const ProveedorPage = () => {
    return (
        <Container size="xl">
            <TitlePage order={2} ta="left" title="Proveedores" />
            <TextSection title="GTIC tiene 30 proveedores registrados" tt="" />

            <BtnSection mt={10} mb={10} heigh={40}>
                Agregar
            </BtnSection>

            <ProveedorList />
        </Container>
    );
};
