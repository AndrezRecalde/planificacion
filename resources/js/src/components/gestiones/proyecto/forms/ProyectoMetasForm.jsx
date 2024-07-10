import { Select, Stack, Textarea, TextInput } from "@mantine/core";

export const ProyectoMetasForm = ({ form }) => {
    return (
        <Stack>
            <Select
                label="Tipo unidad"
                placeholder="Seleccione el tipo de unidad"
                data={["Unidad", "Hectareas", "Granos"]}
                clearable
                key={form.key("tipounidad_id")}
                {...form.getInputProps("tipounidad_id")}
            />
            <TextInput
                label="Indicador"
                placeholder="Digite el indicador"
                key={form.key("indicador_detalle")}
                {...form.getInputProps("indicador_detalle")}
            />
            <Textarea
                label="Linea base"
                placeholder="Digite la línea base"
                key={form.key("linea_base")}
                {...form.getInputProps("linea_base")}
            />
            <Textarea
                label="Meta detalle"
                placeholder="Digite el detalle de la meta"
                key={form.key("meta_detalle")}
                {...form.getInputProps("meta_detalle")}
            />
        </Stack>
    );
};
