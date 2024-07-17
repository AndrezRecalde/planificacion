import { useMemo } from "react";
import { Menu, Group, Text, rem, ActionIcon } from "@mantine/core";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { IconEditCircle, IconSearch, IconTrash } from "@tabler/icons-react";
import { YearPickerInput } from "@mantine/dates";
import { BtnSection } from "../../elements/buttons/BtnServices";

const instrumentos = [
    {
        id: 1,
        nombre_archivo:
            "Archivo del Plan de desarrollo y Ordenamiento Territorial (PDOT) registrado",
        archivo: "0802704171",
        anio_inicio: "03/08/2023",
        anio_fin: "05/01/2024",
    },
    {
        id: 1,
        nombre_archivo:
            "Archivo del Plan de desarrollo y Ordenamiento Territorial (PDOT) registrado",
        archivo: "0802704444",
        anio_inicio: "03/08/2023",
        anio_fin: "05/01/2024",
    },
    {
        id: 1,
        nombre_archivo:
            "Archivo del Plan de desarrollo y Ordenamiento Territorial (PDOT) registrado",
        archivo: "0802704656",
        anio_inicio: "03/08/2023",
        anio_fin: "05/01/2024",
    },
    {
        id: 1,
        nombre_archivo:
            "Archivo del Plan de desarrollo y Ordenamiento Territorial (PDOT) registrado",
        archivo: "080270417655",
        anio_inicio: "03/08/2023",
        anio_fin: "05/01/2024",
    },
    {
        id: 1,
        nombre_archivo:
            "Archivo del Plan de desarrollo y Ordenamiento Territorial (PDOT) registrado",
        archivo: "080270417335",
        anio_inicio: "03/08/2023",
        anio_fin: "05/01/2024",
    },
];

export const InstrumentosList = () => {
    const columns = useMemo(
        () => [
            {
                header: "Nombre archivo",
                accessorKey: "nombre_archivo",
                enableColumnFilter: false,
            },
            {
                header: "Archivo",
                accessorKey: "archivo",
                enableGrouping: false, //do not let this column be grouped
            },
            {
                header: "Periodo",
                accessorFn: (row) => `2019 - 2023`,
                enableGrouping: false, //do not let this column be grouped
            },
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data: instrumentos, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
        enableRowActions: true,

        renderTopToolbarCustomActions: ({ table }) => (
            <Group>
                <YearPickerInput placeholder="Elige año" value={new Date()} />
                <BtnSection icon={IconSearch}>
                    Buscar
                </BtnSection>
            </Group>
        ),
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
    });
    return <MantineReactTable table={table} />;
};
