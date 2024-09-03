import { useCallback, useMemo } from "react";
import { useMantineReactTable } from "mantine-react-table";
import { BtnActiveStatus, BtnSection, MenuActionsVE, TableContent } from "../../../../components";
import { BTN_TITLES } from "../../../../helpers";
import { IconCopyPlus } from "@tabler/icons-react";


const programas = [
    {
        nombre_programa: "Nombre de programa 1 de gestion de TIC",
        codigo_programa: "PRO-GTIC-2024-02",
        planificaciontipo_id: "Planificacion tipo 1",
        objetivo_id: "Objetivo numero 1",
        competencia: "FOMENTO DE LA SEGURIDAD ALIMENTARIA",
        activo: 1
        //progress: 35
    },
    {
        nombre_programa: "Nombre de programa 2 de Gestion de TIC",
        codigo_programa: "PRO-GTIC-2024-03",
        planificaciontipo_id: "Planificacion tipo 2",
        objetivo_id: "Objetivo numero 2",
        competencia: "VIABILIDAD",
        activo: 0
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
            {
                accessorKey: "activo",
                header: "Activo",
                Cell: ({ cell }) => (
                    <BtnActiveStatus cell={cell} handleActive={handleActive} />
                ),
            },
        ],
        []
    );

    const handleActive = useCallback(
        (selected) => {
            console.log('clic');
        },
        [programas]
    );

    const handleAgregar = useCallback(() => {
        console.log('clic');
    }, [programas]);

    const handleEditar = useCallback(
        (selected) => {
            console.log('clic');
        },
        [programas]
    );

    const handleVer = useCallback(
        (selected) => {
            console.log('clic');
        },
        [programas]
    );

    const table = useMantineReactTable({
        columns,
        data: programas, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        //state: { showProgressBars: isLoading },
        enableFacetedValues: true,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => (
            <MenuActionsVE
                row={row}
                handleView={handleVer}
                handleEditar={handleEditar}
            />
        ),
        renderTopToolbarCustomActions: ({ table }) => (
            <BtnSection
                heigh={30}
                fontSize={12}
                icon={IconCopyPlus}
                handleAction={handleAgregar}
            >
                {BTN_TITLES.BTN_ADD}
            </BtnSection>
        ),
    });
  return (
    <TableContent table={table} />
  )
}
