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
            <TitlePage order={2} ta="left">
                Proveedores
            </TitlePage>
            <TextSection tt="">
                GTIC tiene 30 proveedores registrados
            </TextSection>

            <BtnSection mt={10} mb={10} heigh={40}>
                Agregar
            </BtnSection>

            <ProveedorList />
        </Container>
    );
};
