import { Menu, rem } from "@mantine/core";
import { IconEditCircle, IconTrash } from "@tabler/icons-react";

export const MenuTable = () => {
    return (
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
                    <IconTrash style={{ width: rem(15), height: rem(15) }} />
                }
                onClick={() => console.info("eliminar")}
            >
                Eliminar
            </Menu.Item>
        </>
    );
};
