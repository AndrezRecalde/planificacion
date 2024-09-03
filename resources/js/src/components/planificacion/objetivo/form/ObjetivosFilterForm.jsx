import { Box, SimpleGrid, Stack } from "@mantine/core";
import {
    BtnSubmit,
    CompetenciaspdotSelect,
    DateYearForm,
    DepartamentoSelect,
    FieldFilterForm,
} from "../../../../components";
import { BTN_TITLES } from "../../../../helpers";
import { IconSearch } from "@tabler/icons-react";
import {
    ObjetivoFormProvider,
    useObjetivoForm,
    useObjetivoFormContext,
} from "../../../../context";

export const ObjetivosFilterForm = () => {
    const form = useObjetivoForm({
        mode: "uncontrolled",
        initialValues: {
            departamento_id: null,
            competenciapdot_id: null,
            anio_cumplimiento: new Date()

        },
        transformValues: (values) => ({
            ...values,
            departamento_id: Number(values.departamento_id) || null,
            competenciapdot_id: Number(values.competenciapdot_id) || null,
        }),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.getTransformedValues());
    };

    return (
        <FieldFilterForm title="Filtrar objetivos">
            <ObjetivoFormProvider form={form}>
                <Box
                    component="form"
                    onSubmit={form.onSubmit((_, e) => handleSubmit(e))}
                >
                    <Stack>
                        <SimpleGrid
                            cols={{ base: 1, sm: 1, md: 3, lg: 3, xl: 3 }}
                        >
                            <DepartamentoSelect
                                rootContext={useObjetivoFormContext}
                            />
                            <CompetenciaspdotSelect
                                rootContext={useObjetivoFormContext}
                            />
                            <DateYearForm
                                input="anio_lbase"
                                rootContext={useObjetivoFormContext}
                            />
                        </SimpleGrid>
                        <BtnSubmit IconSection={IconSearch} fontSize={16}>
                            {BTN_TITLES.BTN_SEARCH}
                        </BtnSubmit>
                    </Stack>
                </Box>
            </ObjetivoFormProvider>
        </FieldFilterForm>
    );
};
