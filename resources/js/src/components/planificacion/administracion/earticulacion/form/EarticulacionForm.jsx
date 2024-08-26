import { Box, Divider, Stack, TextInput } from "@mantine/core";
import { BtnSubmit } from "../../../../../components";
import { BTN_TITLES } from "../../../../../helpers";
import { IconChecks } from "@tabler/icons-react";
import { useEarticulacionStore, useUiEarticulacion } from "../../../../../hooks";
import { useEffect } from "react";

export const EarticulacionForm = ({ form }) => {
    const { activateEarticulacion, setActivateEarticulacion, startAddEarticulacion } = useEarticulacionStore();
    const { modalActionEarticulacion } = useUiEarticulacion();

    useEffect(() => {
        if (activateEarticulacion !== null) {
            form.setValues({ ...activateEarticulacion });
            return;
        }

    }, [activateEarticulacion])


    const handleSubmit = (e) => {
        e.preventDefault();
        startAddEarticulacion(form.getValues());
        if (activateEarticulacion !== null) {
            setActivateEarticulacion(null);
        }
        modalActionEarticulacion(false);
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
                    label="Nombre de la estrategía"
                    withAsterisk
                    placeholder="Digite el nombre de la estrategía"
                    key={form.key("nombre_articulacion")}
                    {...form.getInputProps("nombre_articulacion")}
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
