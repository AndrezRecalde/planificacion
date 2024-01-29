import { Container, Stack } from "@mantine/core";
import {
    TitlePage,
    FilterFormProgramaPlan,
    ProgramaPlanTable,
    ProyectoFromPrograma
} from "../../../components";
import classes from "../../gestiones/proyecto/ProyectoModule/Proyecto.module.css";

export const ProgramasPlanPage = () => {
    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left" title="Programas estrategicos" />
            <Stack>
                <FilterFormProgramaPlan />
                <ProgramaPlanTable />
                <ProyectoFromPrograma classes={classes} />
            </Stack>
        </Container>
    );
};
