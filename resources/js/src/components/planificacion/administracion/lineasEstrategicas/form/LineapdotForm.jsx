import { useEffect } from "react";
import { Box, Divider, Stack, TextInput } from "@mantine/core";
import { BtnSubmit } from "../../../../../components";
import { IconChecks } from "@tabler/icons-react";
import { useLineapdotStore, useUiLineapdot } from "../../../../../hooks";

export const LineapdotForm = ({ form }) => {
    const { startAddLineapdot, activeLineapdot } = useLineapdotStore();
    const { modalActionLineapdot } = useUiLineapdot();

    useEffect(() => {
        if (activeLineapdot !== null) {
            form.setValues({ ...activeLineapdot });
        }
    }, [activeLineapdot]);

    const handleSubmit = (e) => {
        e.preventDefault();
        startAddLineapdot(form.getValues());
        form.reset();
        modalActionLineapdot(false);
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
                    label="Nombre de la línea"
                    withAsterisk
                    placeholder="Digite el nombre"
                    key={form.key("nombre_linea")}
                    {...form.getInputProps("nombre_linea")}
                />
                <BtnSubmit IconSection={IconChecks}>Guardar</BtnSubmit>
            </Stack>
        </Box>
    );
};
