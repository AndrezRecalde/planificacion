import { TextInput, UnstyledButton, rem } from "@mantine/core";
import { Spotlight, spotlight } from "@mantine/spotlight";
import {
    IconHome,
    IconDashboard,
    IconFileText,
    IconSearch,
} from "@tabler/icons-react";

export const BtnSearch = ({ classes }) => {
    const actions = [
        {
            id: "home",
            label: "Home",
            description: "Get to home page",
            onClick: () => console.log("Home"),
            leftSection: (
                <IconHome
                    style={{ width: rem(24), height: rem(24) }}
                    stroke={1.5}
                />
            ),
        },
        {
            id: "dashboard",
            label: "Dashboard",
            description: "Get full information about current system status",
            onClick: () => console.log("Dashboard"),
            leftSection: (
                <IconDashboard
                    style={{ width: rem(24), height: rem(24) }}
                    stroke={1.5}
                />
            ),
        },
        {
            id: "proyectos",
            label: "Proyectos",
            description: "Visit documentation to lean more about all features",
            onClick: () => console.log("Documentation"),
            leftSection: (
                <IconFileText
                    style={{ width: rem(24), height: rem(24) }}
                    stroke={1.5}
                />
            ),
        },
    ];

    return (
        <div>
            <UnstyledButton
                className={classes.BtnSearch}
                onClick={spotlight.open}
            >
                <TextInput
                    pointer
                    radius="lg"
                    placeholder="Buscar"
                    rightSection={
                        <IconSearch style={{ width: 20, height: 20 }} />
                    }
                />
            </UnstyledButton>
            <Spotlight
                actions={actions}
                nothingFound="No se ha encontrado nada..."
                highlightQuery
                searchProps={{
                    leftSection: (
                        <IconSearch
                            style={{ width: rem(20), height: rem(20) }}
                            stroke={1.5}
                        />
                    ),
                    placeholder: "Buscar...",
                }}
            />
        </div>
    );
};

export const InputSeach = ({ texto }) => {
    return (
        <TextInput
            radius="md"
            size="md"
            mt="md"
            placeholder={texto}
            rightSectionWidth={42}
            leftSection={
                <IconSearch
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={1.5}
                />
            }
        />
    );
};
