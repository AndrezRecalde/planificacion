import { useCallback, useMemo } from "react";
import {
    BtnActiveStatus,
    BtnSection,
    MenuTableEdit,
    TableContent,
} from "../../../../../components";
import { useMantineReactTable } from "mantine-react-table";
import { IconCopyPlus } from "@tabler/icons-react";

const metapdots = [
    {
        id: 1,
        nombre_meta:
            "1.1.1 Implementar una medida de adaptación y/o mitigación al cambio climático al 2023.",
        earticulacion_id:
            "1.1 Desarrollar medidas de adaptación y mitigación al cambio climático y riesgo para disminuir la vulnerabilidad ambiental, económica y social.",
        activo: true,
    },
    {
        id: 2,
        nombre_meta:
            "1.1.2 Ejecutar un proyecto enmarcado en el instrumento provincial de cambio climático al 2023.",
        earticulacion_id:
            "1.2 Manejar de forma integrada las actividades que se desarrollan en el territorio provincial, con el fin de conservar la biodiversidad y disminuir los efectos e impactos sobre los ecosistemas naturales",
        activo: true,
    },
    {
        id: 3,
        nombre_meta:
            "1.2.1 Incrementar 500 has del territorio provincial para fines de protección al 2023.",
        earticulacion_id:
            "1.3 Impulsar la generación de información de flora y fauna la investigación, innovación y producción de servicios ecosistémicos.",
        activo: false,
    },
];

export const MetaspdotTable = () => {
    const columns = useMemo(
        () => [
            {
                header: "Estrategia de articulación",
                accessorKey: "earticulacion_id",
                minSize: 100, //min size enforced during resizing
                maxSize: 400, //max size enforced during resizing
                size: 300, //medium column
            },
            {
                header: "Meta del PDOT",
                accessorKey: "nombre_meta",
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
        [metapdots]
    );

    const handleActive = useCallback(() => {
        console.log("clic");
    }, [metapdots]);

    const handleAgregar = useCallback(() => {
        console.log("agregar");
    }, [metapdots]);

    const handleEditar = useCallback(() => {
        console.log("editar");
    }, [metapdots]);

    const table = useMantineReactTable({
        columns,
        data: metapdots, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
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
