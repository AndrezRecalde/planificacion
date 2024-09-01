import { useCallback, useMemo } from "react";
import { useMantineReactTable } from "mantine-react-table";
import {
    BtnActiveStatus,
    MenuTableEdit,
    BtnSection,
    TableContent,
} from "../../../..";
import { IconCopyPlus } from "@tabler/icons-react";
import {
    usePlanificacionTipoStore,
    useUiPlanificacionTipo,
} from "../../../../../hooks";

export const PlanificaciontiposTable = () => {
    const { isLoading, planificacionTipos, setActivatePlanificacionTipo } =
        usePlanificacionTipoStore();
    const { modalActionPlanificacionTipo, modalActionStatusPlanificacionTipo } =
        useUiPlanificacionTipo();

    const columns = useMemo(
        () => [
            {
                header: "Tipo de planificación",
                accessorKey: "nombre_planificacion",
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
        [planificacionTipos]
    );

    const handleActive = useCallback(
        (selected) => {
            setActivatePlanificacionTipo(selected);
            modalActionStatusPlanificacionTipo(true);
        },
        [planificacionTipos]
    );

    const handleAgregar = useCallback(() => {
        modalActionPlanificacionTipo(true);
    }, [planificacionTipos]);

    const handleEditar = useCallback(
        (selected) => {
            setActivatePlanificacionTipo(selected);
            modalActionPlanificacionTipo(true);
        },
        [planificacionTipos]
    );

    const table = useMantineReactTable({
        columns,
        data: planificacionTipos, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
        enableDensityToggle: false,
        defaultColumn: { minSize: 80, maxSize: 200, size: 100 },
        state: { showProgressBars: isLoading },
        //state: { showProgressBars: isLoading },
        //enableColumnFilters: false,
        //enablePagination: false,
        //enableSorting: false,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => (
            <MenuTableEdit row={row} handleEditar={handleEditar} />
        ),
        renderTopToolbarCustomActions: ({ table }) => (
            <BtnSection
                disabled={true}
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
