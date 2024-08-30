import { useEffect } from "react";
import { Box, Divider, Select, Stack, TextInput } from "@mantine/core";
import { useEarticulacionStore, useMetapdotStore, useUiMetapdot } from "../../../../../hooks";
import { BtnSubmit } from "../../../../../components";
import { IconChecks } from "@tabler/icons-react";
import { BTN_TITLES } from "../../../../../helpers";


export const MetapdotForm = ({ form }) => {
    const { startAddMetapdot, activateMetapdot, setActivateMetapdot } =
        useMetapdotStore();
    const { isOpenModalMetapdot, modalActionMetapdot } = useUiMetapdot();
    const { earticulaciones } = useEarticulacionStore();

    useEffect(() => {
        if (isOpenModalMetapdot && activateMetapdot !== null) {
            form.setValues({
                ...activateMetapdot,
                earticulacion_id: activateMetapdot.earticulacion_id?.toString(),
            });
        }
    }, [isOpenModalMetapdot, activateMetapdot]);

    const handleSubmit = (e) => {
        e.preventDefault();
        startAddMetapdot(form.getTransformedValues());
        if (activateMetapdot !== null) {
            setActivateMetapdot(null);
        }
        modalActionMetapdot(false);
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
                    label="Meta del PDOT"
                    withAsterisk
                    placeholder="Digite la meta del pdot"
                    //key={form.key("nombre_meta")}
                    {...form.getInputProps("nombre_meta")}
                />
                <Select
                    clearable
                    label="Estrategia"
                    placeholder="Debe seleccionar una estrategía"
                    data={earticulaciones.map(estrategia => {
                        return {
                            label: estrategia.nombre_articulacion,
                            value: estrategia.id.toString()
                        }
                    })}
                    //key={form.key("earticulacion_id")}
                    {...form.getInputProps("earticulacion_id")}
                    nothingFoundMessage="Nada encontrado..."
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
