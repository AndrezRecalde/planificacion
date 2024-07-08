import { useState } from "react";
import {
    Group,
    Box,
    Collapse,
    ThemeIcon,
    Text,
    UnstyledButton,
    rem,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import classes from "../../../assets/styles/layout/NavbarModule/NavbarLinksGroup.module.css";


export const LinksGroup = ({ icon: Icon, label, initiallyOpened, links, toggleMobile }) => {
    const hasLinks = Array.isArray(links);
    const [opened, setOpened] = useState(initiallyOpened || false);
    const location = useLocation();

    const isActive = (link) => {
        return location.pathname === link;
    }

    const items = (hasLinks ? links : []).map((link) => (
        <Text
            component={Link}
            className={`${classes.link} ${isActive(link.link) ? classes.linkActive : ''}`}
            to={link.link}
            key={link.label}
            //onClick={(event) => event.preventDefault()}
            onClick={toggleMobile}
        >
            {link.label}
        </Text>
    ));

    return (
        <>
            <UnstyledButton
                onClick={() => setOpened((o) => !o)}
                className={classes.control}
            >
                <Group justify="space-between" gap={0}>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <ThemeIcon
                            variant="default"
                            color="indigo.7"
                            radius="lg"
                            size="lg"
                        >
                            <Icon size="1.2rem" stroke={1.7} />
                        </ThemeIcon>
                        <Box ml="md">{label}</Box>
                    </Box>
                    {hasLinks && (
                        <IconChevronRight
                            className={classes.chevron}
                            stroke={1.5}
                            style={{
                                width: rem(16),
                                height: rem(16),
                                transform: opened ? "rotate(-90deg)" : "none",
                            }}
                        />
                    )}
                </Group>
            </UnstyledButton>
            {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
        </>
    );
};

/* const mockdata = {
    label: "Releases",
    icon: IconCalendarStats,
    links: [
        { label: "Upcoming releases", link: "/" },
        { label: "Previous releases", link: "/" },
        { label: "Releases schedule", link: "/" },
    ],
};

export function NavbarLinksGroup() {
    return (
        <Box mih={220} p="md">
            <LinksGroup {...mockdata} />
        </Box>
    );
} */
