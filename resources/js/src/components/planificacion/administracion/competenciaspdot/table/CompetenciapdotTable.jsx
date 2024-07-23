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
import { useCompetenciapdotStore, useUiCompetenciapdot } from "../../../../../hooks";

export const CompetenciapdotTable = () => {

    const { isLoading, competenciaspdot, setActivateCompetenciapdot } = useCompetenciapdotStore();
    const { modalActionCompetenciapdot, modalActionStatusCompetenciapdot } = useUiCompetenciapdot();

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
                accessorKey: "linea_estrategica",
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

    const handleActive = useCallback((selected) => {
        setActivateCompetenciapdot(selected);
        modalActionStatusCompetenciapdot(true);
    }, [competenciaspdot]);

    const handleAgregar = useCallback(() => {
        modalActionCompetenciapdot(true);
    }, [competenciaspdot]);

    const handleEditar = useCallback((selected) => {
        setActivateCompetenciapdot(selected);
        modalActionCompetenciapdot(true);
    }, [competenciaspdot]);

    const table = useMantineReactTable({
        columns,
        data: competenciaspdot, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        state: { showProgressBars: isLoading },
        enableFacetedValues: true,
        enableDensityToggle: false,
        defaultColumn: { minSize: 80, maxSize: 200, size: 100 },
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
