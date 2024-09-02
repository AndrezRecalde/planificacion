import { useMemo } from "react";
import { useMantineReactTable } from "mantine-react-table";
import { ProgressPrograma, TableContent } from "../../../../components";


const data = [
    {
        nombre_programa: "Nombre de programa 1 de gestion de TIC",
        codigo_programa: "PRO-GTIC-2024-02",
        planificaciontipo_id: "Planificacion tipo 1",
        objetivo_id: "Objetivo numero 1",
        competencia: "FOMENTO DE LA SEGURIDAD ALIMENTARIA",
        //progress: 35
    },
    {
        nombre_programa: "Nombre de programa 2 de Gestion de TIC",
        codigo_programa: "PRO-GTIC-2024-03",
        planificaciontipo_id: "Planificacion tipo 2",
        objetivo_id: "Objetivo numero 2",
        competencia: "VIABILIDAD",
        //progress: 55
    },
];


export const ProgramaPlanTable = (props) => {
    const columns = useMemo(
        () => [
            {
                accessorKey: "nombre_programa", //access nested data with dot notation
                header: "Nombre de Programa",
            },
            {
                accessorKey: "codigo_programa", //access nested data with dot notation
                header: "Código de Programa",
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
            },
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
