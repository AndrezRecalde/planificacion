import { useCallback, useMemo } from "react";
import { ActionIcon, Box, Group } from "@mantine/core";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { IconCloudDownload, IconSearch } from "@tabler/icons-react";
import { YearPickerInput } from "@mantine/dates";
import { BtnSection, BtnSubmit, MenuActionsED } from "../../../../components";
import { BTN_TITLES } from "../../../../helpers";
import { useInstrumentoStore } from "../../../../hooks";
import { useForm } from "@mantine/form";

export const InstrumentosList = () => {
    const { isLoading, instrumentos, startLoadInstrumentos, startDownloadInstrumento } =
        useInstrumentoStore();

    const form = useForm({
        initialValues: {
            fecha_inicio: new Date(),
        },
    });

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
                Cell: ({ cell }) => (
                    <ActionIcon
                        onClick={() => handleExport(cell.row.original)}
                        variant="transparent"
                        color="indigo"
                        radius={20}
                        aria-label="Archivo"
                    >
                        <IconCloudDownload
                            style={{ width: "70%", height: "70%" }}
                            stroke={2}
                        />
                    </ActionIcon>
                ),
            },
            {
                header: "Periodo",
                accessorFn: (row) => `${row.fecha_inicio} - ${row.fecha_fin}`,
            },
        ],
        []
    );

    const handleExport = useCallback((selected) => {
        console.log(selected.archivo);
        startDownloadInstrumento(`storage${selected.archivo}`);
    }, []);

    const handleEditar = useCallback((selected) => {
        console.log("clic editar");
    }, []);

    const handleEliminar = useCallback((selected) => {
        console.log("clic eliminar");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        startLoadInstrumentos(form.getValues());
    }

    const table = useMantineReactTable({
        columns,
        data: instrumentos, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        state: { showProgressBars: isLoading },
        enableFacetedValues: true,
        enableRowActions: true,
        renderTopToolbarCustomActions: ({ table }) => (
            <Box
                component="form"
                style={(theme) => ({
                    padding: theme.spacing.xs,
                })}
                onSubmit={form.onSubmit((_, e) => handleSubmit(e))}
            >
                <Group>
                    <YearPickerInput
                        placeholder="Elige año"
                        value={new Date()}
                        {...form.getInputProps("fecha_inicio")}
                    />
                    <BtnSubmit heigh={35} fontSize={12} fullwidth={false} IconSection={IconSearch}>
                        {BTN_TITLES.BTN_SEARCH}
                    </BtnSubmit>
                </Group>
            </Box>
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
