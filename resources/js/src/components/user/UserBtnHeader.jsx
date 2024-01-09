import cx from "clsx";
import {
    Avatar,
    Group,
    Menu,
    Text,
    UnstyledButton,
    rem,
    useMantineTheme,
} from "@mantine/core";
import {
    IconChevronRight,
    IconLogout,
    IconSettings,
    IconUserHexagon,
} from "@tabler/icons-react";
import { useState } from "react";
import classes from "./UserModule/UserHeader.module.css";

const user = {
    name: "Cristhian Recalde",
    email: "crecalde@gadpe.gob.ec",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
};

export const UserBtnHeader = () => {
    const theme = useMantineTheme();
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    return (
        <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: "slide-left" }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
        >
            <Menu.Target>
                <UnstyledButton
                    className={cx(classes.user, {
                        [classes.userActive]: userMenuOpened,
                    })}
                >
                    <Group gap={7}>
                        <Avatar
                            src={user.image}
                            alt={user.name}
                            radius="xl"
                            size={25}
                        />
                        <div style={{ flex: 1 }}>
                            <Text fw={500} size="sm">
                                {user.name}
                            </Text>
                            <Text size="xs" c="dimmed">
                                {user.email}
                            </Text>
                        </div>
                        <IconChevronRight
                            style={{ width: rem(12), height: rem(12) }}
                            stroke={1.5}
                        />
                    </Group>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item
                    leftSection={
                        <IconUserHexagon
                            style={{ width: rem(16), height: rem(16) }}
                            color={theme.colors.indigo[6]}
                            stroke={1.5}
                        />
                    }
                >
                    Ver perfil
                </Menu.Item>
                <Menu.Item
                    leftSection={
                        <IconSettings
                            style={{ width: rem(16), height: rem(16) }}
                            stroke={1.5}
                        />
                    }
                >
                    Cambiar contraseña
                </Menu.Item>
                <Menu.Label>Settings</Menu.Label>
                <Menu.Item
                    color="red"
                    leftSection={
                        <IconLogout
                            style={{ width: rem(16), height: rem(16) }}
                            stroke={1.5}
                        />
                    }
                >
                    Cerrar sesión
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};
