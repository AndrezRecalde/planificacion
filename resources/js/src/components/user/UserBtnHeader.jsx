import cx from "clsx";
import { useState } from "react";
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
import classes from "./UserModule/UserHeader.module.css";
import { useAuthStore } from "../../hooks/auth/useAuthStore";

const user = {
    name: "Cristhian Recalde",
    email: "crecalde@gadpe.gob.ec",
    abreviatura: "CR",
};

export const UserBtnHeader = () => {
    const theme = useMantineTheme();
    const { startLogout } = useAuthStore();
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    return (
        <Menu
            width={260}
            shadow="md"
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
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
                        <Avatar alt={user.name} radius="xl" color="indigo.7">
                            {user.abreviatura}
                        </Avatar>
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
                    onClick={startLogout}
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
