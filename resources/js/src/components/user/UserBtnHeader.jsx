import cx from "clsx";
import { useCallback, useMemo, useState } from "react";
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

export const UserBtnHeader = () => {
    const theme = useMantineTheme();
    const { startLogout } = useAuthStore();
    const usuario = useMemo(
        () => JSON.parse(localStorage.getItem("service_user")),
        []
    );
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const nombres = useCallback(() => {
        const nombre_index = usuario.nombres.indexOf(" ");
        const apellido_index = usuario.apellidos.indexOf(" ");

        let _nombre = usuario.nombres.substring(0, nombre_index);
        let _apellido = usuario.apellidos.substring(0, apellido_index);

        return _nombre + " " + _apellido;
    }, [usuario]);

    const iniciales = useCallback(() => {
        let inicial_nombre = usuario.nombres.slice(0, 1);
        let inicial_apellido = usuario.apellidos.slice(0, 1);
        return inicial_nombre + inicial_apellido;
    }, [usuario]);

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
                        <Avatar
                            alt={usuario.apellidos}
                            radius="xl"
                            color="indigo.7"
                        >
                            {iniciales()}
                        </Avatar>
                        <div style={{ flex: 1 }}>
                            <Text fw={500} size="sm">
                                {nombres()}
                            </Text>
                            <Text size="xs" c="dimmed">
                                {usuario.email}
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
