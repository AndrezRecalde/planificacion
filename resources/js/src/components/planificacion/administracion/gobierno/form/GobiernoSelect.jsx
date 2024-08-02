import { Select } from "@mantine/core";
import { useGobiernoFormContext } from "../../../../../context";
import { useGobiernoStore } from "../../../../../hooks";

export const GobiernoSelect = () => {

    const form = useGobiernoFormContext();
    const { gobiernos } = useGobiernoStore();

    return (
        <Select
            label="Gobierno"
            description="Debe filtrar el gobierno para observar sus objetivos nacionales"
            placeholder="Seleccione gobierno a filtrar"
            data={gobiernos.map(gobierno => {
                return {
                    label: gobierno.nombre_gobierno,
                    value: gobierno.id.toString()
                }
            })}
            key={form.key("gobierno_id")}
            {...form.getInputProps("gobierno_id")}
            nothingFoundMessage="Nada encontrado..."
        />
    );
};
