import { useEffect } from "react";
import { Box, Divider, MultiSelect, Stack } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { BtnSubmit } from "../../../../components";
import { IconChecks } from "@tabler/icons-react";
import { BTN_TITLES } from "../../../../helpers";
import { usePermissionStore, useUiUsuario, useUsuarioStore } from "../../../../hooks";
import classes from "../../../../assets/styles/permission/AddPermission.module.css";

export const AddPermisionForm = ({ form }) => {
    const { startAssignPermissions, activateUsuario } = useUsuarioStore();
    const { isOpenModalAddPermission } = useUiUsuario();
    const { permissions } = usePermissionStore();

    useEffect(() => {
      if (activateUsuario !== null && isOpenModalAddPermission) {
        form.setValues({
            ...activateUsuario,
        });
        return;
      }

    }, [activateUsuario, isOpenModalAddPermission])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.getValues());
        startAssignPermissions(form.getValues());
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
                <DateInput
                    withAsterisk
                    valueFormat="YYYY-MM-DD"
                    label="Fecha Limite"
                    description="YYYY-MM-DD"
                    placeholder="Digite la fecha limite del permiso"
                    {...form.getInputProps("expires_at")}
                />
                <MultiSelect
                    withAsterisk
                    label="Permisos"
                    placeholder="Seleccione el/los permisos"
                    data={permissions.map((permission) => {
                        return {
                            label: permission.name,
                            value: permission.id.toString(),
                        };
                    })}
                    searchable
                    classNames={{ pill: classes.pill }}
                    {...form.getInputProps("permissions")}
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
