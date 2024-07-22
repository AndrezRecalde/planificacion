import {
    Box,
    Divider,
    MultiSelect,
    Select,
    Stack,
    TextInput,
} from "@mantine/core";
import { BtnSubmit } from "../../../../../components";
import { APP_WORDS, BTN_TITLES } from "../../../../../helpers";
import {
    useCategoriapdotStore,
    useComponentepdotStore,
    useLestrategiapdotStore,
} from "../../../../../hooks";
import { IconChecks } from "@tabler/icons-react";

export const CompetenciapdotForm = ({ form }) => {
    const { lestrategias } = useLestrategiapdotStore();
    const { componentespdot } = useComponentepdotStore();
    const { categoriaspdot } = useCategoriapdotStore();

    return (
        <Box
            component="form"
            mx="auto"
            style={(theme) => ({
                padding: theme.spacing.xs,
            })}
            onSubmit={form.onSubmit((_, e) => handleSubmit(e))}
        >
            <Stack
                bg="var(--mantine-color-body)"
                align="stretch"
                justify="center"
                gap="lg"
            >
                <Divider />
                <TextInput
                    radius="sm"
                    label="Nombre de la Competencia PDOT"
                    withAsterisk
                    placeholder="Ingrese nombre de la competencia del pdot"
                    key={form.key("nombre_competencia")}
                    {...form.getInputProps("nombre_competencia")}
                />
                <Select
                    required
                    label="Linea Estrategica del PDOT"
                    placeholder="Seleccione una linea estrategica del pdot"
                    data={lestrategias.map((linea) => {
                        return {
                            label: linea.linea_estrategica,
                            value: linea.id.toString(),
                        };
                    })}
                    nothingFoundMessage={APP_WORDS.NOTHING_FOUND}
                    clearable
                    key={form.key("lestrategiapdot_id")}
                    {...form.getInputProps("lestrategiapdot_id")}
                />
                <MultiSelect
                    label="Componentes del PDOT"
                    placeholder="Seleccione los componentes del pdot"
                    data={componentespdot.map((componente) => {
                        return {
                            label: componente.nombre_componente,
                            value: componente.id.toString(),
                        };
                    })}
                    key={form.key("componentes")}
                    {...form.getInputProps("componentes")}
                    hidePickedOptions
                    withAsterisk
                />
                <MultiSelect
                    label="Categorias del PDOT"
                    placeholder="Seleccione las categorias del PDOT"
                    data={categoriaspdot.map((categoria) => {
                        return {
                            label: categoria.nombre_categoria,
                            value: categoria.id.toString(),
                        };
                    })}
                    key={form.key("cotpdots")}
                    {...form.getInputProps("cotpdots")}
                    hidePickedOptions
                    withAsterisk
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
