import { useMemo } from "react";
import {
    Group,
    Menu,
    rem,
    UnstyledButton,
    Spoiler,
    ActionIcon,
} from "@mantine/core";
import { useMantineReactTable, MantineReactTable } from "mantine-react-table";
import {
    IconEditCircle,
    IconEye,
    IconPencilStar,
    IconTrash,
} from "@tabler/icons-react";
import { TextSection } from "../../../elements/titles/TextSection";
import { ProgressProyecto } from "../../proyecto/table/ProgressProyecto";

const data = [
    {
        id: 1,
        nombre_actividad: "Capacitaciones mediante Plataforma Moodle",
        ponderacion: 5,
        estado_id: 1,
        tipo_actividad: "Operativa",
        estado: "Inicial",
        proyecto_id: "Proyecto numero 1 de GTIC",
        presupuesto: "20.000",
        progress: 20,
    },
    {
        id: 2,
        nombre_actividad:
            "Capacitaciones presenciales para usuarios externos e internos",
        ponderacion: 20,
        estado_id: 2,
        tipo_actividad: "Presupuestaria",
        estado: "En Progreso",
        proyecto_id: "Proyecto numero 2 de GTIC",
        presupuesto: "17.850",
        progress: 80,
    },
    {
        id: 3,
        nombre_actividad:
            "Adquisicion de herramientas, partes y piezas e insumos para mantenimiento de equipos de computo",
        ponderacion: 10,
        estado_id: 2,
        tipo_actividad: "Presupuestaria",
        estado: "En Progreso",
        proyecto_id: "Proyecto numero 2 de GTIC",
        presupuesto: "37.850",
        progress: 15,
    },
];

export const ActividadesTable = (props) => {
    const columns = useMemo(
        () => [
            {
                accessorFn: (row) =>
                    row.nombre_actividad.length > 60 ? (
                        <Spoiler
                            maxHeight={40}
                            showLabel="Ver más"
                            hideLabel="Ocultar"
                        >
                            <div style={{ cursor: "pointer" }} onClick={() => console.log("clic")}>
                                {row.nombre_actividad}
                            </div>
                        </Spoiler>
                    ) : (
                        <div style={{ cursor: "pointer" }} onClick={() => console.log("clic")}>
                            {row.nombre_actividad}
                        </div>
                    ),
                header: "Nombre de actividad",
            },
            {
                accessorKey: "tipo_actividad", //access nested data with dot notation
                header: "Tipo Actividad",
            },
            {
                accessorKey: "ponderacion", //access nested data with dot notation
                header: "Ponderación",
            },
            {
                accessorKey: "presupuesto", //access nested data with dot notation
                header: "Presupuesto",
            },
            {
                accessorKey: "progress",
                header: "Progreso",
                Cell: ({ cell }) => (
                    <ProgressProyecto cell={cell} classes={props} />
                ),
            },
            {
                accessorKey: "estado", //normal accessorKey
                header: "Estado",
                Cell: ({ cell }) => (
                    <UnstyledButton
                        onDoubleClick={() => console.log("double clic")}
                    >
                        <TextSection fz={12} fw={500}>
                            {cell.row.original.estado}
                        </TextSection>
                    </UnstyledButton>
                ),
                filterVariant: "autocomplete",
            },
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
        enableRowActions: true,
        defaultColumn: { minSize: 60, maxSize: 1000, size: 200 },
        renderRowActionMenuItems: ({ row }) => (
            <>
                <Menu.Item
                    leftSection={
                        <IconEditCircle
                            style={{ width: rem(15), height: rem(15) }}
                        />
                    }
                    onClick={() => console.info("editar")}
                >
                    Editar
                </Menu.Item>
                <Menu.Item
                    leftSection={
                        <IconPencilStar
                            style={{ width: rem(15), height: rem(15) }}
                        />
                    }
                    onClick={() => console.info("editar")}
                >
                    Asignar trimestre
                </Menu.Item>
                <Menu.Item
                    leftSection={
                        <IconTrash
                            style={{ width: rem(15), height: rem(15) }}
                        />
                    }
                    onClick={() => console.info("eliminar")}
                >
                    Eliminar
                </Menu.Item>
            </>
        ),
        mantineTableBodyCellProps: ({ column, cell }) => ({
            style:
                column.id === "estado"
                    ? {
                          backgroundColor:
                              cell.row.original.estado_id === 1
                                  ? "teal"
                                  : cell.row.original.estado_id === 2
                                  ? "orange"
                                  : "indigo",
                          color: "white",
                      }
                    : {},
        }),
    });

    return <MantineReactTable table={table} />;
};
