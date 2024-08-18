import { Menu, rem } from "@mantine/core";
import { IconEditCircle, IconEye, IconPlus } from "@tabler/icons-react";

/* Menu Action de EDITAR */
export const MenuTableEdit = ({ row, handleEditar }) => {
    return (
        <Menu.Item
            leftSection={
                <IconEditCircle style={{ width: rem(15), height: rem(15) }} />
            }
            onClick={() => handleEditar(row.original)}
        >
            Editar
        </Menu.Item>
    );
};

export const MenuTableAddPermissions = ({ row, handleAddPermission }) => {
    return (
        <Menu.Item
            leftSection={
                <IconEditCircle style={{ width: rem(15), height: rem(15) }} />
            }
            onClick={() => handleAddPermission(row.original)}
        >
            Agregar Permisos
        </Menu.Item>
    );
};

/* Menu Action de AGREGAR */
export const MenuTableAdd = ({ row, title, handleAdd }) => {
    return (
        <Menu.Item
            leftSection={
                <IconPlus style={{ width: rem(14), height: rem(14) }} />
            }
            onClick={() => handleAdd()}
        >
            {title}
        </Menu.Item>
    );
};

/* Menu Action de VER y EDITAR */
export const MenuActionsVE = ({ row, handleView, handleEditar }) => {
    return (
        <>
            <Menu.Item
                leftSection={
                    <IconEditCircle
                        style={{ width: rem(15), height: rem(15) }}
                    />
                }
                onClick={() => handleEditar(row.original)}
            >
                Editar
            </Menu.Item>
            <Menu.Item
                leftSection={
                    <IconEye style={{ width: rem(14), height: rem(14) }} />
                }
                onClick={() => handleView(row.original)}
            >
                Ver Objetivos
            </Menu.Item>
        </>
    );
};
