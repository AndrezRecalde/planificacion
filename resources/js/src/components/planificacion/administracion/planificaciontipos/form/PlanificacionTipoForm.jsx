import { useEffect } from "react";
import { Box, Divider, Stack, TextInput } from "@mantine/core";
import { BtnSubmit } from "../../../../../components";
import { IconChecks } from "@tabler/icons-react";
import { BTN_TITLES } from "../../../../../helpers";
import {
    usePlanificacionTipoStore,
    useUiPlanificacionTipo,
} from "../../../../../hooks";

export const PlanificacionTipoForm = ({ form }) => {
    const {
        startAddPlanificacionTipo,
        activatePlanificacionTipo,
        setActivatePlanificacionTipo,
    } = usePlanificacionTipoStore();

    const { isOpenModalPlanificacionTipo, modalActionPlanificacionTipo } =
        useUiPlanificacionTipo();

    useEffect(() => {
        if (
            isOpenModalPlanificacionTipo &&
            activatePlanificacionTipo !== null
        ) {
            form.setValues({ ...activatePlanificacionTipo });
        }
    }, [isOpenModalPlanificacionTipo, activatePlanificacionTipo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        startAddPlanificacionTipo(form.getValues());
        if (activatePlanificacionTipo !== null) {
            setActivatePlanificacionTipo(null);
        }
        form.reset();
        modalActionPlanificacionTipo(false);
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
                    label="Tipo de Planificación"
                    withAsterisk
                    placeholder="Digite el tipo de planificación"
                    //key={form.key("nombre_meta")}
                    {...form.getInputProps("nombre_planificacion")}
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
