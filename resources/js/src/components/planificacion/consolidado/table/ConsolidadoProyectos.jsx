import { useMemo } from "react";
import { useMantineReactTable } from "mantine-react-table";
import { TableContent } from "../../../../components";


const data = [
    {
        competencia: "GESTIÓN AMBIENTAL",
        oepdot: "PROMOVEER LA CONSERVACIÓN, EL USO SUSTENTABLE Y EQUITATIVO DE LOS RECURSOS NATURALES INCORPORANDO EL ENFOQUE DE CAMBIO CLIMATICO Y RIESGO EN EL DESARROLLO DE LA GESTIÓN TERRITORIAL",
        metapdot: "IMPLEMENTAR UNA MEDIDA DE ADAPTACION Y/O MITIGACIÓN AL CAMBIO CLIMATICO AL 2023.",
        proyecto: "APOYO DE INICIATIVA PARROQUIALES COMUNITARIAS EN EL MANEJO DE LOS RECURSOS NATURALES",
    },
    {
        competencia: "GESTIÓN AMBIENTAL",
        oepdot: "PROMOVEER LA CONSERVACIÓN, EL USO SUSTENTABLE Y EQUITATIVO DE LOS RECURSOS NATURALES INCORPORANDO EL ENFOQUE DE CAMBIO CLIMATICO Y RIESGO EN EL DESARROLLO DE LA GESTIÓN TERRITORIAL",
        metapdot: "IMPLEMENTAR UNA MEDIDA DE ADAPTACION Y/O MITIGACIÓN AL CAMBIO CLIMATICO AL 2023.",
        proyecto: "APOYO EN LA CONSTRUCCIÓN DE LA ESTRATEGIA DE CAMBIO CLIMATICO",
    },
];

export const ConsolidadoProyectos = () => {

    const columns = useMemo(
        () => [
            {
                accessorKey: "competencia", //access nested data with dot notation
                header: "Competencia",
            },
            {
                accessorKey: "oepdot", //access nested data with dot notation
                header: "Objetivo Estrategico PDOT",
            },
            {
                accessorKey: "metapdot", //normal accessorKey
                header: "Meta resultado PDOT",
            },
            {
                accessorKey: "proyecto",
                header: "Nombre proyecto",
            }
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
        mantineTableBodyCellProps: {
            style: {
                fontSize: "11px", //add a border between columns
            },
        },
    });

  return (
    <TableContent table={table} />
  )
}
