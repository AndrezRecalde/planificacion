import { useEffect } from "react";
import { Box, Divider, MultiSelect, Stack } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { BtnSubmit } from "../../../../components";
import { IconChecks } from "@tabler/icons-react";
import { BTN_TITLES } from "../../../../helpers";
import { usePermissionStore, useUiUsuario, useUsuarioStore } from "../../../../hooks";
import classes from "../../../../assets/styles/permission/AddPermission.module.css";
import dayjs from "dayjs";

export const AddPermisionForm = ({ form }) => {
    const { startAssignPermissions, activateUsuario, setActivateUsuario } = useUsuarioStore();
    const { isOpenModalAddPermission, modalActionAddPermissions } = useUiUsuario();
    const { permissions } = usePermissionStore();

    useEffect(() => {
      if (activateUsuario !== null && isOpenModalAddPermission) {
        form.setValues({
            ...activateUsuario,
            expires_at: dayjs(activateUsuario?.permissions[0]?.expires_at).toDate(),
            permissions: activateUsuario?.permissions.map(permission => permission.id.toString())
        });
        return;
      }

    }, [activateUsuario, isOpenModalAddPermission])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.getValues());
        startAssignPermissions(form.getValues());
        if (activateUsuario !== null) {
            setActivateUsuario(null);
        }
        form.reset();
        modalActionAddPermissions(false);
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
                    key={form.key('expires_at')}
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
                    key={form.key('permissions')}
                    {...form.getInputProps("permissions")}
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
