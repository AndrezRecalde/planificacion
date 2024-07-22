import { Box, Divider, Stack, TextInput } from "@mantine/core";
import {
    useComponentepdotStore,
    useUiComponentepdot,
} from "../../../../../hooks";
import { BtnSubmit } from "../../../../elements/buttons/BtnServices";
import { IconChecks } from "@tabler/icons-react";
import { BTN_TITLES } from "../../../../../helpers";
import { useEffect } from "react";

export const ComponentepdotForm = ({ form }) => {
    const {
        startAddComponentepdot,
        activateComponentepdot,
        setActivateComponentepdot,
    } = useComponentepdotStore();
    const { modalActionComponentepdot } = useUiComponentepdot();

    useEffect(() => {
        if (activateComponentepdot !== null) {
            form.setValues({ ...activateComponentepdot });
            return;
        }
    }, [activateComponentepdot]);

    const handleSubmit = (e) => {
        e.preventDefault();
        startAddComponentepdot(form.getValues());
        if (activateComponentepdot !== null) {
            setActivateComponentepdot(null);
        }
        modalActionComponentepdot(false);
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
                    label="Nombre del componente pdot"
                    withAsterisk
                    placeholder="Digite el nombre del componente pdot"
                    key={form.key("nombre_componente")}
                    {...form.getInputProps("nombre_componente")}
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
