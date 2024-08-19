import { useCallback, useMemo } from "react";
import { Group } from "@mantine/core";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { IconSearch } from "@tabler/icons-react";
import { YearPickerInput } from "@mantine/dates";
import { BtnSection, MenuActionsED } from "../../../../components";
import { BTN_TITLES } from "../../../../helpers";
import { useInstrumentoStore } from "../../../../hooks";


export const InstrumentosList = () => {

    const { isLoading, instrumentos } = useInstrumentoStore();

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
            },
            {
                header: "Periodo",
                accessorFn: (row) => `2019 - 2023`,
            },
        ],
        []
    );

    const handleEditar = useCallback((selected) => {
        console.log("clic editar");
    }, []);

    const handleEliminar = useCallback((selected) => {
        console.log("clic eliminar");
    }, []);

    const table = useMantineReactTable({
        columns,
        data: instrumentos, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        state: { showProgressBars: isLoading },
        enableFacetedValues: true,
        enableRowActions: true,
        renderTopToolbarCustomActions: ({ table }) => (
            <Group>
                <YearPickerInput placeholder="Elige año" value={new Date()} />
                <BtnSection icon={IconSearch}>{BTN_TITLES.BTN_SEARCH}</BtnSection>
            </Group>
        ),
        renderRowActionMenuItems: ({ row }) => (
            <MenuActionsED
                row={row}
                handleEditar={handleEditar}
                handleEliminar={handleEliminar}
            />
        ),
    });
    return <MantineReactTable table={table} />;
};
