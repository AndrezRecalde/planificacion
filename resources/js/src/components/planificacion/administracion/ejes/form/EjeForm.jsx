import { useEffect } from "react";
import { Box, Divider, Stack, TextInput } from "@mantine/core";
import { BtnSubmit } from "../../../../../components";
import { BTN_TITLES } from "../../../../../helpers";
import { useEjeStore, useUiEje } from "../../../../../hooks";
import { IconChecks } from "@tabler/icons-react";

export const EjeForm = ({ form }) => {

    const { startAddEje, activateEje, setActivateEje } = useEjeStore();
    const { modalActionEje } = useUiEje();

    useEffect(() => {
      if (activateEje !== null) {
        form.setValues({
            ...activateEje
        });
        return;
      }
    }, [activateEje]);

    const handleSubmit = (e) => {
        e.preventDefault();
        startAddEje(form.getValues());
        if (activateEje !== null) {
            setActivateEje(null);
        }
        modalActionEje(false);
        form.reset();
    }


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
                    label="Nombre del Eje"
                    withAsterisk
                    placeholder="Digite el Eje"
                    key={form.key("nombre_eje")}
                    {...form.getInputProps("nombre_eje")}
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
