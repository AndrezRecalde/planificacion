import { useMemo } from "react";
import { useMantineReactTable } from "mantine-react-table";
import {
    MenuTableAdd,
    ProgramaDetail,
    TableContent,
} from "../../../../components";
import { UnstyledButton } from "@mantine/core";
import { APP_WORDS } from "../../../../helpers";
import { useUiProyecto } from "../../../../hooks";

const data = [
    {
        nombre_programa: "Nombre de programa 1 de gestion de TIC",
        codigo_programa: "PROG-GTIC-2024-05",
        planificaciontipo_id: "Planificacion tipo 1",
        objetivo_id:
            " 2. Desarrollar la conectividad tecnológica y movilidad entre los centros poblados, zonas productivas rurales y/o urbanas para el intercambio de bienes y servicios",
        meta_id: [
            "1.1.1 Implementar una medida de adaptación y/o mitigación al cambio climático al 2023.",
        ],
        competencia: "FOMENTO DE LA SEGURIDAD ALIMENTARIA",
        numero_proyectos: 58,
    },
    {
        nombre_programa: "Nombre de programa 2 de Gestion de TIC",
        codigo_programa: "PROG-GTIC-2024-08",
        planificaciontipo_id: "Planificacion tipo 2",
        objetivo_id:
            "4. Posicionar al Gobierno Provincial como una institución eficiente, eficaz e innovadora.",
        meta_id: [
            "1.1.1 Implementar una medida de adaptación y/o mitigación al cambio climático al 2023.",
            "1.1.2 Ejecutar un proyecto enmarcado en el instrumento provincial de cambio climático al 2023.",
        ],

        competencia: "VIABILIDAD",
        numero_proyectos: 0,
    },
    {
        nombre_programa: "Nombre de programa 2 de Gestion de TIC",
        codigo_programa: "PROG-GTIC-2024-08",
        planificaciontipo_id: "Planificacion tipo 2",
        objetivo_id:
            "4. Posicionar al Gobierno Provincial como una institución eficiente, eficaz e innovadora.",
        meta_id: [
            "1.1.1 Implementar una medida de adaptación y/o mitigación al cambio climático al 2023.",
            "1.1.2 Ejecutar un proyecto enmarcado en el instrumento provincial de cambio climático al 2023.",
        ],

        competencia: "VIABILIDAD",
        numero_proyectos: 0,
    },
    {
        nombre_programa: "Nombre de programa 2 de Gestion de TIC",
        codigo_programa: "PROG-GTIC-2024-08",
        planificaciontipo_id: "Planificacion tipo 2",
        objetivo_id:
            "4. Posicionar al Gobierno Provincial como una institución eficiente, eficaz e innovadora.",
        meta_id: [
            "1.1.1 Implementar una medida de adaptación y/o mitigación al cambio climático al 2023.",
            "1.1.2 Ejecutar un proyecto enmarcado en el instrumento provincial de cambio climático al 2023.",
        ],

        competencia: "VIABILIDAD",
        numero_proyectos: 0,
    },
    {
        nombre_programa: "Nombre de programa 2 de Gestion de TIC",
        codigo_programa: "PROG-GTIC-2024-08",
        planificaciontipo_id: "Planificacion tipo 2",
        objetivo_id:
            "4. Posicionar al Gobierno Provincial como una institución eficiente, eficaz e innovadora.",
        meta_id: [
            "1.1.1 Implementar una medida de adaptación y/o mitigación al cambio climático al 2023.",
            "1.1.2 Ejecutar un proyecto enmarcado en el instrumento provincial de cambio climático al 2023.",
        ],

        competencia: "VIABILIDAD",
        numero_proyectos: 0,
    },
    {
        nombre_programa: "Nombre de programa 2 de Gestion de TIC",
        codigo_programa: "PROG-GTIC-2024-08",
        planificaciontipo_id: "Planificacion tipo 2",
        objetivo_id:
            "4. Posicionar al Gobierno Provincial como una institución eficiente, eficaz e innovadora.",
        meta_id: [
            "1.1.1 Implementar una medida de adaptación y/o mitigación al cambio climático al 2023.",
            "1.1.2 Ejecutar un proyecto enmarcado en el instrumento provincial de cambio climático al 2023.",
        ],

        competencia: "VIABILIDAD",
        numero_proyectos: 0,
    },
];

export const ProgramaTable = () => {
    const { modalActionProyecto } = useUiProyecto();
    const columns = useMemo(
        () => [
            {
                accessorKey: "nombre_programa", //access nested data with dot notation
                header: "Nombre de programa",
            },
            {
                accessorKey: "codigo_programa", //normal accessorKey
                header: "Código",
                filterVariant: "autocomplete",
            },
            {
                accessorKey: "planificaciontipo_id", //access nested data with dot notation
                header: "Tipo de planificación",
            },
            {
                accessorKey: "competencia", //normal accessorKey
                header: "Competencia del GAD",
                filterVariant: "autocomplete",
            },
            {
                accessorKey: "numero_proyectos", //normal accessorKey
                header: "Numero de proyectos",
                Cell: ({ cell }) => (
                    <UnstyledButton>
                        {cell.row.original.numero_proyectos > 0
                            ? cell.row.original.numero_proyectos
                            : 0}
                    </UnstyledButton>
                ),
            },
        ],
        []
    );

    const handleAddProyecto = () => {
        console.log("clic");
        modalActionProyecto(1);
    };

    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => (
            <MenuTableAdd
                row={row}
                title={APP_WORDS.PROYECTO_ADD_MENU}
                handleAdd={handleAddProyecto}
            />
        ),
        renderDetailPanel: ({ row }) => <ProgramaDetail row={row} />,
    });

    return <TableContent table={table} />;
};
