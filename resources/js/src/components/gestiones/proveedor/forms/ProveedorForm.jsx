import { Box, Divider, Stack, TextInput } from "@mantine/core";
import { BtnSubmit } from "../../../../components";
import { APP_WORDS } from "../../../../helpers";
import { useProveedorStore, useUiProveedor } from "../../../../hooks";
import { IconChecks } from "@tabler/icons-react";
import { useEffect } from "react";

export const ProveedorForm = ({ form }) => {
    const { startAddProveedor, activateProveedor } = useProveedorStore();
    const { modalActionProveedor } = useUiProveedor();

    useEffect(() => {
        if (activateProveedor !== null) {
            form.setValues({ ...activateProveedor });
            return;
        }
    }, [activateProveedor]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.getValues());
        startAddProveedor(form.getValues());
        form.reset();
        modalActionProveedor(0);
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
                    label={APP_WORDS.PROVEEDOR_TEXT_NAME}
                    withAsterisk
                    placeholder={APP_WORDS.PROVEEDOR_PLACEHOLDER_NAME}
                    key={form.key("nombre_proveedor")}
                    {...form.getInputProps("nombre_proveedor")}
                />
                <TextInput
                    radius="sm"
                    label={APP_WORDS.PROVEEDOR_TEXT_RUC}
                    withAsterisk
                    placeholder={APP_WORDS.PROVEEDOR_PLACEHOLDER_RUC}
                    key={form.key("ruc")}
                    {...form.getInputProps("ruc")}
                />
                <TextInput
                    radius="sm"
                    label={APP_WORDS.PROVEEDOR_TEXT_TELEFONO}
                    withAsterisk
                    placeholder={APP_WORDS.PROVEEDOR_PLACEHOLDER_TELEFONO}
                    key={form.key("telefono")}
                    {...form.getInputProps("telefono")}
                />
                <BtnSubmit IconSection={IconChecks}>Guardar</BtnSubmit>
            </Stack>
        </Box>
    );
};
