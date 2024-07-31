import { useEffect } from "react";
import { Box, Divider, SimpleGrid, Stack, TextInput } from "@mantine/core";
import { YearPickerInput } from "@mantine/dates";
import { BtnSubmit } from "../../../../../components";
import { IconChecks } from "@tabler/icons-react";
import { BTN_TITLES } from "../../../../../helpers";
import { useGobiernoStore, useUiGobierno } from "../../../../../hooks";
import dayjs from "dayjs";

export const GobiernoForm = ({ form }) => {
    const { startAddGobierno, activateGobierno, setActivateGobierno } =
        useGobiernoStore();

    const { modalActionGobierno } = useUiGobierno();

    useEffect(() => {
      if (activateGobierno !== null) {
        form.setValues({ ...activateGobierno,
            fecha_inicio: dayjs(activateGobierno.fecha_inicio),
            fecha_fin: dayjs(activateGobierno.fecha_fin),

         });
        return;
      }

    }, [activateGobierno]);


    const handleSubmit = (e) => {
        e.preventDefault();
        startAddGobierno(form.getTransformedValues());
        if (activateGobierno !== null) {
            setActivateGobierno(null);
        }
        modalActionGobierno(false);
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
                    label="Nombre del Gobierno"
                    withAsterisk
                    placeholder="Digite el nombre del gobierno"
                    key={form.key("nombre_gobierno")}
                    {...form.getInputProps("nombre_gobierno")}
                />
                <TextInput
                    radius="sm"
                    label="Nombres del Presidente"
                    withAsterisk
                    placeholder="Digite los nombres del presidente"
                    key={form.key("presidente")}
                    {...form.getInputProps("presidente")}
                />
                <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2 }}>
                    <YearPickerInput
                        label="Inicio periodo"
                        placeholder="Digita el inicio del periodo"
                        key={form.key("fecha_inicio")}
                        {...form.getInputProps("fecha_inicio")}
                    />
                    <YearPickerInput
                        label="Fin periodo"
                        placeholder="Digita el fin del periodo"
                        key={form.key("fecha_fin")}
                        {...form.getInputProps("fecha_fin")}
                    />
                </SimpleGrid>
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
