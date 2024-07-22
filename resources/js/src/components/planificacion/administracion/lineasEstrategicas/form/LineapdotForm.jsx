import { useEffect } from "react";
import { Box, Divider, Stack, TextInput } from "@mantine/core";
import { BtnSubmit } from "../../../../../components";
import { IconChecks } from "@tabler/icons-react";
import { useLineapdotStore, useUiLineapdot } from "../../../../../hooks";
import { APP_WORDS, BTN_TITLES } from "../../../../../helpers";

export const LineapdotForm = ({ form }) => {
    const { startAddLineapdot, activeLineapdot, setActivateLineapdot } =
        useLineapdotStore();
    const { modalActionLineapdot } = useUiLineapdot();

    useEffect(() => {
        if (activeLineapdot !== null) {
            form.setValues({ ...activeLineapdot });
        }
    }, [activeLineapdot]);

    const handleSubmit = (e) => {
        e.preventDefault();
        startAddLineapdot(form.getValues());
        if (activeLineapdot !== null) {
            setActivateLineapdot(null);
        }
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
                    label={APP_WORDS.LINEAPDOT_TEXT_NOMBRELINEA}
                    withAsterisk
                    placeholder={APP_WORDS.LINEAPDOT_PLACEHOLDER_NOMBRELINEA}
                    key={form.key("nombre_linea")}
                    {...form.getInputProps("nombre_linea")}
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
