import { useMemo } from "react";
import { useMantineTheme } from "@mantine/core";
import { useMantineReactTable } from "mantine-react-table";
import { BtnSection, TableContent } from "../../../../components";
import { IconCloudUpload } from "@tabler/icons-react";

const data = [
    {
        etapa: "Programación",
        archivo: "POA 2021.pdf",
        fecha_archivo: "08-jun-2022",
        hora: "14:31:40",
    },
    {
        etapa: "PRIMER TRIMESTRE",
        archivo: "INFORME EVALUACION I TRI 2021.pdf",
        fecha_archivo: "08-jun-2022",
        hora: "14:33:42",
    },
    {
        etapa: "SEGUNDO TRIMESTRE",
        archivo: "INFORME EVALUACION II TRI 2021.pdf",
        fecha_archivo: "08-jun-2022",
        hora: "14:33:42",
    },
    {
        etapa: "TERCER TRIMESTRE",
        archivo: "INFORME EVALUACION III TRI 2021.pdf",
        fecha_archivo: "08-jun-2022",
        hora: "14:33:42",
    },
    {
        etapa: "TERCER TRIMESTRE",
        archivo: "INFORME EVALUACION IV TRI 2021.pdf",
        fecha_archivo: "08-jun-2022",
        hora: "14:33:42",
    },
];

export const ConsolidadosTable = () => {
    const { colorScheme } = useMantineTheme();

    const columns = useMemo(
        () => [
            {
                accessorKey: "etapa", //access nested data with dot notation
                header: "Etapa",
            },
            {
                accessorKey: "archivo", //access nested data with dot notation
                header: "Archivo",
            },
            {
                accessorKey: "fecha_archivo", //normal accessorKey
                header: "Fecha del archivo",
            },
            {
                accessorKey: "hora", //normal accessorKey
                header: "Hora",
            },
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
        renderTopToolbarCustomActions: ({ table }) => (
            <BtnSection
                icon={IconCloudUpload}
                handleAction={() => console.log("clic")}
            >
                Cargar nuevo archivo
            </BtnSection>
        ),

        mantineTableBodyCellProps: {
            style: {
                fontSize: "11px", //add a border between columns
            },
        },
        mantineTableProps: {
            withColumnBorders: true,
            withTableBorder: colorScheme === "light",
            sx: {
                "thead > tr": {
                    backgroundColor: "inherit",
                },
                "thead > tr > th": {
                    backgroundColor: "inherit",
                },
                "tbody > tr > td": {
                    backgroundColor: "inherit",
                },
            },
        },
    });

    return <TableContent table={table} />;
};
