import { NumberInput, Select, Stack } from "@mantine/core";
import { DateInput } from "@mantine/dates";

export const ProyectoTiemposForm = ({ form }) => {
    return (
        <Stack>
            <DateInput
                valueFormat="YYYY-MM-DD"
                defaultValue={new Date()}
                label="Fecha inicio"
                description="YYYY-MM-DD"
                placeholder="Digite la fecha inicio"
                withAsterisk
                key={form.key("fecha_inicio")}
                {...form.getInputProps("fecha_inicio")}
            />
            <DateInput
                valueFormat="YYYY-MM-DD"
                defaultValue={new Date()}
                label="Fecha finalización"
                description="YYYY-MM-DD"
                placeholder="Digite la fecha de finalización"
                withAsterisk
                key={form.key("fecha_finalizacion")}
                {...form.getInputProps("fecha_finalizacion")}
            />
            <Select
                label="Prioridad"
                placeholder="Seleccione la prioridad"
                data={["Baja", "Media", "Alta", "Critica"]}
                defaultValue="Baja"
                clearable
                withAsterisk
                key={form.key("nivel_id")}
                {...form.getInputProps("nivel_id")}
            />
            <NumberInput
                label="Tiempo (Meses)"
                placeholder="Digite el tiempo en meses"
                allowDecimal={false}
                withAsterisk
                min={1}
                max={100}
                key={form.key("tiempo_meses")}
                {...form.getInputProps("tiempo_meses")}
            />
        </Stack>
    );
};
