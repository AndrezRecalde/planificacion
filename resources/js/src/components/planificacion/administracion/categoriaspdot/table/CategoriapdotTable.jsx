import { useMantineReactTable } from "mantine-react-table";
import { useCallback, useMemo } from "react";
import { BtnActiveStatus, BtnSection, MenuTableEdit, TableContent } from "../../../../../components";
import { IconCopyPlus } from "@tabler/icons-react";
import { useCategoriapdotStore, useUiCategoriapdot } from "../../../../../hooks";


export const CategoriapdotTable = () => {
    const { isLoading, categoriaspdot, setActivateCategoriapdot } = useCategoriapdotStore();
    const { modalActionCategoriapdot, modalActionStatusCategoriapdot } = useUiCategoriapdot();
    const columns = useMemo(
        () => [
            {
                header: "Nombre Categoria",
                accessorKey: "nombre_categoria",
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
        [categoriaspdot]
    );

    const handleActive = useCallback((selected) => {
        setActivateCategoriapdot(selected)
        modalActionStatusCategoriapdot(true);
    }, [categoriaspdot]);

    const handleAgregar = useCallback(() => {
        modalActionCategoriapdot(true);
    }, [categoriaspdot]);

    const handleEditar = useCallback((selected) => {
        setActivateCategoriapdot(selected);
        modalActionCategoriapdot(true);
    }, [categoriaspdot]);

    const table = useMantineReactTable({
        columns,
        data: categoriaspdot, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
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
    });

    return <TableContent table={table} />;
};
