import { useCallback, useMemo } from "react";
import {
    BtnActiveStatus,
    BtnSection,
    MenuTableEdit,
    TableContent,
} from "../../../../../components";
import { useMantineReactTable } from "mantine-react-table";
import { IconCopyPlus } from "@tabler/icons-react";

const earticulaciones = [
    {
        id: 1,
        nombre_articulacion:
            "1.1 Desarrollar medidas de adaptación y mitigación al cambio climático y riesgo para disminuir la vulnerabilidad ambiental, económica y social.",
        activo: true,
    },
    {
        id: 2,
        nombre_articulacion:
            "1.2 Manejar de forma integrada las actividades que se desarrollan en el territorio provincial, con el fin de conservar la biodiversidad y disminuir los efectos e impactos sobre los ecosistemas naturales",
        activo: true,
    },
    {
        id: 3,
        nombre_articulacion:
            "1.3 Impulsar la generación de información de flora y fauna la investigación, innovación y producción de servicios ecosistémicos.",
        activo: false,
    },
];

export const EarticulacionTable = () => {
    const columns = useMemo(
        () => [
            {
                header: "Nombre Categoria",
                accessorKey: "nombre_articulacion",
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
        [earticulaciones]
    );

    const handleActive = useCallback(() => {
        console.log("clic");
    }, [earticulaciones]);

    const handleAgregar = useCallback(() => {
        console.log("agregar");
    }, [earticulaciones]);

    const handleEditar = useCallback(() => {
        console.log("editar");
    }, [earticulaciones]);

    const table = useMantineReactTable({
        columns,
        data: earticulaciones, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
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
            <BtnSection
                heigh={30}
                fontSize={12}
                icon={IconCopyPlus}
                handleAction={handleAgregar}
            >
                Agregar
            </BtnSection>
        ),
    });

    return <TableContent table={table} />;
};
