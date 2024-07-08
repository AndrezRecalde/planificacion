import { useMemo } from "react";
import { useMantineReactTable } from "mantine-react-table";
import {
    MenuTableEdit,
    ProgressProyecto,
    TableContent,
} from "../../../../components";
import { List, Spoiler, ThemeIcon, rem } from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";
import { useUiProyecto } from "../../../../hooks";

const data = [
    {
        nombre_proyecto: "Nombre de proyecto 1 de gestion de TIC",
        tipo: "PDOT",
        fecha_inicio: "2024-05-03",
        fecha_finalizacion: "2024-08-15",
        nivel: "MEDIA",
        nivel_id: 2,
        tiempo_meses: 5,
        ponderacion: 10,
        progress: 40,
    },
    {
        nombre_proyecto: "Nombre de proyecto 2 de Gestion de TIC",
        tipo: "PDOT",
        fecha_inicio: "2024-05-03",
        fecha_finalizacion: "2024-05-03",
        nivel: "ALTA",
        nivel_id: 3,
        tiempo_meses: 11,
        ponderacion: 20,
        progress: 20,
    },
];

export const ProyectoTable = (props) => {
    const { drawerActionProyecto } = useUiProyecto();

    const handleOpenDrawerDetailProyecto = () => {
        drawerActionProyecto(1);
    }

    const columns = useMemo(
        () => [
            {
                accessorFn: (row) =>
                    row.nombre_proyecto.length > 60 ? (
                        <Spoiler
                            maxHeight={40}
                            showLabel="Ver más"
                            hideLabel="Ocultar"
                        >
                            <div
                                style={{ cursor: "pointer" }}
                                onClick={handleOpenDrawerDetailProyecto}
                            >
                                {row.nombre_proyecto}
                            </div>
                        </Spoiler>
                    ) : (
                        <div
                            style={{ cursor: "pointer" }}
                            onClick={handleOpenDrawerDetailProyecto}
                        >
                            {row.nombre_proyecto}
                        </div>
                    ),
                header: "Nombre de proyecto",
            },
            {
                accessorKey: "nivel", //normal accessorKey
                header: "Nivel",
                filterVariant: "autocomplete",
            },
            {
                accessorFn: (row) => (
                    <List spacing="xs" size="sm" center>
                        <List.Item
                            icon={
                                <ThemeIcon variant="light" color="indigo" size={24} radius="xl">
                                    <IconCalendar
                                        style={{
                                            width: rem(16),
                                            height: rem(16),
                                        }}
                                    />
                                </ThemeIcon>
                            }
                        >
                            {row.fecha_inicio}
                        </List.Item>
                        <List.Item
                            icon={
                                <ThemeIcon variant="light" color="red" size={24} radius="xl">
                                    <IconCalendar
                                        style={{
                                            width: rem(16),
                                            height: rem(16),
                                        }}
                                    />
                                </ThemeIcon>
                            }
                        >
                            {row.fecha_finalizacion}
                        </List.Item>
                    </List>
                ),
                header: "Fechas",
                enableColumnFilter: false
            },
            {
                accessorKey: "ponderacion",
                header: "Ponderación",
            },
            {
                accessorKey: "tiempo_meses", //normal accessorKey
                header: "Tiempo (Meses)",
                //filterVariant: "autocomplete",
            },
            {
                accessorKey: "progress",
                header: "Progreso",
                Cell: ({ cell }) => (
                    <ProgressProyecto cell={cell} classes={props} />
                ),
            },
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
        enableRowActions: true,

        /* renderTopToolbarCustomActions: ({ table }) => (
            <BtnSection heigh={45} variant="light" icon={IconLibraryPlus}>Nuevo Proyecto</BtnSection>
        ), */
        renderRowActionMenuItems: ({ row }) => <MenuTableEdit />,
        mantineTableBodyCellProps: ({ column, cell }) => ({
            style:
                column.id === "nivel"
                    ? {
                          backgroundColor:
                              cell.row.original.nivel_id === 1
                                  ? "teal"
                                  : cell.row.original.nivel_id === 2
                                  ? "orange"
                                  : "indigo",
                          color: "white",
                      }
                    : {},
        }),
    });

    return <TableContent table={table} />;
};
