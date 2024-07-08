import { Button, Menu, rem } from "@mantine/core";
import {
    IconChevronsDownRight,
    IconLibraryPlus,
    IconListDetails,
    IconTags,
} from "@tabler/icons-react";

export const BtnActividadSection = () => {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Button
                    rightSection={
                        <IconChevronsDownRight
                            color={"#4C6EF5"}
                            style={{ width: rem(14), height: rem(14) }}
                        />
                    }
                    size="xs"
                    variant="default"
                >
                    Acciones
                </Button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Sección actividades</Menu.Label>
                <Menu.Item
                    leftSection={
                        <IconLibraryPlus
                            style={{ width: rem(14), height: rem(14) }}
                        />
                    }
                >
                    Agregar actividad
                </Menu.Item>
                <Menu.Item
                    leftSection={
                        <IconListDetails style={{ width: rem(14), height: rem(14) }} />
                    }
                >
                    Agregar Estado
                </Menu.Item>
                <Menu.Item
                    leftSection={
                        <IconTags style={{ width: rem(14), height: rem(14) }} />
                    }
                >
                    Agregar Etiquetas
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};
