import { useCallback, useMemo } from "react";
import { BtnActiveStatus, BtnSection, MenuTableEdit, TableContent } from "../../../../../components";
import { useMantineReactTable } from "mantine-react-table";
import { IconCopyPlus } from "@tabler/icons-react";

const lineasestrategicas = [
    {
        id: 1,
        linea_estrategica: "2. Manejo sostenible de sus recursos naturales",
        activo: true,
    },
    {
        id: 2,
        linea_estrategica:
            "4. Una población inclusiva, resiliente y orgullosa de su identidad que impulsa la cultura de paz. ",
        activo: true,
    },
    {
        id: 3,
        linea_estrategica:
            "1.  Modelo de desarrollo económico territorial  propio generador de valor agregado e innovación tecnológica asass asasas asassa asasas.",
        activo: false,
    },
];

export const LineasEstrategicasTable = () => {
    const columns = useMemo(
        () => [
            {
                header: "Nombre Línea",
                accessorKey: "linea_estrategica",
                minSize: 100, //min size enforced during resizing
                maxSize: 400, //max size enforced during resizing
                size: 300, //medium column

            },
            {
                accessorKey: "activo",
                header: "Activo",
                Cell: ({ cell }) => (
                    <BtnActiveStatus cell={cell} handleActive={handleActive} />
                ),
            },
        ],
        [lineasestrategicas]
    );

    const handleActive = useCallback(() => {
        console.log("clic");
    }, [lineasestrategicas]);

    const handleAgregar = useCallback(
      () => {
        console.log('agregar')
      },
      [lineasestrategicas],
    )

    const handleEditar = useCallback(
        () => {
          console.log('editar')
        },
        [lineasestrategicas],
      )


    const table = useMantineReactTable({
        columns,
        data: lineasestrategicas, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
        enableDensityToggle: false,
        defaultColumn: { minSize: 80, maxSize: 200, size: 100 },

        //enableColumnFilters: false,
        //enablePagination: false,
        //enableSorting: false,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => (
            <MenuTableEdit row={row} handleEditar={handleEditar} />
        ),
        renderTopToolbarCustomActions: ({ table }) => (
            <BtnSection heigh={30} fontSize={12} icon={IconCopyPlus} handleAction={handleAgregar}>
                Agregar
            </BtnSection>
        ),
    });

    return <TableContent table={table} />;
};
