import { Select } from "@mantine/core";
import { usePlanificacionTipoStore } from "../../../../../hooks";

export const PlanificacionTipoSelect = ({ rootContext }) => {
    const form = rootContext();
    const { planificacionTipos } = usePlanificacionTipoStore();

    return (
        <Select
            clearable
            label="Tipo Planificación"
            placeholder="Seleccione tipo de planificación"
            data={planificacionTipos.map((tipo) => {
                return {
                    label: tipo.nombre_planificacion,
                    value: tipo.id.toString(),
                };
            })}
            key={form.key("planificaciontipo_id")}
            {...form.getInputProps("planificaciontipo_id")}
            nothingFoundMessage="Nada encontrado..."
        />
    );
};
