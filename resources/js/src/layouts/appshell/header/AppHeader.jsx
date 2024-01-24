import { Burger, Group } from "@mantine/core";
import { BtnSearch, UserBtnHeader } from "../../../components";
import { Logo, BtnDarkMode } from "../../../components";
import classes from "./AppHeaderModules/AppHeader.module.css";

export const AppHeader = ({
    mobileOpened,
    toggleMobile,
    desktopOpened,
    toggleDesktop,
}) => {
    return (
        <Group h="100%" px="md" justify="space-between">
            <Group>
                <Logo height={50} width={200} />
                <Burger
                    opened={mobileOpened}
                    onClick={toggleMobile}
                    hiddenFrom="sm"
                    size="sm"
                />
                <Burger
                    opened={desktopOpened}
                    onClick={toggleDesktop}
                    visibleFrom="sm"
                    size="sm"
                />
            </Group>

            <Group>
                <BtnSearch classes={classes} />
                <BtnDarkMode classes={classes} />
                <UserBtnHeader />
            </Group>
        </Group>
    );
};
