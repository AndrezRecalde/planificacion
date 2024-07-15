import { useMemo } from "react";
import { useMantineTheme } from "@mantine/core";
import { useMantineReactTable, MantineReactTable } from "mantine-react-table";
import { MenuTableEdit } from "../../../../components";

const objetivos = [
    {
        id: 1,
        competencia_id: "FOMENTO DE LA SEGURIDAD ALIMENTARIA",
        oepdot_id:
            "6. PROMOVEER LA SEGURIDAD Y SOBERANIA ALIMENTARIA CON PRINCIPIOS DE IGUALDAD, EQUIDAD Y SOLIDARIDAD, A TRAVES DEL MEJORAMIENTO DE LA DIETA ALIMENTARIA NUTRICIONAL, EL RESCATE DE SEMILLAS LOCALES Y SABERES ANCESTRALES",
        metapdot_id:
            "INCREMENTAR EN 5% DE LAS FAMILIAS QUE PARTICIPAN EN PROYECTOS PRODUCTIVOS VINCULADOS A LA SOBERANIA ALIMENTARIA EN EL 2021",
        anio_cumplimiento: "2021",
        porcentaje: 96.27,
    },
];

export const ObjetivosTable = () => {
    const { colorScheme } = useMantineTheme();

    const columns = useMemo(
        () => [
            {
                header: "Competencia del GAD",
                accessorKey: "competencia_id",
                size: 80,
            },
            {
                header: "Objetivo Estratégico del PDOT",
                accessorKey: "oepdot_id",
                size: 500,
            },
            {
                header: "Meta de resultados del PDOT",
                accessorKey: "metapdot_id",
                size: 300,
            },
            {
                header: "Año de cumplimiento de Meta",
                accessorKey: "anio_cumplimiento",
            },
            {
                header: "Porcentaje",
                accessorKey: "porcentaje",
                enableColumnFilter: false,
            },
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data: objetivos, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => <MenuTableEdit />,
        mantineTableBodyCellProps: {
            style: {
                fontSize: "11px", //add a border between columns
            },
        },
        mantineTableProps: {
            withColumnBorders: true,
            withTableBorder: colorScheme === 'light',
            sx: {
                'thead > tr': {
                  backgroundColor: 'inherit',
                },
                'thead > tr > th': {
                  backgroundColor: 'inherit',
                },
                'tbody > tr > td': {
                  backgroundColor: 'inherit',
                },
            }
        },
    });

    return <MantineReactTable table={table} />;
};
