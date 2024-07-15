import { useMantineReactTable } from "mantine-react-table";
import { useCallback, useMemo } from "react";
import {
    MenuTableEdit,
    BtnSection,
    TableContent,
    BtnActiveStatus,
    CompetenciaDetail,
} from "../../../../../components";
import { IconCopyPlus } from "@tabler/icons-react";

const competenciaspdot = [
    {
        id: 1,
        nombre_competencia: "4. La gestión ambiental provincial",
        lestrategiapdot_id: "2. Manejo sostenible de sus recursos naturales",
        componentepdot_id: [
            "2. Socio cultural ",
            "5. Político Institucional ",
        ],
        categoriaspdot_id: ["ZONA DE PROTECCIÓN Y CONSERVACIÓN", "ZONA DE CONSERVACIÓN Y USO SOSTENIBLE"],
        activo: true,
    },
    {
        id: 2,
        nombre_competencia:
            "6.  Fomentar las actividades productivas provinciales, especialmente las agropecuarias; y, ",
        lestrategiapdot_id:
            "4. Una población inclusiva, resiliente y orgullosa de su identidad que impulsa la cultura de paz. ",
        componentepdot_id: [
            "4. Asentamientos Humanos - Movilidad, Energía y conectividad. ",
            "3. Económico productivo ",
        ],
        categoriaspdot_id: ["ZONA DE PROTECCIÓN Y CONSERVACIÓN", "ZONA AGROPECUARIO", "ZONA AGRICOLA"],
        activo: true,
    },
    {
        id: 3,
        nombre_competencia:
            "1. Planificar, junto con otras instituciones del sector público y actores de la sociedad, el desarrollo provincial y formular los correspondientes planes de ordenamiento territorial.",
        lestrategiapdot_id:
            "1.  Modelo de desarrollo económico territorial  propio generador de valor agregado e innovación tecnológica.",
        componentepdot_id: [
            "2. Socio cultural ",
        ],
        categoriaspdot_id: ["ZONA AGROPECUARIO"],
        activo: false,
    },
];

export const CompetenciapdotTable = () => {
    const columns = useMemo(
        () => [
            {
                header: "Nombre Competencia",
                accessorKey: "nombre_competencia",
                minSize: 100, //min size enforced during resizing
                maxSize: 400, //max size enforced during resizing
                size: 300, //medium column
            },
            {
                header: "Linea estrategica",
                accessorKey: "lestrategiapdot_id",
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
        [competenciaspdot]
    );

    const handleActive = useCallback(() => {
        console.log("clic");
    }, [competenciaspdot]);

    const handleAgregar = useCallback(() => {
        console.log("agregar");
    }, [competenciaspdot]);

    const handleEditar = useCallback(() => {
        console.log("editar");
    }, [competenciaspdot]);

    const table = useMantineReactTable({
        columns,
        data: competenciaspdot, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
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
        renderDetailPanel: ({ row }) => <CompetenciaDetail row={row} />
    });

    return <TableContent table={table} />;
};
