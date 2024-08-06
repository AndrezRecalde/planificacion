import cx from "clsx";
import { useState, useEffect, useMemo } from "react";
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
    IconGrain,
    IconLogout,
    IconSettings,
    IconUserHexagon,
} from "@tabler/icons-react";
import { useAuthStore } from "../../hooks/auth/useAuthStore";
import { useNavigate } from "react-router-dom";

import classes from "../../assets/styles/layout/UsersModules/UserHeader.module.css";

const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem("service_user"));

const extractInitials = (nombres, apellidos) => `${nombres[0]}${apellidos[0]}`;

const extractName = (nombres, apellidos) => {
    const nombre_index = nombres.indexOf(" ");
    const apellido_index = apellidos.indexOf(" ");
    return `${nombres.substring(0, nombre_index)} ${apellidos.substring(0, apellido_index)}`;
};

export const UserBtnHeader = () => {
    const theme = useMantineTheme();
    const { startLogout } = useAuthStore();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    useEffect(() => {
        setUsuario(getUserFromLocalStorage());
    }, []);

    const nombres = useMemo(() => {
        if (!usuario) return "";
        return extractName(usuario.nombres, usuario.apellidos);
    }, [usuario]);

    const iniciales = useMemo(() => {
        if (!usuario) return "";
        return extractInitials(usuario.nombres, usuario.apellidos);
    }, [usuario]);

    const handleNavigation = (e, url) => {
        e.preventDefault();
        navigate(url);
    };

    const menuBtnUserHeader = [
        {
            label: "Ver perfil",
            action: "/profile",
            icon: IconUserHexagon,
            color: theme.colors.indigo[6],
        },
        {
            label: "Cambiar contraseña",
            action: "/space/change-password",
            icon: IconSettings,
            color: theme.colors.gray[6],
        },
        {
            label: "Mi actividad",
            action: "/space/change-password",
            icon: IconGrain,
            color: theme.colors.teal[6],
        },
        {
            label: "Cerrar sesión",
            action: startLogout,
            icon: IconLogout,
            color: theme.colors.red[6],
        },
    ];

    if (!usuario) return null;

    return (
        <Menu
            trapFocus={false}
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
                            name={iniciales}
                        />
                        <div style={{ flex: 1 }}>
                            <Text fw={500} size="sm">
                                {nombres}
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
                <Menu.Label>Cuenta</Menu.Label>
                {menuBtnUserHeader.map(({ label, action, icon: Icon, color }) => (
                    <Menu.Item
                        key={label}
                        onClick={(e) =>
                            typeof action === "string"
                                ? handleNavigation(e, action)
                                : action()
                        }
                        leftSection={
                            <Icon
                                style={{ width: rem(16), height: rem(16) }}
                                color={color}
                                stroke={1.7}
                            />
                        }
                    >
                        {label}
                    </Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
    );
};
