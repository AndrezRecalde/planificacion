import { Button, Menu, rem } from "@mantine/core";
import { IconArchive, IconChevronsDownRight, IconClockPause, IconSettings } from "@tabler/icons-react";

export const BtnDetailProyecto = () => {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Button rightSection={<IconChevronsDownRight style={{ width: rem(14), height: rem(14) }} />} size="xs" variant="light">Acciones</Button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Status Proyecto</Menu.Label>
                <Menu.Item
                    leftSection={
                        <IconArchive
                            style={{ width: rem(14), height: rem(14) }}
                        />
                    }
                >
                    Archivar proyecto
                </Menu.Item>
                <Menu.Item
                    leftSection={
                        <IconClockPause
                            style={{ width: rem(14), height: rem(14) }}
                        />
                    }
                >
                    Pausar proyecto
                </Menu.Item>
                <Menu.Item
                    leftSection={
                        <IconSettings
                            style={{ width: rem(14), height: rem(14) }}
                        />
                    }
                >
                    Editar proyecto
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};
