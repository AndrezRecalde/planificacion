import { Container } from "@mantine/core";
import { BtnSection, TextSection, TitlePage } from "../../../components";
import { ObjetivosTable } from "../../../components";
import { IconPlus } from "@tabler/icons-react";

export const ObjetivosEstrategicosPage = () => {
    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Objetivos estrategicos
            </TitlePage>
            <TextSection fw={500} tt="">
                GPLA tiene 5 objetivos estrategicos documentados
            </TextSection>
            <BtnSection mt={10} mb={20} icon={IconPlus} handleAction={() => console.log('clic')}>
                Agregar
            </BtnSection>
            <ObjetivosTable />
        </Container>
    );
};
