import { useEffect } from "react";
import { Container, Divider, Group } from "@mantine/core";
import {
    BtnSection,
    ObjetivosFilterForm,
    TitlePage,
} from "../../../components";
import { ObjetivosEstrategicosTable } from "../../../components";
import { IconSquarePlus2 } from "@tabler/icons-react";
import { APP_WORDS, BTN_TITLES } from "../../../helpers";
import { useCompetenciapdotStore, useDepartamentoStore } from "../../../hooks";

export const ObjetivosEstrategicosPage = () => {
    const usuario = JSON.parse(localStorage.getItem("service_user"));
    const { startLoadDepartamentos, startClearDepartamentos } =
        useDepartamentoStore();
    const { startLoadCompetenciaspdot, startClearCompetenciapdot } =
        useCompetenciapdotStore();

    useEffect(() => {
        startLoadDepartamentos({ institucion_id: usuario.institucion_id });
        startLoadCompetenciaspdot({ activo: true });

        return () => {
            startClearDepartamentos();
            startClearCompetenciapdot();
        };
    }, []);

    return (
        <Container size="xxl">
            <Group justify="space-between">
                <div>
                    <TitlePage order={2} ta="left">
                        {APP_WORDS.OBJETIVO_TITLE}
                    </TitlePage>
                </div>
                <div>
                    <BtnSection
                        mb={20}
                        icon={IconSquarePlus2}
                        handleAction={() => console.log("clic")}
                    >
                        {BTN_TITLES.BTN_ADD}
                    </BtnSection>
                </div>
            </Group>
            <Divider my="md" />
            <ObjetivosFilterForm />

            <ObjetivosEstrategicosTable />
        </Container>
    );
};
