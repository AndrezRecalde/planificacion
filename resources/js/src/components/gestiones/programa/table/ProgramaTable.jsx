import { useMemo } from "react";
import { useMantineReactTable } from "mantine-react-table";
import { TableContent } from "../../../../components";


const data = [
    {
        nombre_programa: "Nombre de programa 1 de gestion de TIC",
        planificaciontipo_id: "Planificacion tipo 1",
        objetivo_id: "Objetivo numero 1",
        competencia: "FOMENTO DE LA SEGURIDAD ALIMENTARIA"
    },
    {
        nombre_programa: "Nombre de programa 2 de Gestion de TIC",
        planificaciontipo_id: "Planificacion tipo 2",
        objetivo_id: "Objetivo numero 2",
        competencia: "VIABILIDAD"
    },
];

export const ProgramaTable = () => {

    const columns = useMemo(
        () => [
            {
                accessorKey: "nombre_programa", //access nested data with dot notation
                header: "Nombre de Programa",
            },
            {
                accessorKey: "planificaciontipo_id", //access nested data with dot notation
                header: "Tipo de planificación",
            },
            {
                accessorKey: "objetivo_id", //normal accessorKey
                header: "Objetivo",
                filterVariant: 'autocomplete',
            },
            {
                accessorKey: "competencia", //normal accessorKey
                header: "Competencia del GAD",
                filterVariant: 'autocomplete',
            }
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
    });

  return (
    <TableContent table={table} />
  )
}
