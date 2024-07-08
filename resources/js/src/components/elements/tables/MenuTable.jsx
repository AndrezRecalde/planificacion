import { Menu, rem } from "@mantine/core";
import { IconEditCircle, IconPlus } from "@tabler/icons-react";

export const MenuTableEdit = ({ row, handleEditar }) => {
    return (
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
    );
};

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
