import { useEffect } from "react";
import {
    Box,
    Divider,
    FileInput,
    SimpleGrid,
    Stack,
    TextInput,
} from "@mantine/core";
import { YearPickerInput } from "@mantine/dates";
import { BtnSubmit } from "../../../../components";
import { IconChecks } from "@tabler/icons-react";
import { BTN_TITLES } from "../../../../helpers";
import { useInstrumentoStore, useUiInstrumento } from "../../../../hooks";
import dayjs from "dayjs";

export const InstrumentoForm = ({ form }) => {
    const { activateInstrumento, setActivateInstrumento, startAddInstrumento } =
        useInstrumentoStore();
    const { modalActionInstrumento } = useUiInstrumento();

    useEffect(() => {
        if (activateInstrumento !== null) {
            form.setValues({
                ...activateInstrumento,
                fecha_inicio: dayjs(activateInstrumento.fecha_inicio).toDate(),
                fecha_fin: dayjs(activateInstrumento.fecha_fin).toDate(),
            });
            return;
        }
    }, [activateInstrumento]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.getTransformedValues());
        startAddInstrumento(form.getTransformedValues());
        if (activateInstrumento !== null) {
            setActivateInstrumento(null);
        }
        modalActionInstrumento(false);
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
                    label="Nombre del archivo"
                    withAsterisk
                    placeholder="Digite el nombre del archivo"
                    key={form.key("nombre_archivo")}
                    {...form.getInputProps("nombre_archivo")}
                />
                <FileInput
                    clearable
                    label="Cargar archivo"
                    placeholder="Cargar archivo del PDOT"
                    accept="application/pdf"
                    key={form.key("archivo")}
                    {...form.getInputProps("archivo")}
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
