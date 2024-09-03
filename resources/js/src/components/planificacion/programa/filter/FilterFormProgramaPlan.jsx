import { Box, SimpleGrid, Stack, Text } from "@mantine/core";
import {
    BtnSubmit,
    CodigoProgramaText,
    DepartamentoSelect,
    FieldFilterForm,
    PlanificacionTipoSelect,
} from "../../../../components";
import { IconSearch } from "@tabler/icons-react";
import { BTN_TITLES } from "../../../../helpers";
import {
    ProgramaFormProvider,
    useProgramaForm,
    useProgramaFormContext,
} from "../../../../context";
import { useProgramaStore } from "../../../../hooks";

export const FilterFormProgramaPlan = () => {

    const { startLoadProgramas } = useProgramaStore();

    const form = useProgramaForm({
        mode: "uncontrolled",
        initialValues: {
            departamento_id: null,
            cod_programa: "",
            planificaciontipo_id: null,
        },
        transformValues: (values) => ({
            ...values,
            departamento_id: Number(values.departamento_id) || null,
            planificaciontipo_id: Number(values.planificaciontipo_id) || null,
        }),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.getTransformedValues());
        startLoadProgramas(form.getTransformedValues());
    };

    return (
        <FieldFilterForm title="Filtrar programa">
            <ProgramaFormProvider form={form}>
                <Box
                    component="form"
                    onSubmit={form.onSubmit((_, e) => handleSubmit(e))}
                >
                    <Stack>
                        <SimpleGrid cols={{ base: 1, sm: 1, md: 3, lg: 3, xl: 3 }}>
                            <DepartamentoSelect
                                rootContext={useProgramaFormContext}
                            />
                            <CodigoProgramaText
                                rootContext={useProgramaFormContext}
                            />
                            <PlanificacionTipoSelect
                                rootContext={useProgramaFormContext}
                            />
                        </SimpleGrid>
                        <BtnSubmit IconSection={IconSearch} fontSize={16}>
                            {BTN_TITLES.BTN_SEARCH}
                        </BtnSubmit>
                    </Stack>
                </Box>
            </ProgramaFormProvider>
        </FieldFilterForm>
    );
};
