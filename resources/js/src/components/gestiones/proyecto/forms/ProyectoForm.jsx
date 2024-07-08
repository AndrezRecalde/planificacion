import {
    Box,
    Divider,
    Grid,
    NumberInput,
    Select,
    Stack,
    TextInput,
    Textarea,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { BtnSubmit } from "../../../../components";
import { BTN_TITLES } from "../../../../helpers";
import { IconChecks } from "@tabler/icons-react";

export const ProyectoForm = ({ form }) => {
    return (
        <Box
            component="form"
            mx="auto"
            style={(theme) => ({
                padding: theme.spacing.xs,
            })}
            onSubmit={form.onSubmit((_, e) => handleSubmit(e))}
        >
            <Divider />
            <Stack>
                <Grid grow mt={20} mb={20}>
                    <Grid.Col>
                        <Select
                            label="Programa"
                            placeholder="Programa al que pertenece"
                            data={["React", "Angular", "Vue", "Svelte"]}
                            defaultValue="React"
                            clearable
                            disabled
                            withAsterisk
                        />
                    </Grid.Col>
                    <Grid.Col>
                        <Select
                            label="Tipo Proyecto"
                            placeholder="Elige el tipo de proyecto"
                            data={["React", "Angular", "Vue", "Svelte"]}
                            defaultValue="React"
                            clearable
                            withAsterisk
                        />
                    </Grid.Col>
                    <Grid.Col>
                        <TextInput
                            label="Nombre Proyecto"
                            placeholder="Digite el nombre del proyecto"
                            withAsterisk
                        />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Select
                            label="Prioridad"
                            placeholder="Seleccione la prioridad"
                            data={["Baja", "Media", "Alta", "Critica"]}
                            defaultValue="Baja"
                            clearable
                            withAsterisk
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <NumberInput
                            label="Ponderacion"
                            placeholder="Digite la ponderacipm"
                            decimalScale={2}
                            withAsterisk
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <NumberInput
                            label="Tiempo (Meses)"
                            placeholder="Digite el tiempo en meses"
                            allowDecimal={false}
                            withAsterisk
                            min={1}
                            max={100}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <DateInput
                            valueFormat="YYYY-MM-DD"
                            defaultValue={new Date()}
                            label="Fecha inicio"
                            description="YYYY-MM-DD"
                            placeholder="Digite la fecha inicio"
                            withAsterisk
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <DateInput
                            valueFormat="YYYY-MM-DD"
                            defaultValue={new Date()}
                            label="Fecha finalización"
                            description="YYYY-MM-DD"
                            placeholder="Digite la fecha de finalización"
                            withAsterisk
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Select
                            label="Tipo unidad"
                            placeholder="Seleccione el tipo de unidad"
                            data={["Unidad", "Hectareas", "Granos"]}
                            clearable
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <TextInput
                            label="Indicador"
                            placeholder="Digite el indicador"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Textarea
                            label="Linea base"
                            placeholder="Digite la línea base"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Textarea
                            label="Meta detalle"
                            placeholder="Digite el detalle de la meta"
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
            <BtnSubmit IconSection={IconChecks}>
                {BTN_TITLES.BTN_SAVE}
            </BtnSubmit>
        </Box>
    );
};
