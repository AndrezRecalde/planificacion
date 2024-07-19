import { Box, Divider, Select, Stack, TextInput } from "@mantine/core";
import { BtnSubmit } from "../../../../../components";
import { IconChecks } from "@tabler/icons-react";
import {
    useLestrategiapdotStore,
    useLineapdotStore,
    useUiLestrategiapdot,
} from "../../../../../hooks";

export const LineaEstrategiaForm = ({ form }) => {
    const { startAddLestrategiapdot } = useLestrategiapdotStore();
    const { lineaspdot } = useLineapdotStore();
    const { modalActionLestrategiapdot } = useUiLestrategiapdot();

    const handleSubmit = (e) => {
        e.preventDefault();
        startAddLestrategiapdot(form.getTransformedValues());
        modalActionLestrategiapdot(false);
        form.reset();
    };

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
                    label="Nombre de la línea estrategica"
                    withAsterisk
                    placeholder="Digite el nombre"
                    key={form.key("linea_estrategica")}
                    {...form.getInputProps("linea_estrategica")}
                />
                <Select
                    label="Elegir Línea del PDOT"
                    placeholder="Elige una opción"
                    data={lineaspdot.map((linea) => {
                        return {
                            label: linea.nombre_linea,
                            value: linea.id.toString(),
                        };
                    })}
                    nothingFoundMessage="Nada encontrado..."
                    clearable
                    key={form.key("lineapdot_id")}
                    {...form.getInputProps("lineapdot_id")}
                />
                <BtnSubmit IconSection={IconChecks}>Guardar</BtnSubmit>
            </Stack>
        </Box>
    );
};
