import { Select } from "@mantine/core";
import { useCompetenciapdotStore } from "../../../../../hooks";

export const CompetenciaspdotSelect = ({ rootContext }) => {
    const form = rootContext();
    const { competenciaspdot } = useCompetenciapdotStore();

    return (
        <Select
            clearable
            label="Competencias"
            placeholder="Seleccione competencia a filtrar"
            data={competenciaspdot.map((competencia) => {
                return {
                    label: competencia.nombre_competencia,
                    value: competencia.id.toString(),
                };
            })}
            key={form.key("competenciapdot_id")}
            {...form.getInputProps("competenciapdot_id")}
            nothingFoundMessage="Nada encontrado..."
        />
    );
};
