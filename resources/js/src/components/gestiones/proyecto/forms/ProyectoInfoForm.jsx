import { NumberInput, Select, Stack, TextInput } from "@mantine/core";

export const ProyectoInfoForm = ({ form }) => {
    return (
        <Stack>
            <Select
                label="Programa"
                placeholder="Programa al que pertenece"
                data={["React", "Angular", "Vue", "Svelte"]}
                defaultValue="React"
                clearable
                withAsterisk
                key={form.key("programa_id")}
                {...form.getInputProps("programa_id")}
            />
            <Select
                label="Tipo Proyecto"
                placeholder="Elige el tipo de proyecto"
                data={["React", "Angular", "Vue", "Svelte"]}
                defaultValue="React"
                clearable
                withAsterisk
                key={form.key("tipoproyecto_id")}
                {...form.getInputProps("tipoproyecto_id")}
            />
            <TextInput
                label="Nombre Proyecto"
                placeholder="Digite el nombre del proyecto"
                withAsterisk
                key={form.key("nombre_proyecto")}
                {...form.getInputProps("nombre_proyecto")}
            />
            <NumberInput
                label="Ponderacion"
                placeholder="Digite la ponderacipm"
                decimalScale={2}
                withAsterisk
                key={form.key("ponderacion")}
                {...form.getInputProps("ponderacion")}
            />
        </Stack>
    );
};
