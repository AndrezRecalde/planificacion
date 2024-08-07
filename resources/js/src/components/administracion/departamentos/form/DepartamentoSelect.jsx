import { Select } from "@mantine/core";
import { useDepartamentoStore } from "../../../../hooks";
import { useDepartamentoFormContext } from "../../../../context";

export const DepartamentoSelect = () => {

    const form = useDepartamentoFormContext();
    const { departamentos } = useDepartamentoStore();

    return (
        <Select
            label="Departamento"
            description="Debe filtrar el departamento para visualizar a sus responsables"
            placeholder="Seleccione departamento a filtrar"
            data={departamentos.map((departamento) => {
                return {
                    label: departamento.nombre_departamento,
                    value: departamento.id.toString(),
                };
            })}
            key={form.key("departamento_id")}
            {...form.getInputProps("departamento_id")}
            nothingFoundMessage="Nada encontrado..."
        />
    );
};
